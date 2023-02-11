export declare let exclude: boolean;
export declare const input: {
    additionalProperties: boolean;
    properties: {
        foo: {
            $ref: string;
        };
    };
    definitions: {
        bar: {
            $ref: string;
        };
    };
    required: string[];
    title: string;
};
