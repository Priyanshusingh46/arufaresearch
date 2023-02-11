export declare const input: {
    $schema: string;
    type: string;
    title: string;
    properties: {
        definitions: {
            type: string;
            additionalProperties: boolean;
            minProperties: number;
            patternProperties: {
                '^[a-zA-Z0-9_.\u1680/]+$': {
                    type: string;
                    $ref: string;
                };
            };
        };
    };
    definitions: {
        EntityObject: {
            type: string;
            description: string;
            required: string[];
            properties: {
                EntityDataCategory: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        APorpertyName: {
                            $ref: string;
                        };
                    };
                };
            };
        };
        EntityDataCategory: {
            type: string;
            enum: string[];
            tsEnumNames: string[];
        };
    };
};
