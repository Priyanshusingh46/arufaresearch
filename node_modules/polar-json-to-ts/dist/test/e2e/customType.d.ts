export declare const input: {
    title: string;
    type: string;
    properties: {
        foo: {
            type: string;
            tsType: string;
        };
        bar: {
            description: string;
            instanceOf: string;
            tsType: string;
        };
        foobar: {
            $ref: string;
        };
    };
    definitions: {
        foobar: {
            description: string;
            tsType: string;
        };
    };
    additionalProperties: boolean;
};
