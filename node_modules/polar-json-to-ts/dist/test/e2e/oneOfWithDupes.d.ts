export declare const input: {
    title: string;
    type: string;
    definitions: {
        a: {
            type: string;
            title: string;
            properties: {
                name: {
                    type: string;
                };
            };
        };
        b: {
            type: string;
            title: string;
            properties: {
                name: {
                    type: string;
                };
            };
        };
        c: {
            type: string;
            title: string;
        };
        d: {
            type: string;
        };
    };
    properties: {
        a: {
            oneOf: {
                $ref: string;
            }[];
        };
        b: {
            oneOf: {
                $ref: string;
            }[];
        };
        c: {
            oneOf: {
                $ref: string;
            }[];
        };
        d: {
            oneOf: {
                $ref: string;
            }[];
        };
        e: {
            oneOf: {
                $ref: string;
            }[];
        };
        f: {
            oneOf: {
                $ref: string;
            }[];
        };
    };
};
