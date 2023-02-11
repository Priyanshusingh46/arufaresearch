"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'object',
    title: 'Object With Array Field',
    properties: {
        data: {
            type: 'array',
            title: 'Array Items',
            items: { $ref: '#/definitions/item' }
        }
    },
    definitions: {
        item: {
            title: 'Array Item',
            type: 'object',
            properties: {
                prop: {
                    type: 'string'
                }
            },
            required: ['prop'],
            additionalProperties: false
        }
    },
    required: ['data'],
    additionalProperties: false
};
//# sourceMappingURL=typedArray.1.js.map