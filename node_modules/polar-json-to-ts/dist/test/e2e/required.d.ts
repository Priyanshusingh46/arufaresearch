export declare const input: {
    additionalProperties: boolean;
    definitions: {
        location: {
            properties: {
                city: {
                    type: string;
                };
                postalCode: {
                    type: string;
                };
            };
        };
    };
    properties: {
        location: {
            allOf: ({
                $ref: string;
                required?: undefined;
            } | {
                required: string[];
                $ref?: undefined;
            })[];
        };
        name: {
            type: string;
        };
        website: {
            type: string;
        };
    };
    required: string[];
    type: string;
};
