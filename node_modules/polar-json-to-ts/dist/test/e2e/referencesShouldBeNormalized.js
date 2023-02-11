"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'Referencing',
    type: 'object',
    properties: {
        a: {
            $ref: 'test/resources/ReferencedTypeNotNormalized.json'
        }
    },
    required: ['a']
};
//# sourceMappingURL=referencesShouldBeNormalized.js.map