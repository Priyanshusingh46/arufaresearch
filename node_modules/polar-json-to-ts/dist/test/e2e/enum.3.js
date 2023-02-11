"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// Reported in #327
exports.input = {
    title: 'InterfaceWithTsEnumNames',
    anyOf: [{ $ref: '#/definitions/InterfaceWithTsEnumNames' }],
    definitions: {
        InterfaceWithTsEnumNames: {
            type: 'object',
            properties: {
                TsEnumNames: { $ref: '#/definitions/TsEnums' }
            },
            additionalProperties: false
        },
        TsEnums: {
            type: 'string',
            tsEnumNames: ['publish', 'draft'],
            enum: ['publish', 'draft']
        }
    }
};
//# sourceMappingURL=enum.3.js.map