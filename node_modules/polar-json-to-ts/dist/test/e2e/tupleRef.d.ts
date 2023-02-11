export declare const input: {
    additionalProperties: boolean;
    definitions: {
        a: {
            type: string;
        };
        b: {
            type: string;
        };
    };
    properties: {
        c: {
            items: {
                $ref: string;
            }[];
            type: string;
        };
    };
    type: string;
};
