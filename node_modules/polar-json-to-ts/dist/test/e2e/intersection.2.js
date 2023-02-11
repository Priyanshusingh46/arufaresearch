"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    type: 'object',
    properties: {
        c: {
            type: 'string'
        },
        d: {
            type: 'string'
        }
    },
    patternProperties: {
        '^x-': {}
    },
    additionalProperties: false,
    required: ['c', 'd'],
    allOf: [
        {
            $ref: '#/definitions/A'
        },
        {
            $ref: '#/definitions/B'
        }
    ],
    definitions: {
        A: {
            type: 'object',
            properties: {
                a: { type: 'string' }
            }
        },
        B: {
            type: 'object',
            properties: {
                b: { type: 'string' }
            }
        }
    }
};
//# sourceMappingURL=intersection.2.js.map