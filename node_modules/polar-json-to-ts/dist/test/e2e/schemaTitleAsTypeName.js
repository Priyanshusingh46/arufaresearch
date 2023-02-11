"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    $schema: 'http://json-schema.org/draft-03/schema',
    id: 'http://mycompany.com/api/referencing.json',
    title: 'Referencing',
    type: 'object',
    properties: {
        ref: {
            $ref: 'test/resources/ReferencedType.json'
        }
    },
    required: ['ref'],
    additionalProperties: false
};
//# sourceMappingURL=schemaTitleAsTypeName.js.map