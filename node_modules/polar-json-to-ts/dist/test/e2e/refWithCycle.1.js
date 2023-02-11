"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'Local Cycle',
    properties: {
        foo: {
            $ref: '#'
        },
        bar: {
            $ref: '#'
        }
    },
    required: ['foo'],
    additionalProperties: true
};
//# sourceMappingURL=refWithCycle.1.js.map