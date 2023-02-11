"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = exports.exclude = void 0;
// TODO: why does this test fail? do we need to send a specific User-Agent header to github?
exports.exclude = true;
exports.input = {
    title: 'Referencing3',
    type: 'object',
    properties: {
        foo: {
            $ref: 'https://raw.githubusercontent.com/bcherny/json-schema-to-typescript/4531fd7da2c2dbed3b2887fd7035ff18573edb82/test/resources/ReferencedType.json'
        }
    },
    required: ['foo'],
    additionalProperties: false
};
//# sourceMappingURL=ref.3.js.map