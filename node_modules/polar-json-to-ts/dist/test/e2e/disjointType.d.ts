export declare const input: {
    title: string;
    description: string;
    type: string;
    properties: {
        value: {
            type: string[];
        };
        anotherValue: {
            type: string[];
        };
        nullableStringEnum: {
            type: string[];
            enum: string[];
        };
        nullableObj: {
            type: string[];
            required: string[];
            properties: {
                foo: {
                    type: string;
                };
            };
        };
        nullableArrayEnums: {
            type: string[];
            items: {
                type: string;
                enum: string[];
            };
        };
    };
    required: string[];
};
