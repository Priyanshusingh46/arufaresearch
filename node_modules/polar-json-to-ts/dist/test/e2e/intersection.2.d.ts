export declare const input: {
    type: string;
    properties: {
        c: {
            type: string;
        };
        d: {
            type: string;
        };
    };
    patternProperties: {
        '^x-': {};
    };
    additionalProperties: boolean;
    required: string[];
    allOf: {
        $ref: string;
    }[];
    definitions: {
        A: {
            type: string;
            properties: {
                a: {
                    type: string;
                };
            };
        };
        B: {
            type: string;
            properties: {
                b: {
                    type: string;
                };
            };
        };
    };
};
