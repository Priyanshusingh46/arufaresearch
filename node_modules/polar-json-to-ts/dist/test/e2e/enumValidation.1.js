"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.options = exports.input = void 0;
exports.input = {
    title: 'Enum',
    type: 'object',
    properties: {
        bar: {
            type: 'integer',
            enum: [1, 2, 3],
            tsEnumNames: ['One', 'Three']
        }
    },
    required: ['bar'],
    additionalProperties: false
};
exports.options = {
    useTypescriptEnums: true
};
exports.error = true;
//# sourceMappingURL=enumValidation.1.js.map