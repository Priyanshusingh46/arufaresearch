export declare const input: {
    title: string;
    type: string;
    properties: {
        stringEnum: {
            type: string;
            enum: string[];
        };
        impliedStringEnum: {
            enum: string[];
        };
        booleanEnum: {
            type: string;
            enum: boolean[];
        };
        impliedBooleanEnum: {
            enum: boolean[];
        };
        integerEnum: {
            type: string;
            enum: number[];
        };
        impliedIntegerEnum: {
            enum: number[];
        };
        numberEnum: {
            type: string;
            enum: number[];
        };
        namedIntegerEnum: {
            type: string;
            enum: number[];
            tsEnumNames: string[];
        };
        impliedNamedIntegerEnum: {
            enum: number[];
            tsEnumNames: string[];
        };
        impliedHeterogeneousEnum: {
            enum: (string | number | boolean | null)[];
        };
        namedIntegerEnumTitle: {
            type: string;
            enum: number[];
            title: string;
            tsEnumNames: string[];
        };
        impliedNamedIntegerEnumTitle: {
            enum: number[];
            title: string;
            tsEnumNames: string[];
        };
        oneOfNamedEnum: {
            oneOf: ({
                type: string;
                enum: number[];
                title: string;
                tsEnumNames: string[];
            } | {
                type: string;
                enum: string[];
                title: string;
                tsEnumNames: string[];
            })[];
        };
        anyOfNamedEnum: {
            anyOf: ({
                type: string;
                enum: number[];
                title: string;
                tsEnumNames: string[];
            } | {
                type: string;
                enum: string[];
                title: string;
                tsEnumNames: string[];
            })[];
        };
        allOfNamedEnum: {
            allOf: ({
                type: string;
                enum: number[];
                title: string;
                tsEnumNames: string[];
            } | {
                type: string;
                enum: string[];
                title: string;
                tsEnumNames: string[];
            })[];
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const options: {
    enableConstEnums: boolean;
};
