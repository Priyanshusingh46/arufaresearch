export declare const input: {
    name: string;
    type: string;
    properties: {
        countries: {
            id: string;
            type: string;
            items: {
                type: string;
                properties: {
                    id: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                        pattern: string;
                    };
                    name: {
                        type: string;
                    };
                };
                required: string[];
            };
        };
        tuple: {
            type: string;
            items: ({
                type: string;
                properties: {
                    foo: {
                        type: string;
                    };
                    bar?: undefined;
                };
            } | {
                type: string;
                properties: {
                    bar: {
                        type: string;
                    };
                    foo?: undefined;
                };
            })[];
        };
    };
};
