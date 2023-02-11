"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var ava_1 = __importDefault(require("ava"));
var linker_1 = require("../src/linker");
var JSONSchema_1 = require("../src/types/JSONSchema");
var basics_1 = require("./e2e/basics");
function run() {
    (0, ava_1.default)("linker should link to each node's parent schema", function (t) {
        var schema = (0, linker_1.link)(basics_1.input);
        t.is(schema[JSONSchema_1.Parent], null);
        t.is(schema.properties[JSONSchema_1.Parent], schema);
        t.is(schema.properties.firstName[JSONSchema_1.Parent], schema.properties);
        t.is(schema.properties.lastName[JSONSchema_1.Parent], schema.properties);
        t.is(schema.properties.age[JSONSchema_1.Parent], schema.properties);
        t.is(schema.properties.height[JSONSchema_1.Parent], schema.properties);
        t.is(schema.properties.favoriteFoods[JSONSchema_1.Parent], schema.properties);
        t.is(schema.properties.likesDogs[JSONSchema_1.Parent], schema.properties);
        t.is(schema.required[JSONSchema_1.Parent], schema);
    });
}
exports.run = run;
//# sourceMappingURL=testLinker.js.map