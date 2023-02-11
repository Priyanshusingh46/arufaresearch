export declare let exclude: boolean;
/**
 * @see https://github.com/bcherny/json-schema-to-typescript/issues/49
 */
export declare const input: {
    title: string;
    type: string;
    properties: {
        foo: {
            $ref: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
