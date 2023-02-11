"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    id: 'Parent',
    type: 'object',
    additionalProperties: true,
    patternProperties: {
        '^[0-9]+': {
            id: 'NumberChild',
            type: 'number'
        },
        '^[a-zA-Z]+': {
            id: 'StringChild',
            type: 'string'
        }
    }
};
//# sourceMappingURL=patternProperties.5.js.map