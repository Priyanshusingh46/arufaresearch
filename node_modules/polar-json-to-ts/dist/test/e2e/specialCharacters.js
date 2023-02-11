"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'Example Schema',
    type: 'object',
    properties: {
        '`foo`': {
            type: 'string'
        },
        "'bar'": {
            type: 'string'
        },
        '"baz"': {
            type: 'string'
        },
        '$zoo 2': {
            type: 'string'
        },
        'qux...': {
            type: 'number'
        }
    },
    required: ['`foo`', "'bar'", '"baz"']
};
//# sourceMappingURL=specialCharacters.js.map