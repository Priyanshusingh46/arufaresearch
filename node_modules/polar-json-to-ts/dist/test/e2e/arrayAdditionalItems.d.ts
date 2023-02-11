export declare const input: {
    type: string;
    definitions: {
        firstDefinition: {
            title: string;
            description: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
        secondDefinition: {
            title: string;
            description: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
        thirdDefinition: {
            description: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
    };
    properties: {
        namedEums: {
            type: string;
            properties: {
                additionalItemsAny: {
                    type: string;
                    items: {
                        enum: number[];
                        title: string;
                        tsEnumNames: string[];
                    }[];
                    additionalItems: boolean;
                };
                additionalItems: {
                    type: string;
                    items: {
                        enum: number[];
                        title: string;
                        tsEnumNames: string[];
                    }[];
                    additionalItems: {
                        enum: number[];
                        title: string;
                        tsEnumNames: string[];
                    };
                };
            };
            additionalProperties: boolean;
        };
        unnamedEmums: {
            type: string;
            properties: {
                additionalItemsAny: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    additionalItems: boolean;
                };
                additionalItems: {
                    type: string;
                    items: {
                        enum: string[];
                    }[];
                    additionalItems: {
                        enum: number[];
                    };
                };
            };
            additionalProperties: boolean;
        };
        namedSchema: {
            type: string;
            properties: {
                additionalItemsAny: {
                    type: string;
                    items: ({
                        id: string;
                        type: string;
                        properties: {
                            foo: {
                                type: string;
                            };
                            bar?: undefined;
                        };
                    } | {
                        id: string;
                        type: string;
                        properties: {
                            bar: {
                                type: string;
                            };
                            foo?: undefined;
                        };
                    })[];
                    additionalItems: boolean;
                };
                additionalItems: {
                    type: string;
                    items: ({
                        id: string;
                        type: string;
                        properties: {
                            foo: {
                                type: string;
                            };
                            bar?: undefined;
                        };
                    } | {
                        id: string;
                        type: string;
                        properties: {
                            bar: {
                                type: string;
                            };
                            foo?: undefined;
                        };
                    })[];
                    additionalItems: {
                        id: string;
                        type: string;
                        properties: {
                            baz: {
                                type: string;
                            };
                        };
                    };
                };
            };
            additionalProperties: boolean;
        };
        schema: {
            type: string;
            properties: {
                additionalItemsAny: {
                    type: string;
                    items: ({
                        type: string;
                        properties: {
                            foo: {
                                type: string;
                            };
                            bar?: undefined;
                        };
                    } | {
                        type: string;
                        properties: {
                            bar: {
                                type: string;
                            };
                            foo?: undefined;
                        };
                    })[];
                    additionalItems: boolean;
                };
                additionalItems: {
                    type: string;
                    items: ({
                        type: string;
                        properties: {
                            foo: {
                                type: string;
                            };
                            bar?: undefined;
                        };
                    } | {
                        type: string;
                        properties: {
                            bar: {
                                type: string;
                            };
                            foo?: undefined;
                        };
                    })[];
                    additionalItems: {
                        type: string;
                        properties: {
                            baz: {
                                type: string;
                            };
                        };
                    };
                };
            };
            additionalProperties: boolean;
        };
        ofType: {
            type: string;
            properties: {
                additonalItemsAny: {
                    items: {
                        type: string;
                    }[];
                    additionalItems: boolean;
                };
                additonalItems: {
                    items: {
                        type: string;
                    }[];
                    additionalItems: {
                        type: string;
                    };
                };
            };
            additionalProperties: boolean;
        };
        refs: {
            type: string;
            properties: {
                additionalItemsAny: {
                    type: string;
                    items: {
                        $ref: string;
                    }[];
                    additionalItems: boolean;
                };
                additionalItems: {
                    type: string;
                    items: {
                        $ref: string;
                    }[];
                    additionalItems: {
                        $ref: string;
                    };
                };
            };
            additionalProperties: boolean;
        };
        defs: {
            type: string;
            properties: {
                additionalItemsAny: {
                    type: string;
                    items: {
                        $ref: string;
                    }[];
                    additionalItems: boolean;
                };
                additionalItems: {
                    type: string;
                    items: {
                        $ref: string;
                    }[];
                    additionalItems: {
                        $ref: string;
                    };
                };
            };
            additionalProperties: boolean;
        };
    };
    additionalProperties: boolean;
};
