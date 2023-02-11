"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'WithComment',
    type: 'object',
    properties: {
        a: {
            type: 'object',
            description: '/* comment */',
            properties: {
                b: {
                    type: 'string',
                    description: '/* nested comment */'
                }
            }
        }
    }
};
//# sourceMappingURL=WithComment.js.map