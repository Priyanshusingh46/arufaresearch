"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    id: 'Parent',
    type: 'object',
    additionalProperties: {
        type: 'number'
    },
    patternProperties: {
        '^[a-zA-Z]+': {
            id: 'StringChild',
            type: 'string'
        }
    }
};
//# sourceMappingURL=patternProperties.6.js.map