export declare const input: {
    $schema: string;
    type: string;
    title: string;
    properties: {
        data: {
            type: string;
            title: string;
            items: {
                $ref: string;
            };
        };
    };
    definitions: {
        item: {
            title: string;
            type: string;
            properties: {
                prop: {
                    type: string;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
