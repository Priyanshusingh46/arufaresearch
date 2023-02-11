export declare const input: {
    title: string;
    type: string;
    anyOf: ({
        type: string;
        required: string[];
        properties: {
            obj_type: {
                type: string;
                enum: string[];
            };
            foo_type: {
                type: string;
            };
            bar_type?: undefined;
            team?: undefined;
            health?: undefined;
        };
    } | {
        type: string;
        required: string[];
        properties: {
            obj_type: {
                type: string;
                enum: string[];
            };
            bar_type: {
                type: string;
            };
            team: {
                type: string;
            };
            health: {
                type: string;
                format: string;
                minimum: number;
            };
            foo_type?: undefined;
        };
    })[];
    required: string[];
    properties: {
        coords: {
            type: string;
        };
        id: {
            type: string;
        };
    };
};
