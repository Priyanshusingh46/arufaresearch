"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    type: 'object',
    properties: {
        definitions: {
            $ref: '#/definitions/definitions'
        }
    },
    definitions: {
        definitions: {
            $ref: '#/definitions/schema'
        },
        schema: {
            type: 'object',
            properties: {
                additionalProperties: {
                    anyOf: [
                        {
                            $ref: '#/definitions/schema'
                        }
                    ]
                }
            }
        }
    }
};
//# sourceMappingURL=reservedWords.2.js.map