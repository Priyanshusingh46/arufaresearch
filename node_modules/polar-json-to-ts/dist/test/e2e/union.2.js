"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    type: 'object',
    properties: {
        input: {
            type: ['string', 'object', 'array'],
            items: {
                type: 'string'
            }
        }
    },
    additionalProperties: false
};
//# sourceMappingURL=union.2.js.map