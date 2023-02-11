"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
exports.input = {
    title: 'Example Schema',
    type: 'object',
    properties: {
        firstName: {
            type: 'string'
        },
        lastName: {
            id: 'lastName',
            type: 'string'
        }
    },
    required: ['firstName', 'lastName']
};
exports.options = {
    format: false
};
//# sourceMappingURL=options.format.js.map