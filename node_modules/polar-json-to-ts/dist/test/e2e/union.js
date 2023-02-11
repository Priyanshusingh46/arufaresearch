"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    $schema: 'http://json-schema.org/draft-07/schema',
    type: 'object',
    properties: {
        test: {
            type: 'object',
            properties: {
                test1: {
                    type: ['boolean', 'array'],
                    minItems: 1,
                    items: {
                        type: 'string'
                    }
                },
                test2: {
                    type: ['boolean', 'array'],
                    minItems: 1,
                    items: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=union.js.map