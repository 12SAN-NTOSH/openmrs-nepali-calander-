"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDevelop = void 0;
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const node_path_1 = require("node:path");
const node_fs_1 = require("node:fs");
const promises_1 = require("node:fs/promises");
const utils_1 = require("../utils");
async function runDevelop(args) {
    const { backend, host, port, open, importmap, routes, watchedRoutesPaths, configUrls, configFiles, addCookie, supportOffline, } = args;
    const apiUrl = (0, utils_1.removeTrailingSlash)(args.apiUrl);
    const spaPath = (0, utils_1.removeTrailingSlash)(args.spaPath);
    const app = (0, express_1.default)();
    const localConfigUrlPrefix = '__local_config__';
    const localConfigUrls = configFiles.map((path) => `${spaPath}/${localConfigUrlPrefix}/${(0, node_path_1.basename)(path)}`);
    const source = (0, node_path_1.resolve)(require.resolve('@openmrs/esm-app-shell/package.json'), '..', 'dist');
    const index = (0, node_path_1.resolve)(source, 'index.html');
    const indexContent = (0, node_fs_1.readFileSync)(index, 'utf8')
        .replace(RegExp('<script>[\\s\\S]+</script>'), `
    <script>
        initializeSpa({
          apiUrl: ${JSON.stringify(apiUrl)},
          spaPath: ${JSON.stringify(spaPath)},
          env: "development",
          offline: ${supportOffline},
          configUrls: ${JSON.stringify([...configUrls, ...localConfigUrls])},
        });
    </script>
  `)
        .replace(/href="\/openmrs\/spa/g, `href="${spaPath}`)
        .replace(/src="\/openmrs\/spa/g, `src="${spaPath}`)
        .replace(/https:\/\/dev3\.openmrs\.org\/openmrs\/spa\/importmap\.json/g, `${spaPath}/importmap.json`);
    const sw = (0, node_path_1.resolve)(source, 'service-worker.js');
    // remove any full references to dev3.openmrs.org
    const swContent = (0, node_fs_1.readFileSync)(sw, 'utf-8').replace(/https:\/\/dev3\.openmrs\.org\/openmrs\/spa\//g, `${spaPath}`);
    const pageUrl = `http://${host}:${port}${spaPath}`;
    // Set up routes. Note that different middlewares have different rules
    // about route precedence.
    //
    // HPM/createProxyMiddleware always takes top precedence, so we must
    // explicitly exclude routes that we want to use other handlers for.
    //
    // express.static respects normal route declaration order.
    // Return our custom `index.html` for all requests beginning with spaPath
    // and not ending in `.js`, `.woff`, `.woff2`, `.json`, or any three-character
    // extension.
    const indexHtmlPathMatcher = new RegExp(`^${spaPath}/(?!.*\\.js$)(?!.*\\.woff2?$)(?!.*\\.json$)(?!.*\\....$).*$`);
    // Route for custom `importmap.json` goes above static assets
    if (importmap.type === 'inline') {
        app.get(`${spaPath}/importmap.json`, (_, res) => {
            res.contentType('application/json').send(importmap.value);
        });
    }
    if (routes.type === 'inline') {
        let stringifiedRoutes = routes.value;
        if (watchedRoutesPaths && !!Object.keys(watchedRoutesPaths).length) {
            // watchedRoutesPath is keyed from package to path, but here we need to go from
            // path to package.
            const watchedRoutesByPath = Object.fromEntries(Object.entries(watchedRoutesPaths).map(([k, v]) => [v, k]));
            (0, utils_1.logInfo)(`Watching routes.json for ${Object.keys(watchedRoutesPaths).join(', ')}`);
            // setup watchers for all the discovered routes.json files which update the in-memory map
            (await Promise.resolve().then(() => __importStar(require('node-watch')))).default(Object.keys(watchedRoutesByPath), { delay: 0 }, async (event, name) => {
                if (event === 'update') {
                    const updatedApp = watchedRoutesByPath[name];
                    if (updatedApp) {
                        const jsonRoutes = JSON.parse(stringifiedRoutes);
                        const version = jsonRoutes[updatedApp]?.version;
                        jsonRoutes[updatedApp] = {
                            ...JSON.parse(await (0, promises_1.readFile)(name, 'utf8')),
                            version,
                        };
                        stringifiedRoutes = JSON.stringify(jsonRoutes);
                        (0, utils_1.logInfo)(`Updated routes for ${updatedApp}`);
                    }
                }
            });
        }
        app.get(`${spaPath}/routes.registry.json`, (_, res) => {
            res.contentType('application/json').send(stringifiedRoutes);
        });
    }
    // Route for custom `service-worker.js` before most things
    if (supportOffline) {
        app.get(`${spaPath}/service-worker.js`, (_, res) => {
            res.contentType('js').send(swContent);
        });
    }
    configFiles.forEach((file, i) => {
        const url = localConfigUrls[i];
        app.get(url, (_, res) => {
            res.contentType('application/json').send((0, node_fs_1.readFileSync)((0, node_path_1.resolve)(process.cwd(), file)));
        });
    });
    // Route for custom `index.html` goes above static assets
    app.get(indexHtmlPathMatcher, (_, res) => res.contentType('text/html').send(indexContent));
    // Return static assets for any request for which we have one, except importmap.json and index.html
    app.use(spaPath, express_1.default.static(source, { index: false }));
    // Proxy requests beginning with `apiUrl` but which should not serve `index.html`.
    // This may include the JS bundles when using an import map that refers to
    // JS bundles located at the same domain as `apiUrl`.
    app.use(apiUrl, (0, http_proxy_middleware_1.createProxyMiddleware)((path) => {
        return new RegExp(`${apiUrl}/.*`).test(path) && !indexHtmlPathMatcher.test(path);
    }, {
        target: backend,
        changeOrigin: true,
        onProxyReq(proxyReq) {
            if (addCookie) {
                const origCookie = proxyReq.getHeader('cookie');
                const newCookie = `${origCookie};${addCookie}`;
                proxyReq.setHeader('cookie', newCookie);
            }
        },
    }));
    app.listen(port, host, () => {
        (0, utils_1.logInfo)(`Listening at http://${host}:${port}`);
        (0, utils_1.logInfo)(`SPA available at ${pageUrl}`);
        if (open) {
            const open = require('open');
            setTimeout(() => open(pageUrl, { wait: false }).catch(() => {
                (0, utils_1.logWarn)(`Unable to open "${pageUrl}" in browser. If you are running in a headless environment, please do not use the --open flag.`);
            }), 2000);
        }
    });
    return new Promise(() => { });
}
exports.runDevelop = runDevelop;
