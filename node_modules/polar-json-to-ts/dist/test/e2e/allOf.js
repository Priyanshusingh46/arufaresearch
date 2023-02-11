"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'AllOf',
    type: 'object',
    properties: {
        foo: {
            type: 'object',
            allOf: [{ $ref: '#/definitions/foo' }, { $ref: '#/definitions/bar' }]
        }
    },
    definitions: {
        foo: {
            properties: {
                a: { type: 'string' },
                b: { type: 'integer' }
            },
            additionalProperties: false,
            required: ['a', 'b']
        },
        bar: {
            properties: {
                a: { type: 'string' }
            },
            additionalProperties: false,
            required: ['a', 'b']
        }
    },
    required: ['foo', 'bar'],
    additionalProperties: false
};
//# sourceMappingURL=allOf.js.map