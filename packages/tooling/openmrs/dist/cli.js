#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const child_process_1 = require("child_process");
const path_1 = require("path");
const utils_1 = require("./utils");
const runner = (0, path_1.resolve)(__dirname, `runner.js`);
const root = (0, path_1.resolve)(__dirname, '..');
function runCommand(type, args) {
    const ps = (0, child_process_1.fork)(runner, [], { cwd: type === 'runBuild' ? root : process.cwd() });
    ps.send({
        type,
        args,
    });
    ps.on('exit', (code) => process.exit(code || 0));
}
yargs_1.default.command('debug', 'Starts a new debugging session of the OpenMRS app shell. This uses Webpack as a debug server with proxy middleware.', (argv) => argv
    .number('port')
    .default('port', 8080)
    .describe('port', 'The port where the dev server should run.')
    .number('host')
    .default('host', 'localhost')
    .describe('host', 'The host name or IP for the server to use.')
    .string('backend')
    .default('backend', 'https://dev3.openmrs.org/')
    .describe('backend', 'The backend to proxy API requests to.')
    .string('add-cookie')
    .default('add-cookie', '')
    .describe('add-cookie', 'Additional cookies to provide when proxying.')
    .boolean('support-offline')
    .describe('support-offline', 'Determines if a service worker should be installed for offline support.')
    .default('support-offline', false)
    .string('spa-path')
    .default('spa-path', '/openmrs/spa/')
    .describe('spa-path', 'The path of the application on the target server.')
    .string('api-url')
    .default('api-url', '/openmrs/')
    .describe('api-url', 'The URL of the API. Can be a path if the API is on the same target server.')
    .string('page-title')
    .default('page-title', 'OpenMRS')
    .describe('page-title', 'The title of the web app usually displayed in the browser tab.')
    .array('config-url')
    .default('config-url', [])
    .describe('config-url', 'The URL to a valid frontend configuration. Can be used multiple times.')
    .boolean('run-project')
    .default('run-project', false)
    .describe('run-project', 'Runs the project in the current directory fusing it with the specified import map.')
    .array('sources')
    .default('sources', ['.'])
    .describe('sources', 'Runs the projects from the provided source directories. Can be used multiple times.')
    .array('shared-dependencies')
    .default('shared-dependencies', [])
    .describe('shared-dependencies', 'The additional shared dependencies besides the ones from the app shell.')
    .string('importmap')
    .default('importmap', 'importmap.json')
    .describe('importmap', 'The import map to use. Can be a path to a valid import map to be taken literally, an URL, or a fixed JSON object.')
    .string('routes')
    .default('routes', 'routes.registry.json')
    .describe('routes', 'The routes.registry.json file to use.'), async (args) => runCommand('runDebug', {
    configUrls: args['config-url'],
    ...args,
    ...(0, utils_1.proxyImportmapAndRoutes)(await (0, utils_1.mergeImportmapAndRoutes)(await (0, utils_1.getImportmapAndRoutes)(args.importmap, args.routes, args.port), (args['run-project'] || args.runProject) && (await (0, utils_1.runProject)(args.port, args.sources))), args.backend, args.host, args.port),
}));
yargs_1.default.command('develop', 'Starts a new frontend module development session with the OpenMRS app shell.', (argv) => argv
    .number('port')
    .default('port', 8080)
    .describe('port', 'The port where the dev server should run.')
    .number('host')
    .default('host', 'localhost')
    .describe('host', 'The host name or IP for the server to use.')
    .string('backend')
    .default('backend', 'https://dev3.openmrs.org/')
    .describe('backend', 'The backend to proxy API requests to.')
    .string('add-cookie')
    .default('add-cookie', '')
    .describe('add-cookie', 'Additional cookies to provide when proxying.')
    .string('spa-path')
    .default('spa-path', '/openmrs/spa/')
    .describe('spa-path', 'The path of the application on the target server.')
    .string('api-url')
    .default('api-url', '/openmrs/')
    .describe('api-url', 'The URL of the API. Can be a path if the API is on the same target server.')
    .boolean('open')
    .default('open', true)
    .describe('open', 'Immediately opens the SPA page URL in the browser.')
    .array('config-url')
    .default('config-url', [])
    .describe('config-url', 'The URL to a valid frontend configuration. Can be used multiple times.')
    .array('config-file')
    .default('config-file', [])
    .describe('config-file', 'The path to a frontend configuration file. Can be used multiple times.')
    .array('sources')
    .default('sources', ['.'])
    .describe('sources', 'Runs the projects from the provided source directories. Can be used multiple times.')
    .array('shared-dependencies')
    .default('shared-dependencies', [])
    .describe('shared-dependencies', 'The additional shared dependencies besides the ones from the app shell.')
    .string('importmap')
    .default('importmap', 'importmap.json')
    .describe('importmap', 'The import map to use. Can be a path to a valid import map to be taken literally, an URL, or a fixed JSON object.')
    .string('routes')
    .default('routes', 'routes.registry.json')
    .describe('routes', 'The routes.registry.json file to use.')
    .boolean('support-offline')
    .default('support-offline', false)
    .describe('support-offline', 'Determines if a service worker should be installed for offline support.'), async (args) => runCommand('runDevelop', {
    configUrls: args['config-url'],
    configFiles: args['config-file'],
    ...args,
    ...(0, utils_1.proxyImportmapAndRoutes)(await (0, utils_1.mergeImportmapAndRoutes)(await (0, utils_1.getImportmapAndRoutes)(args.importmap, args.routes, args.port), args.sources[0] !== false && (await (0, utils_1.runProject)(args.port, args.sources)), args.backend, args.spaPath), args.backend, args.host, args.port),
}));
yargs_1.default.command('build', 'Builds a new app shell.', (argv) => argv
    .option('target', {
    default: 'dist',
    describe: 'The target directory where the build artifacts will be stored.',
    type: 'string',
    coerce: (arg) => (0, path_1.resolve)(process.cwd(), arg),
})
    .option('registry', {
    alias: 'reg',
    default: 'https://registry.npmjs.org/',
    describe: 'The NPM registry used for getting the packages.',
    type: 'string',
})
    .option('fresh', {
    default: false,
    describe: 'Whether to clear the output directory before running the build.',
    type: 'boolean',
})
    .option('support-offline', {
    default: false,
    describe: 'Determines if a service worker should be installed for offline support.',
    type: 'boolean',
})
    .option('build-config', {
    describe: 'Path to the SPA build config JSON',
    type: 'string',
    coerce: (arg) => (0, path_1.resolve)(process.cwd(), arg),
})
    .option('spa-path', {
    default: '/openmrs/spa/',
    describe: 'The path of the application on the target server.',
    type: 'string',
})
    .option('page-title', {
    default: 'OpenMRS',
    describe: 'The title of the web app usually displayed in the browser tab.',
})
    .option('api-url', {
    default: '/openmrs/',
    describe: 'The URL of the API. Can be a path if the API is on the same target server.',
    type: 'string',
})
    .option('config-url', {
    default: [],
    describe: 'The URL to a frontend configuration. Can be used multiple times. Resolved by the client during initialization.',
    type: 'array',
})
    .option('config-path', {
    default: [],
    describe: 'The path to a frontend configuration file. Can be used multiple times. The file is copied directly into the build directory.',
    type: 'array',
    coerce: (arg) => arg.map((p) => (0, path_1.resolve)(process.cwd(), p)),
})
    .option('importmap', {
    default: undefined,
    describe: 'The import map to use. Can be a path to an import map to be taken literally, an URL, or a fixed JSON object.',
    type: 'string',
})
    .option('routes', {
    default: undefined,
    describe: 'The routes registry to use. Can be a path to an routes registry to be taken literally, an URL, or a fixed JSON object.',
    type: 'string',
})
    .option('default-locale', {
    default: '',
    describe: "The locale to use as a default for this build of the app shell. Should be a value that's valid to use in an HTML lang attribute, e.g., en or en_GB.",
    type: 'string',
}), async (args) => runCommand('runBuild', {
    ...args,
    configUrls: args['config-url'],
    configPaths: args['config-path'],
}));
yargs_1.default.command('assemble', 'Assembles an import map incl. all required resources.', (argv) => argv
    .option('target', {
    default: 'dist',
    description: 'The target directory where the gathered artifacts will be stored.',
    type: 'string',
    coerce: (arg) => (0, path_1.resolve)(process.cwd(), arg),
})
    .option('registry', {
    alias: 'reg',
    default: '',
    description: 'The NPM registry used for getting the packages.',
    type: 'string',
    coerce: (arg) => (0, utils_1.trimEnd)(arg, '/'),
})
    .option('config', {
    default: ['spa-build-config.json'],
    description: 'Path to a SPA assemble config JSON.',
    type: 'array',
    coerce: (arg) => arg.map((p) => (0, path_1.resolve)(process.cwd(), p)),
})
    .option('config-file', {
    default: [],
    describe: 'Reference to a frontend configuration file. Can be used multiple times. Configurations are merged in the order specified into openmrs-config.json.',
    type: 'array',
    coerce: (arg) => arg.map((p) => (0, path_1.resolve)(process.cwd(), p)),
})
    .option('hash-files', {
    default: false,
    alias: ['hasn', 'hash-importmap'],
    description: 'Determines whether to include a content-specific hash for the generated JSON files. This is useful if you want to be able to cache those files.',
    type: 'boolean',
})
    .option('fresh', {
    default: false,
    description: 'Determines if the output directory should be cleaned before the run.',
    type: 'boolean',
})
    .option('manifest', {
    default: false,
    description: 'Whether to output a manifest',
    type: 'boolean',
})
    .option('build-routes', {
    default: true,
    description: 'Whether to compile all module routes.json into a master routes.json',
    type: 'boolean',
})
    .option('mode', {
    choices: ['config', 'survey'],
    default: 'survey',
    description: 'The source of the frontend modules to assemble. `config` uses a configuration file specified via `--config`. `survey` starts an interactive command-line survey.',
    type: 'string',
}), (args) => runCommand('runAssemble', { ...args, configFiles: args['config-file'] }));
yargs_1.default.command(['start', '$0'], 'Starts the app shell using the provided configuration. This uses express for serving static files with some proxy middleware.', (argv) => argv
    .number('port')
    .default('port', 8080)
    .describe('port', 'The port where the dev server should run.')
    .number('host')
    .default('host', 'localhost')
    .describe('host', 'The host name or IP for the server to use.')
    .string('backend')
    .default('backend', 'https://dev3.openmrs.org/')
    .describe('backend', 'The backend to proxy API requests to.')
    .string('add-cookie')
    .default('add-cookie', '')
    .describe('add-cookie', 'Additional cookies to provide when proxying.')
    .boolean('open')
    .default('open', false)
    .describe('open', 'Immediately opens the SPA page URL in the browser.'), (args) => runCommand('runStart', {
    ...args,
}));
yargs_1.default
    .epilog('The SPA assemble config JSON is a JSON file, typically `frontend.json`, which defines parameters for the `build` and `assemble` ' +
    'commands. The keys used by `build` are:\n' +
    '  `apiUrl`, `spaPath`, `configPaths`, `configUrls`, `importmap`, `pageTitle`, and `supportOffline`;\n' +
    'each of which is equivalent to the corresponding command line argument (see `openmrs build --help`). ' +
    'Multiple values provided to `configPaths` and `configUrls` shoud be comma-separated.\n' +
    'The keys used by `assemble` are:\n' +
    '  frontendModules  \tAn object which specifies which frontend modules to include. It should have package names ' +
    'for keys and versions for values.\n' +
    '  publicUrl  \tThe URL at which the frontend modules will be made available. Can be relative to the importmap. ' +
    'Defaults to `.` (which means they will be colocated with the import map).\n\n' +
    'For more information visit https://github.com/openmrs/openmrs-esm-core.')
    .help()
    .demandCommand()
    .strict().argv;
