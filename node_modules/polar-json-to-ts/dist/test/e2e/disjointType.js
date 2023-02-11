"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    title: 'Example Schema',
    description: 'My cool schema',
    type: 'object',
    properties: {
        value: {
            type: ['number', 'string']
        },
        anotherValue: {
            type: ['null', 'string']
        },
        nullableStringEnum: {
            type: ['null', 'string'],
            enum: ['foo', 'bar']
        },
        nullableObj: {
            type: ['null', 'object'],
            required: ['foo'],
            properties: {
                foo: {
                    type: 'string'
                }
            }
        },
        nullableArrayEnums: {
            type: ['null', 'array'],
            items: {
                type: 'string',
                enum: ['foo', 'bar']
            }
        }
    },
    required: ['value']
};
//# sourceMappingURL=disjointType.js.map