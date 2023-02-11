export declare let input: {
    id: string;
    type: string;
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
    properties: {
        a: {
            type: string;
        };
        b: {
            type: string;
        };
    };
};
