"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
exports.input = {
    title: 'AdditionalProperties (configured to default to false)',
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
exports.options = {
    additionalProperties: false
};
//# sourceMappingURL=additionalProperties.2.js.map