export declare const input: {
    title: string;
    anyOf: {
        $ref: string;
    }[];
    definitions: {
        InterfaceWithTsEnumNames: {
            type: string;
            properties: {
                TsEnumNames: {
                    $ref: string;
                };
            };
            additionalProperties: boolean;
        };
        TsEnums: {
            type: string;
            tsEnumNames: string[];
            enum: string[];
        };
    };
};
