'use strict';

const Events = require('events');
const Fs = require('fs');
const Path = require('path');
const Zlib = require('zlib');

const Wreck = require('@hapi/wreck');
const MemFs = require('memfs');
const Pino = require('pino');
const RequireInTheMiddle = require('require-in-the-middle');
const TarStream = require('tar-stream');
const UnionFs = require('unionfs');

const Package = require('./package.json');

const VSCODE_GIT_REF = 'master';

/**
 *
 * @param {import('pino').Logger} logger
 */
async function main(logger, hashish = VSCODE_GIT_REF) {
  await Fs.promises.rmdir(Path.join(__dirname, 'dist'), { recursive: true });

  logger.info('emptied dist dir');

  await Fs.promises.rmdir(Path.join(__dirname, 'docs'), { recursive: true });

  logger.info('emptied docs dir');

  const entryPath = Path.join(__dirname, 'src/index.ts');

  /** @type {Record<string, string>} */
  const memFsFiles = {
    [Path.join(__dirname, 'tsconfig.json')]: JSON.stringify({
      compilerOptions: {
        allowJs: true,
        declaration: true,
        baseUrl: `./`,
        lib: ['dom', 'es5'],
        moduleResolution: 'node',
        noEmit: true,
        outDir: `./out`,
        paths: {
          'vs/*': [`./src/vs/*`],
        },
        strict: false,
        target: 'es2018',
      },
    }),
    [entryPath]: `
  export {
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
  export * from 'vs/base/common/event';
  export * from 'vs/base/common/lifecycle';

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
  }`,
  };

  const url = `https://github.com/microsoft/vscode/archive/${hashish}.tar.gz`;
  const res = await Wreck.request('GET', url, {
    redirects: 3,
  });

  logger.info({ res, url }, 'zip content response');

  const extract = TarStream.extract();
  const gunzip = Zlib.createGunzip();

  extract.on('entry', (header, stream, next) => {
    const relativeZipPath = header.name;

    if (header.type !== 'file' || !relativeZipPath.match(/^[^/]+\/src\/vs\/base\/common\/|^[^/]+\/src\/typings\//)) {
      return Wreck.read(stream).then(() => next(), next);
    }

    const targetPath = Path.join(__dirname, relativeZipPath.replace(/^[^/]+/, './'));

    return Wreck.read(stream).then(data => {
      memFsFiles[targetPath] = data.toString();

      next();
    }, next);
  });

  res.pipe(gunzip).pipe(extract);

  await Events.once(extract, 'finish');

  logger.info('finished reading zip into memoryFs');

  const memFs = MemFs.Volume.fromJSON(memFsFiles);

  logger.info('memory filesystem created');

  const unionFs = UnionFs.ufs.use(memFs).use(Fs);

  logger.info('union filesystem created');

  RequireInTheMiddle(['fs'], (exports, name, basedir) => {
    logger.debug({ moduleName: name, basedir }, 'hooked require');

    return unionFs;
  });

  logger.info('filesystem patched');

  const Rollup = require('rollup');
  const Typescript = require('typescript');

  /** @type {import('@wessberg/rollup-plugin-ts')['default']} */
  //@ts-ignore
  const RollupPluginTypescript = require('@wessberg/rollup-plugin-ts');

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
    // tsconfig: compilerOptions,
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

  const Typedoc = require('typedoc');

  const app = new Typedoc.Application();

  app.options.addReader(new Typedoc.TSConfigReader());

  app.bootstrap({
    mode: 'file',
    logger,
    plugin: ['typedoc-plugin-markdown'],
    readme: 'none',
    //@ts-ignore
    hideSources: true,
    excludePrivate: true,
    excludeProtected: true,
    ignoreCompilerErrors: true,
    includeDeclarations: true,
    excludeExternals: true,
  });

  const project = app.convert([Path.resolve(__dirname, Package.typings)]);

  if (project) {
    app.generateDocs(project, Path.resolve(__dirname, './docs'));
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
    err => {
      console.error(err);
      logger.fatal(err, 'fatal error, exiting');
      logger.flush();
      process.exit(1);
    }
  );
}
