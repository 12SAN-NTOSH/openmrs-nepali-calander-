"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNpmRegistryConfiguration = void 0;
const npm_conf_1 = __importDefault(require("@pnpm/npm-conf"));
/**
 * Utility function to load the appropriate configuration for npmRegistryFetch
 * from the .npmrc configuration chain. Essentially, this allows us to use .npmrc
 * files to configure reading from the NPM registry, which is useful when using
 * a custom registry, especially for private packages.
 *
 * This uses the @pnpm/npm-conf library for reading .npmrc files as its both
 * maintained and sane to work with.
 *
 * @param registry The NPM registry to use, if any
 */
function getNpmRegistryConfiguration(registry) {
    const conf = (0, npm_conf_1.default)();
    if (!conf) {
        return {};
    }
    if (conf.warnings.length >= 1) {
        throw new Error(`Warnings while loading .npmrc:\n  ${conf.warnings.join('\n  ')}`);
    }
    if (!conf.config) {
        return {};
    }
    // the returned config object uses getters with no list of keys
    // so to convert this to a "normal" object, we combine all the settings
    // found; note this relies on the internal structure of the config
    // object and may not be stable
    const configuration = Object.assign({}, ...(conf.config.list.slice().reverse() ?? []));
    if (configuration.__source__) {
        delete configuration.__source__;
    }
    if ('strict-ssl' in configuration) {
        configuration.strictSSL = configuration['strict-ssl'];
        delete configuration['strict-ssl'];
    }
    if (registry) {
        configuration.registry = registry;
    }
    return configuration;
}
exports.getNpmRegistryConfiguration = getNpmRegistryConfiguration;
