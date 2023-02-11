"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'AdditionalProperties (default to true)',
    type: 'object',
    definitions: {
        e: {
            type: 'object'
        }
    },
    properties: {
        a: {
            type: 'object'
        },
        b: {
            type: 'object',
            additionalProperties: false
        },
        c: {
            type: 'object',
            additionalProperties: true
        },
        d: {
            type: 'object',
            additionalProperties: {
                type: 'number'
            }
        },
        e: {
            $ref: '#/definitions/e'
        }
    }
};
//# sourceMappingURL=additionalProperties.3.js.map