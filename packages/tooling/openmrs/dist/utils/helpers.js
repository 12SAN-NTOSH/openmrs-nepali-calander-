"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentHash = exports.removeTrailingSlash = exports.trimEnd = void 0;
const webpack_1 = require("webpack");
function trimEnd(text, chr) {
    while (text.endsWith(chr)) {
        text = text.slice(0, text.length - chr.length);
    }
    return text;
}
exports.trimEnd = trimEnd;
function removeTrailingSlash(path) {
    const i = path.length - 1;
    return path[i] === '/' ? removeTrailingSlash(path.slice(0, i)) : path;
}
exports.removeTrailingSlash = removeTrailingSlash;
function contentHash(obj) {
    const hash = webpack_1.util.createHash('xxhash64');
    hash.update(JSON.stringify(obj), 'UTF-8');
    return hash.digest().toString('hex');
}
exports.contentHash = contentHash;
