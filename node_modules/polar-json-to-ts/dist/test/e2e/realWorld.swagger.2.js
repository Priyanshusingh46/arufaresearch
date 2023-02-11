"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
/**
 * Tests that $ref as key works as expected
 */
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
//# sourceMappingURL=realWorld.swagger.2.js.map