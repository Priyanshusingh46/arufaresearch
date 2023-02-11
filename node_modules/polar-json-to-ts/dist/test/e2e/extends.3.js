"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// Reported in #322
exports.input = {
    type: 'object',
    title: 'Schema',
    description: 'Any Shape',
    additionalProperties: false,
    anyOf: [{ $ref: 'test/resources/extends/Circle.json' }, { $ref: 'test/resources/extends/Square.json' }]
};
//# sourceMappingURL=extends.3.js.map