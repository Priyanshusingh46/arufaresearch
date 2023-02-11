"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'CustomType',
    type: 'object',
    properties: {
        foo: {
            type: 'object',
            tsType: 'Set<number|string>'
        },
        bar: {
            description: 'Comparator function',
            instanceOf: 'Function',
            tsType: '(a: number, b: number) => number'
        },
        foobar: { $ref: '#/definitions/foobar' }
    },
    definitions: {
        foobar: {
            description: 'Map from number to string',
            tsType: 'Map<number, string>'
        }
    },
    additionalProperties: false
};
//# sourceMappingURL=customType.js.map