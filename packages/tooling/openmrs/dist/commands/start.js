"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStart = void 0;
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const path_1 = require("path");
const utils_1 = require("../utils");
function runStart(args) {
    const { backend, host, port, open, addCookie } = args;
    const app = (0, express_1.default)();
    const source = (0, path_1.resolve)(require.resolve('@openmrs/esm-app-shell/package.json'), '..', 'dist');
    const index = (0, path_1.resolve)(source, 'index.html');
    const spaPath = '/openmrs/spa';
    const pageUrl = `http://${host}:${port}${spaPath}`;
    app.use(spaPath, express_1.default.static(source));
    app.use('/openmrs', (0, http_proxy_middleware_1.createProxyMiddleware)([`/openmrs/**`, `!${spaPath}/**`], {
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
    app.get('/*', (_, res) => res.sendFile(index));
    app.listen(port, host, () => {
        (0, utils_1.logInfo)(`Listening at http://${host}:${port}`);
        (0, utils_1.logInfo)(`SPA available at ${pageUrl}`);
        if (open) {
            const open = require('open');
            open(pageUrl, { wait: false }).catch(() => {
                (0, utils_1.logWarn)(`Unable to open "${pageUrl}" in browser. If you are running in a headless environment, please do not use the --open flag.`);
            });
        }
    });
    return new Promise(() => { });
}
exports.runStart = runStart;
