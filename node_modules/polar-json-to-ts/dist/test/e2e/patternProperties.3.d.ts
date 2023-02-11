export declare let input: {
    id: string;
    type: string;
    additionalProperties: boolean;
    patternProperties: {
        '^[a-zA-Z]+': {
            id: string;
            type: string;
            properties: {
                aProperty: {
                    type: string;
                };
            };
        };
    };
};
