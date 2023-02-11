"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// @see https://github.com/bcherny/json-schema-to-typescript/issues/352
exports.input = {
    $schema: 'http://json-schema.org/draft-07/schema',
    title: 'my-schema',
    type: 'object',
    properties: {
        example: {
            type: ['boolean', 'string'],
            default: true
        }
    },
    additionalProperties: false
};
//# sourceMappingURL=union.3.js.map