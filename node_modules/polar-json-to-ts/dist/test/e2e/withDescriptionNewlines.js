"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'Example Schema',
    description: 'My cool schema',
    type: 'object',
    properties: {
        firstName: {
            description: 'first name single line description',
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        age: {
            description: 'Age description with\nmultiple lines',
            type: 'integer',
            minimum: 0
        }
    },
    required: ['firstName', 'lastName']
};
//# sourceMappingURL=withDescriptionNewlines.js.map