export declare const input: {
    type: string;
    additionalProperties: boolean;
    properties: {
        a: {
            additionalProperties: boolean;
            id: string;
            properties: {
                a: {
                    type: string;
                };
            };
            required: string[];
        };
        b: {
            additionalProperties: boolean;
            id: string;
            properties: {
                b: {
                    type: string;
                };
            };
            required: string[];
        };
    };
    oneOf: ({
        additionalProperties: boolean;
        id: string;
        properties: {
            c: {
                type: string;
            };
            d?: undefined;
        };
        required: string[];
    } | {
        additionalProperties: boolean;
        id: string;
        properties: {
            d: {
                type: string;
            };
            c?: undefined;
        };
        required: string[];
    })[];
    required: string[];
};
