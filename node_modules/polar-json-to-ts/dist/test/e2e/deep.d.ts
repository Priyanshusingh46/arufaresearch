export declare const input: {
    type: string;
    properties: {
        foo: {
            type: string;
            oneOf: ({
                oneOf: ({
                    type: string;
                    $ref?: undefined;
                    properties?: undefined;
                } | {
                    $ref: string;
                    type?: undefined;
                    properties?: undefined;
                } | {
                    properties: {
                        baz: {
                            type: string;
                        };
                    };
                    type?: undefined;
                    $ref?: undefined;
                })[];
                $ref?: undefined;
            } | {
                $ref: string;
                oneOf?: undefined;
            })[];
        };
    };
    definitions: {
        foo: {
            properties: {
                a: {
                    type: string;
                };
                b: {
                    type: string;
                };
            };
            additionalProperties: boolean;
            required: string[];
        };
        bar: {
            properties: {
                a: {
                    type: string;
                };
            };
            required: string[];
        };
    };
    required: string[];
    additionalProperties: boolean;
};
