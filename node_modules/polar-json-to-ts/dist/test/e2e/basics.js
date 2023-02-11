"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
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
        },
        age: {
            description: 'Age in years',
            type: 'integer',
            minimum: 0
        },
        height: {
            $id: 'height',
            type: 'number'
        },
        favoriteFoods: {
            type: 'array'
        },
        likesDogs: {
            type: 'boolean'
        }
    },
    required: ['firstName', 'lastName']
};
//# sourceMappingURL=basics.js.map