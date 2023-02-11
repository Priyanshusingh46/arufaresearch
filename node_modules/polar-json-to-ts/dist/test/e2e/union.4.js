"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// @see https://github.com/bcherny/json-schema-to-typescript/issues/357
exports.input = {
    oneOf: [
        {
            type: 'string'
        },
        {
            enum: [false]
        }
    ],
    default: 'foo'
};
//# sourceMappingURL=union.4.js.map