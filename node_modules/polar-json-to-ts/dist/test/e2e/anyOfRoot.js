"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'RootAnyOf',
    anyOf: [{ $ref: '#/definitions/foo' }, { $ref: '#/definitions/bar' }, { $ref: '#/definitions/baz' }],
    definitions: {
        foo: {
            properties: {
                a: { type: 'string' },
                b: { type: 'integer' }
            },
            additionalProperties: false,
            required: ['a']
        },
        bar: {
            properties: {
                a: { enum: ['a', 'b', 'c'] }
            }
        },
        baz: {
            properties: {
                baz: { $ref: '#/definitions/bar' }
            }
        }
    }
};
//# sourceMappingURL=anyOfRoot.js.map