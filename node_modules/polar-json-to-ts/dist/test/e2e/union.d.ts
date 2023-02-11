export declare const input: {
    $schema: string;
    type: string;
    properties: {
        test: {
            type: string;
            properties: {
                test1: {
                    type: string[];
                    minItems: number;
                    items: {
                        type: string;
                    };
                };
                test2: {
                    type: string[];
                    minItems: number;
                    items: {
                        type: string;
                    };
                };
            };
        };
    };
};
