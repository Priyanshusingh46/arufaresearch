"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var ava_1 = __importDefault(require("ava"));
var linker_1 = require("../src/linker");
var utils_1 = require("../src/utils");
function run() {
    (0, ava_1.default)('pathTransform', function (t) {
        t.is((0, utils_1.pathTransform)('types', 'schemas', 'schemas/foo/a.json'), 'types/foo');
        t.is((0, utils_1.pathTransform)('./schemas/types', './schemas', 'schemas/foo/bar/a.json'), 'schemas/types/foo/bar');
        t.is((0, utils_1.pathTransform)('types', './src/../types/../schemas', 'schemas/foo/a.json'), 'types/foo');
    });
    (0, ava_1.default)('generateName', function (t) {
        var usedNames = new Set();
        t.is((0, utils_1.generateName)('a', usedNames), 'A');
        t.is((0, utils_1.generateName)('abc', usedNames), 'Abc');
        t.is((0, utils_1.generateName)('ABcd', usedNames), 'ABcd');
        t.is((0, utils_1.generateName)('$Abc_123', usedNames), '$Abc_123');
        t.is((0, utils_1.generateName)('Abc-de-f', usedNames), 'AbcDeF');
        // Index should increment:
        t.is((0, utils_1.generateName)('a', usedNames), 'A1');
        t.is((0, utils_1.generateName)('a', usedNames), 'A2');
        t.is((0, utils_1.generateName)('a', usedNames), 'A3');
    });
    (0, ava_1.default)('isSchemaLike', function (t) {
        var schema = (0, linker_1.link)({
            title: 'Example Schema',
            type: 'object',
            properties: {
                firstName: {
                    type: 'string'
                },
                lastName: {
                    id: 'lastName',
                    type: 'string'
                }
            },
            required: ['firstName', 'lastName']
        });
        t.is((0, utils_1.isSchemaLike)(schema), true);
        t.is((0, utils_1.isSchemaLike)([]), false);
        t.is((0, utils_1.isSchemaLike)(schema.properties), false);
        t.is((0, utils_1.isSchemaLike)(schema.required), false);
        t.is((0, utils_1.isSchemaLike)(schema.title), false);
        t.is((0, utils_1.isSchemaLike)(schema.properties.firstName), true);
        t.is((0, utils_1.isSchemaLike)(schema.properties.lastName), true);
    });
}
exports.run = run;
//# sourceMappingURL=testUtils.js.map