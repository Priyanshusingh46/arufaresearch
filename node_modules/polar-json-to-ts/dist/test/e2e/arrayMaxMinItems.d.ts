export declare const input: {
    title: string;
    type: string;
    properties: {
        array: {
            type: string;
            properties: {
                withMinItems: {
                    type: string;
                    items: {
                        type: string;
                    };
                    minItems: number;
                };
                withMaxItems: {
                    type: string;
                    items: {
                        type: string;
                    };
                    maxItems: number;
                };
                withMinMaxItems: {
                    type: string;
                    items: {
                        type: string;
                    };
                    minItems: number;
                    maxItems: number;
                };
                withMaxItems0: {
                    type: string;
                    items: {
                        type: string;
                    };
                    maxItems: number;
                };
                withMinItems0: {
                    type: string;
                    items: {
                        type: string;
                    };
                    minItems: number;
                };
                withMinMaxItems0: {
                    type: string;
                    items: {
                        type: string;
                    };
                    minItems: number;
                    maxItems: number;
                };
            };
            additionalProperties: boolean;
        };
        untyped: {
            type: string;
            properties: {
                withMinItems: {
                    type: string;
                    minItems: number;
                };
                withMaxItems: {
                    type: string;
                    maxItems: number;
                };
                withMinMaxItems: {
                    type: string;
                    minItems: number;
                    maxItems: number;
                };
                withMaxItems0: {
                    type: string;
                    maxItems: number;
                };
                withMinItems0: {
                    type: string;
                    minItems: number;
                };
                withMinMaxItems0: {
                    type: string;
                    minItems: number;
                    maxItems: number;
                };
            };
            additionalProperties: boolean;
        };
        tuple: {
            type: string;
            properties: {
                withMinItemsLessThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    minItems: number;
                };
                withMinItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    minItems: number;
                };
                withMaxItemsLessThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    maxItems: number;
                };
                withMaxItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    maxItems: number;
                };
                withMinItemsLessThanItemLength_and_MaxItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    minItems: number;
                    maxItems: number;
                };
                withMinItemsLessThanItemLength_and_MaxItemsLessThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    minItems: number;
                    maxItems: number;
                };
                withMinItemsGreaterThanItemLength_and_MaxItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    minItems: number;
                    maxItems: number;
                };
                withMaxItems0: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    maxItems: number;
                };
                withMinItems0: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    minItems: number;
                };
                withMinMaxItems0: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    minItems: number;
                    maxItems: number;
                };
            };
            additionalProperties: boolean;
        };
    };
    additionalProperties: boolean;
};
