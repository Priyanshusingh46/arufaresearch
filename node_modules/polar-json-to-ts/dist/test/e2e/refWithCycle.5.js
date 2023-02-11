"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// Cycle in referenced schema
// @see https://github.com/bcherny/json-schema-to-typescript/issues/376
exports.input = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        owner: { $ref: 'test/resources/Person.json' }
    }
};
//# sourceMappingURL=refWithCycle.5.js.map