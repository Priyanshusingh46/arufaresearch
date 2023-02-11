"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'Array of type',
    type: 'object',
    properties: {
        foo: {
            items: {
                type: 'string'
            },
            type: 'array'
        },
        bar: {
            items: {
                type: 'string'
            },
            type: ['array']
        },
        baz: {
            items: {
                type: ['string', 'number']
            },
            type: ['array']
        },
        moo: {
            items: [{ type: 'integer' }, { type: 'string' }]
        }
    }
};
//# sourceMappingURL=arrayOfType.js.map