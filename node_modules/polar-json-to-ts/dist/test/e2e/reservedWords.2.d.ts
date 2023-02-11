export declare const input: {
    type: string;
    properties: {
        definitions: {
            $ref: string;
        };
    };
    definitions: {
        definitions: {
            $ref: string;
        };
        schema: {
            type: string;
            properties: {
                additionalProperties: {
                    anyOf: {
                        $ref: string;
                    }[];
                };
            };
        };
    };
};
