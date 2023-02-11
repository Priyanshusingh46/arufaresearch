"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// @see https://github.com/bcherny/json-schema-to-typescript/issues/355
var idSchema = { type: 'integer', minimum: 1 };
exports.input = {
    type: 'object',
    properties: {
        id: idSchema,
        userId: idSchema
    }
};
//# sourceMappingURL=refWithCycle.4.js.map