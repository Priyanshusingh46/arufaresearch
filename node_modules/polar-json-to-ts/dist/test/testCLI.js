"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var ava_1 = __importDefault(require("ava"));
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var path_1 = require("path");
var rimraf = require("rimraf");
function run() {
    (0, ava_1.default)('pipe in, pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js', { encoding: 'utf-8' }).toString());
    });
    (0, ava_1.default)('pipe in (schema without ID), pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)('shx cat ./test/resources/ReferencedTypeWithoutID.json | node dist/src/cli.js', {
            encoding: 'utf-8'
        }).toString());
    });
    (0, ava_1.default)('file in (no flags), pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('file in (--input), pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js --input ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('file in (-i), pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('file in (-i), unreachable definitions flag, pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/DefinitionsOnly.json --unreachableDefinitions').toString());
    });
    (0, ava_1.default)('file in (-i), style flags, pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/Enum.json --style.singleQuote --no-style.semi').toString());
    });
    (0, ava_1.default)('file in (-i), pipe out (absolute path)', function (t) {
        t.snapshot((0, child_process_1.execSync)("node dist/src/cli.js -i ".concat(__dirname, "/../../test/resources/ReferencedType.json")).toString());
    });
    (0, ava_1.default)('pipe in, file out (--output)', function (t) {
        (0, child_process_1.execSync)('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js --output ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('pipe in, file out (-o)', function (t) {
        (0, child_process_1.execSync)('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js -o ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('file in (no flags), file out (no flags)', function (t) {
        (0, child_process_1.execSync)('node dist/src/cli.js ./test/resources/ReferencedType.json ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('file in (-i), file out (-o)', function (t) {
        (0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/ReferencedType.json -o ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('file in (--input), file out (--output)', function (t) {
        (0, child_process_1.execSync)('node dist/src/cli.js --input ./test/resources/ReferencedType.json --output ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('--unknownAny', function (t) {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js --unknownAny=false --input ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('files in (-i), files out (-o)', function (t) {
        (0, child_process_1.execSync)("node dist/src/cli.js -i \"./test/resources/MultiSchema/**/*.json\" -o ./test/resources/MultiSchema/out");
        (0, fs_1.readdirSync)('./test/resources/MultiSchema/out').forEach(function (f) {
            var path = "./test/resources/MultiSchema/out/".concat(f);
            t.snapshot(path);
            t.snapshot((0, fs_1.readFileSync)(path, 'utf-8'));
            (0, fs_1.unlinkSync)(path);
        });
        rimraf.sync('./test/resources/MultiSchema/out');
    });
    (0, ava_1.default)('files in (-i), pipe out', function (t) {
        t.snapshot((0, child_process_1.execSync)("node dist/src/cli.js -i \"./test/resources/MultiSchema/**/*.json\"").toString());
    });
    (0, ava_1.default)('files in (-i), files out (-o) nested dir does not exist', function (t) {
        (0, child_process_1.execSync)("node dist/src/cli.js -i \"./test/resources/MultiSchema/**/*.json\" -o ./test/resources/MultiSchema/foo/bar/out");
        (0, fs_1.readdirSync)('./test/resources/MultiSchema/foo/bar/out').forEach(function (f) {
            var path = "./test/resources/MultiSchema/foo/bar/out/".concat(f);
            t.snapshot(path);
            t.snapshot((0, fs_1.readFileSync)(path, 'utf-8'));
            (0, fs_1.unlinkSync)(path);
        });
        rimraf.sync('./test/resources/MultiSchema/foo');
    });
    (0, ava_1.default)('files in (-i), files out (-o) matching nested dir', function (t) {
        (0, child_process_1.execSync)("node dist/src/cli.js -i \"./test/resources/../../test/resources/MultiSchema2/\" -o ./test/resources/MultiSchema2/out");
        getPaths('./test/resources/MultiSchema2/out').forEach(function (file) {
            t.snapshot(file);
            t.snapshot((0, fs_1.readFileSync)(file, 'utf-8'));
            (0, fs_1.unlinkSync)(file);
        });
        rimraf.sync('./test/resources/MultiSchema2/out');
    });
}
exports.run = run;
function getPaths(path, paths) {
    if (paths === void 0) { paths = []; }
    if ((0, fs_1.existsSync)(path) && (0, fs_1.lstatSync)(path).isDirectory()) {
        (0, fs_1.readdirSync)((0, path_1.resolve)(path)).forEach(function (item) { return getPaths(path_1.posix.join(path_1.posix.normalize(path), item), paths); });
    }
    else {
        paths.push(path);
    }
    // sort paths to ensure a stable order across environments
    return paths.sort(function (a, b) { return a.localeCompare(b); });
}
//# sourceMappingURL=testCLI.js.map