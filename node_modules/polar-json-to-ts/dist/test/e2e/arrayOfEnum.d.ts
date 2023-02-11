export declare const input: {
    type: string;
    properties: {
        namedEnum: {
            type: string;
            items: {
                enum: number[];
                title: string;
                tsEnumNames: string[];
            };
        };
        tuples: {
            type: string;
            items: ({
                type: string;
                enum?: undefined;
                title?: undefined;
                tsEnumNames?: undefined;
            } | {
                enum: number[];
                title: string;
                tsEnumNames: string[];
                type?: undefined;
            })[];
        };
    };
    required: string[];
    additionalProperties: boolean;
};
