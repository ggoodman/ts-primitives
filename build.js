//@ts-check
'use strict';

const Events = require('events');
const Fs = require('fs');
const Path = require('path');
const Zlib = require('zlib');

const Wreck = require('@hapi/wreck');
const Pino = require('pino');
const TarStream = require('tar-stream');
const Rollup = require('rollup');
const Typescript = require('typescript');

/** @type {import('@wessberg/rollup-plugin-ts')['default']} */
//@ts-ignore
const RollupPluginTypescript = require('@wessberg/rollup-plugin-ts');

const Package = require('./package.json');

const VSCODE_GIT_REF = 'master';

/**
 *
 * @param {import('pino').Logger} logger
 */
async function main(logger, hashish = VSCODE_GIT_REF) {
  await Fs.promises.rmdir(Path.join(__dirname, 'src'), { recursive: true });

  logger.info('emptied src dir');

  await Fs.promises.rmdir(Path.join(__dirname, 'dist'), { recursive: true });

  logger.info('emptied dist dir');

  await Fs.promises.rmdir(Path.join(__dirname, 'docs'), { recursive: true });

  logger.info('emptied docs dir');

  const entryPath = Path.join(__dirname, 'src/index.ts');

  const url = `https://github.com/microsoft/vscode/archive/${hashish}.tar.gz`;
  const res = await Wreck.request('GET', url, {
    redirects: 3,
  });

  logger.info({ res, url }, 'zip content response');

  const extract = TarStream.extract();
  const gunzip = Zlib.createGunzip();

  extract.on('entry', (header, stream, next) => {
    const relativeZipPath = header.name;

    if (
      header.type !== 'file' ||
      !relativeZipPath.match(/^[^/]+\/src\/vs\/base\/common\/.*\.ts$|^[^/]+\/src\/typings\/.*\.d\.ts$/)
    ) {
      return Wreck.read(stream).then(() => next(), next);
    }

    const targetPath = Path.join(__dirname, relativeZipPath.replace(/^[^/]+/, './'));

    return Wreck.read(stream)
      .then(async (data) => {
        await Fs.promises.mkdir(Path.dirname(targetPath), { recursive: true });

        return Fs.promises.writeFile(targetPath, data);
      })
      .then(() => next(), next);
  });

  res.pipe(gunzip).pipe(extract);

  await Events.once(extract, 'finish');

  logger.info('finished reading zip into memoryFs');

  await Fs.promises.writeFile(
    Path.join(__dirname, './src/vs/base/common/platform.ts'),
    `interface ISetImmediate {
      (callback: (...args: any[]) => void): void;
    }
    
    const _globals = (typeof self === 'object' ? self : typeof global === 'object' ? global : {} as any);
    export const globals: any = _globals;

    export const isWindows = false;
    export const isMacintosh = false;

    export const setImmediate: ISetImmediate = (function defineSetImmediate() {
      if (globals.setImmediate) {
        return globals.setImmediate.bind(globals);
      }
      if (typeof globals.postMessage === 'function' && !globals.importScripts) {
        interface IQueueElement {
          id: number;
          callback: () => void;
        }
        let pending: IQueueElement[] = [];
        globals.addEventListener('message', (e: MessageEvent) => {
          if (e.data && e.data.vscodeSetImmediateId) {
            for (let i = 0, len = pending.length; i < len; i++) {
              const candidate = pending[i];
              if (candidate.id === e.data.vscodeSetImmediateId) {
                pending.splice(i, 1);
                candidate.callback();
                return;
              }
            }
          }
        });
        let lastId = 0;
        return (callback: () => void) => {
          const myId = ++lastId;
          pending.push({
            id: myId,
            callback: callback
          });
          globals.postMessage({ vscodeSetImmediateId: myId }, '*');
        };
      }
      if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
        return process.nextTick.bind(process);
      }
      const _promise = Promise.resolve();
      return (callback: (...args: any[]) => void) => _promise.then(callback);
    })();
  `
  );

  await Fs.promises.writeFile(
    entryPath,
    `export {
      isThenable,
      CancelablePromise,
      createCancelablePromise,
      raceCancellation,
      asPromise,
      Throttler,
      Sequencer,
      Delayer,
      ThrottledDelayer,
      Barrier,
      timeout,
      disposableTimeout,
      ignoreErrors,
      sequence,
      first,
      Limiter,
      Queue,
      retry,
    } from 'vs/base/common/async';
    export * from 'vs/base/common/cancellation';
    export * from 'vs/base/common/charCode';
    export * from 'vs/base/common/event';
    export * from 'vs/base/common/lifecycle';
    export * from 'vs/base/common/path';
    export * from 'vs/base/common/uri';

    /*---------------------------------------------------------------------------------------------
      *  Copyright (c) Microsoft Corporation. All rights reserved.
      *  Licensed under the MIT License. See License.txt in the project root for license information.
      *--------------------------------------------------------------------------------------------*/

    /**
     * Thenable is a common denominator between ES6 promises, Q, jquery.Deferred, WinJS.Promise,
     * and others. This API makes no assumption about what promise libary is being used which
     * enables reusing existing code without migrating to a specific promise implementation. Still,
     * we recommend the use of native promises which are available in VS Code.
     */
    export interface Thenable<T> {
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult>(
        onfulfilled?: (value: T) => TResult | Thenable<TResult>,
        onrejected?: (reason: any) => TResult | Thenable<TResult>
      ): Thenable<TResult>;
      then<TResult>(
        onfulfilled?: (value: T) => TResult | Thenable<TResult>,
        onrejected?: (reason: any) => void
      ): Thenable<TResult>;
    }`
  );

  /** @type {import('rollup').OutputOptions[]} */
  const outputOptions = [
    {
      file: Package.main,
      format: 'commonjs',
      sourcemap: true,
    },
  ];
  const typescriptPlugin = RollupPluginTypescript({
    browserslist: false,
    transpileOnly: true,
    tsconfig: `${__dirname}/tsconfig.json`,
    exclude: [`${__dirname}/src/vs/base/common/uri.ts`],
    cwd: __dirname,
    typescript: Typescript,
  });
  const build = await Rollup.rollup({
    input: entryPath,
    output: outputOptions,
    plugins: [typescriptPlugin],
  });

  logger.info(
    {
      timings: build.getTimings ? build.getTimings() : undefined,
    },
    'build complete'
  );

  for (const output of outputOptions) {
    await build.write(output);
    logger.info({ output }, 'bundle written');
  }
}

if (require.main === module) {
  const logger = Pino({
    prettyPrint: process.env.NODE_ENV !== 'production',
    serializers: Pino.stdSerializers,
    level: 'info',
  });

  main(logger, process.argv[2]).then(
    () => {
      logger.info('goodbye');
    },
    (err) => {
      console.error(err);
      logger.fatal(err, 'fatal error, exiting');
      logger.flush();
      process.exit(1);
    }
  );
}
