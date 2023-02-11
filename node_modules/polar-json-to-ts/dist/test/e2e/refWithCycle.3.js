"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = exports.exclude = void 0;
exports.exclude = true;
exports.input = {
    additionalProperties: true,
    properties: {
        foo: {
            $ref: '#/definitions/bar'
        }
    },
    definitions: {
        bar: {
            $ref: '#/definitions/bar'
        }
    },
    required: ['foo'],
    title: 'Cycle (3)'
};
//# sourceMappingURL=refWithCycle.3.js.map