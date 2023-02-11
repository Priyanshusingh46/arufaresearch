export declare let input: {
    id: string;
    type: string;
    additionalProperties: boolean;
    patternProperties: {
        '^[0-9]+': {
            id: string;
            type: string;
        };
        '^[a-zA-Z]+': {
            id: string;
            type: string;
        };
    };
};
