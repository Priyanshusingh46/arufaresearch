export declare const input: {
    definitions: {
        a: {
            type: string;
            additionalProperties: boolean;
        };
        b: {
            type: string;
        };
        c: {
            type: string;
        };
    };
    properties: {
        a: {
            anyOf: ({
                type: string;
                additionalProperties: boolean;
                $ref?: undefined;
            } | {
                $ref: string;
                type?: undefined;
                additionalProperties?: undefined;
            })[];
        };
        b: {
            anyOf: ({
                type: string;
                $ref?: undefined;
            } | {
                $ref: string;
                type?: undefined;
            })[];
        };
        c: {
            anyOf: ({
                type: string;
                $ref?: undefined;
            } | {
                $ref: string;
                type?: undefined;
            })[];
        };
        d: {
            allOf: {
                type: string;
            }[];
        };
        e: {
            oneOf: ({
                type: string;
                allOf?: undefined;
            } | {
                allOf: {
                    type: string;
                }[];
                type?: undefined;
            })[];
        };
    };
    required: string[];
    title: string;
    type: string;
    additionalProperties: boolean;
};
