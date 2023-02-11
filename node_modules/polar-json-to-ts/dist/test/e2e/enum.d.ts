export declare const input: {
    title: string;
    type: string;
    definitions: {
        enumFromDefinition: {
            type: string;
            enum: string[];
        };
    };
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
        enumThatComesFromADefinition: {
            $ref: string;
        };
        propertyWithAnEnum: {
            type: string;
            properties: {
                enumThatComesFromADefinition: {
                    $ref: string;
                };
            };
        };
    };
    required: string[];
    additionalProperties: boolean;
};
