"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    type: 'object',
    properties: {
        foo: {
            type: 'object',
            oneOf: [
                {
                    oneOf: [
                        { type: 'number' },
                        { $ref: '#/definitions/foo' },
                        { $ref: '#/definitions/bar' },
                        {
                            properties: {
                                baz: { type: 'number' }
                            }
                        }
                    ]
                },
                { $ref: '#/definitions/bar' }
            ]
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
            required: ['a', 'b']
        }
    },
    required: ['foo'],
    additionalProperties: false
};
//# sourceMappingURL=deep.js.map