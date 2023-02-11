"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var ava_1 = __importDefault(require("ava"));
var fs_1 = require("fs");
var path_1 = require("path");
var src_1 = require("../src");
var linker_1 = require("../src/linker");
var normalizer_1 = require("../src/normalizer");
var normalizerDir = __dirname + '/../../test/normalizer';
function run() {
    (0, fs_1.readdirSync)(normalizerDir)
        .filter(function (_) { return /^.*\.json$/.test(_); })
        .map(function (_) { return (0, path_1.join)(normalizerDir, _); })
        .map(function (_) { return [_, require(_)]; })
        .forEach(function (_a) {
        var filename = _a[0], json = _a[1];
        (0, ava_1.default)(json.name, function (t) {
            var _a;
            var normalized = (0, normalizer_1.normalize)((0, linker_1.link)(json.in), new WeakMap(), filename, (_a = json.options) !== null && _a !== void 0 ? _a : src_1.DEFAULT_OPTIONS);
            t.deepEqual(json.out, normalized);
        });
    });
}
exports.run = run;
//# sourceMappingURL=testNormalizer.js.map