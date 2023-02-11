"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
exports.input = {
    title: 'UnreachableDefinition',
    type: 'object',
    definitions: {
        a: {
            properties: {
                firstName: {
                    type: 'string'
                },
                lastName: {
                    id: 'lastName',
                    type: 'string'
                }
            }
        }
    },
    properties: {
        b: {
            properties: {
                likesDogs: {
                    type: 'boolean'
                }
            }
        }
    }
};
exports.options = {
    unreachableDefinitions: true
};
//# sourceMappingURL=options.unreachableDefinitions.js.map