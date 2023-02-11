export declare const input: {
    $schema: string;
    type: string;
    items: {
        type: string;
        required: string[];
        properties: {
            description: {
                type: string;
            };
            schema: {};
            tests: {
                type: string;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        description: {
                            type: string;
                        };
                        data: {};
                        valid: {
                            type: string;
                        };
                    };
                    additionalProperties: boolean;
                };
                minItems: number;
            };
        };
        additionalProperties: boolean;
        minItems: number;
    };
};
