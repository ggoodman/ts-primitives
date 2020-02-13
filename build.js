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
        declaration: true,
        moduleResolution: 'node',
        baseUrl: `${__dirname}/src`,
        paths: {
          'vs/*': [`${__dirname}/src/vs/*`],
        },
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
      export * from 'vs/base/common/lifecycle';`,
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

    if (header.type !== 'file' || !relativeZipPath.match(/^[^/]+\/src\/vs\/base\/common\//)) {
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
  });

  const project = app.convert([entryPath]);

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
