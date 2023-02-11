"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
var namedEums = {
    type: 'object',
    properties: {
        additionalItemsAny: {
            type: 'array',
            items: [
                {
                    enum: [1, 2, 3],
                    title: 'NamedEnum2',
                    tsEnumNames: ['One', 'Two', 'Three']
                }
            ],
            additionalItems: true
        },
        additionalItems: {
            type: 'array',
            items: [
                {
                    enum: [1, 2, 3],
                    title: 'NamedEnum2',
                    tsEnumNames: ['One', 'Two', 'Three']
                }
            ],
            additionalItems: {
                enum: [4, 5, 6],
                title: 'NamedEnum2',
                tsEnumNames: ['Four', 'Five', 'Six']
            }
        }
    },
    additionalProperties: false
};
var unnamedEmums = {
    type: 'object',
    properties: {
        additionalItemsAny: {
            type: 'array',
            items: [
                {
                    enum: [1, 2, 3]
                }
            ],
            additionalItems: true
        },
        additionalItems: {
            type: 'array',
            items: [
                {
                    enum: ['One', 'Two', 'Three']
                }
            ],
            additionalItems: {
                enum: [4, 5, 6]
            }
        }
    },
    additionalProperties: false
};
var schema = {
    type: 'object',
    properties: {
        additionalItemsAny: {
            type: 'array',
            items: [
                {
                    type: 'object',
                    properties: {
                        foo: { type: 'string' }
                    }
                },
                {
                    type: 'object',
                    properties: {
                        bar: { type: 'number' }
                    }
                }
            ],
            additionalItems: true
        },
        additionalItems: {
            type: 'array',
            items: [
                {
                    type: 'object',
                    properties: {
                        foo: { type: 'string' }
                    }
                },
                {
                    type: 'object',
                    properties: {
                        bar: { type: 'number' }
                    }
                }
            ],
            additionalItems: {
                type: 'object',
                properties: {
                    baz: { type: 'boolean' }
                }
            }
        }
    },
    additionalProperties: false
};
var namedSchema = {
    type: 'object',
    properties: {
        additionalItemsAny: {
            type: 'array',
            items: [
                {
                    id: 'StringSchema1',
                    type: 'object',
                    properties: {
                        foo: { type: 'string' }
                    }
                },
                {
                    id: 'NumberSchema1',
                    type: 'object',
                    properties: {
                        bar: { type: 'number' }
                    }
                }
            ],
            additionalItems: true
        },
        additionalItems: {
            type: 'array',
            items: [
                {
                    id: 'StringSchema2',
                    type: 'object',
                    properties: {
                        foo: { type: 'string' }
                    }
                },
                {
                    id: 'NumberSchema2',
                    type: 'object',
                    properties: {
                        bar: { type: 'number' }
                    }
                }
            ],
            additionalItems: {
                id: 'BooleanSchema1',
                type: 'object',
                properties: {
                    baz: { type: 'boolean' }
                }
            }
        }
    },
    additionalProperties: false
};
var ofType = {
    type: 'object',
    properties: {
        additonalItemsAny: {
            items: [{ type: 'integer' }, { type: 'string' }],
            additionalItems: true
        },
        additonalItems: {
            items: [{ type: 'integer' }, { type: 'string' }],
            additionalItems: { type: 'boolean' }
        }
    },
    additionalProperties: false
};
var refs = {
    type: 'object',
    properties: {
        additionalItemsAny: {
            type: 'array',
            items: [
                {
                    $ref: 'test/resources/ReferencedType.json'
                }
            ],
            additionalItems: true
        },
        additionalItems: {
            type: 'array',
            items: [
                {
                    $ref: 'test/resources/ReferencedTypeWithoutID.json'
                }
            ],
            additionalItems: {
                $ref: 'test/resources/ReferencedTypeWithoutIDConflict.json'
            }
        }
    },
    additionalProperties: false
};
var definitions = {
    firstDefinition: {
        title: 'First Definition',
        description: 'Title matches definition key for kicks',
        type: 'object',
        properties: {
            name: {
                type: 'string'
            }
        },
        additionalProperties: false
    },
    secondDefinition: {
        title: 'Unrelated Title',
        description: 'Title is unrelated to definition key and behaviour is the same',
        type: 'object',
        properties: {
            name: {
                type: 'string'
            }
        },
        additionalProperties: false
    },
    thirdDefinition: {
        description: 'Definition has no title and produces no duplicate Interface',
        type: 'object',
        properties: {
            name: {
                type: 'string'
            }
        },
        additionalProperties: false
    }
};
var defs = {
    type: 'object',
    properties: {
        additionalItemsAny: {
            type: 'array',
            items: [
                {
                    $ref: '#/definitions/firstDefinition'
                }
            ],
            additionalItems: true
        },
        additionalItems: {
            type: 'array',
            items: [
                {
                    $ref: '#/definitions/secondDefinition'
                }
            ],
            additionalItems: {
                $ref: '#/definitions/thirdDefinition'
            }
        }
    },
    additionalProperties: false
};
exports.input = {
    type: 'object',
    definitions: definitions,
    properties: {
        namedEums: namedEums,
        unnamedEmums: unnamedEmums,
        namedSchema: namedSchema,
        schema: schema,
        ofType: ofType,
        refs: refs,
        defs: defs
    },
    additionalProperties: false
};
//# sourceMappingURL=arrayAdditionalItems.js.map