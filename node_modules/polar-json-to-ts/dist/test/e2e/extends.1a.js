"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
exports.input = {
    title: 'Extends',
    type: 'object',
    extends: {
        $ref: 'test/resources/BaseType.1.json'
    },
    properties: {
        foo: {
            type: 'string'
        }
    },
    required: ['foo'],
    additionalProperties: false
};
exports.options = {
    declareExternallyReferenced: true
};
//# sourceMappingURL=extends.1a.js.map