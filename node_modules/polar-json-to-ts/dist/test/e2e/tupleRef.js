"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    additionalProperties: false,
    definitions: {
        a: { type: 'string' },
        b: { type: 'number' }
    },
    properties: {
        c: {
            items: [{ $ref: '#/definitions/a' }, { $ref: '#/definitions/b' }],
            type: 'array'
        }
    },
    type: 'object'
};
//# sourceMappingURL=tupleRef.js.map