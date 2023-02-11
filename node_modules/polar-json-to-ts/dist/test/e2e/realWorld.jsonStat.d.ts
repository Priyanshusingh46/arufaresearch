/**
 * @see https://github.com/fge/sample-json-schemas/blob/master/json-stat
 */
export declare const input: {
    $schema: string;
    title: string;
    id: string;
    description: string;
    definitions: {
        strarray: {
            type: string;
            items: {
                type: string;
            };
            uniqueItems: boolean;
        };
        version: {
            type: string;
            enum: string[];
        };
        updated: {
            oneOf: ({
                type: string;
                format: string;
                pattern?: undefined;
            } | {
                type: string;
                pattern: string;
                format?: undefined;
            })[];
        };
        href: {
            type: string;
            format: string;
        };
        label: {
            type: string;
        };
        source: {
            type: string;
        };
        extension: {
            type: string;
        };
        error: {
            type: string;
        };
        note: {
            $ref: string;
        };
        category: {
            type: string;
            properties: {
                index: {
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                        additionalProperties?: undefined;
                    } | {
                        type: string;
                        additionalProperties: {
                            type: string;
                        };
                        $ref?: undefined;
                    })[];
                };
                label: {
                    type: string;
                    additionalProperties: {
                        type: string;
                    };
                };
                note: {
                    type: string;
                    additionalProperties: {
                        $ref: string;
                    };
                };
                unit: {
                    type: string;
                    additionalProperties: {
                        type: string;
                        properties: {
                            label: {
                                $ref: string;
                            };
                            decimals: {
                                type: string;
                            };
                            position: {
                                type: string;
                                enum: string[];
                            };
                        };
                    };
                };
                coordinates: {
                    type: string;
                    additionalProperties: {
                        type: string;
                        items: {
                            type: string;
                        }[];
                        additionalItems: boolean;
                    };
                };
                child: {
                    type: string;
                    additionalProperties: {
                        $ref: string;
                    };
                };
            };
            additionalProperties: boolean;
        };
        link: {
            type: string;
            patternProperties: {
                '^(about|alternate|appendix|archives|author|blocked-by|bookmark|canonical|chapter|collection|contents|copyright|create-form|current|derivedfrom|describedby|describes|disclosure|dns-prefetch|duplicate|edit|edit-form|edit-media|enclosure|first|glossary|help|hosts|hub|icon|index|item|last|latest-version|license|lrdd|memento|monitor|monitor-group|next|next-archive|nofollow|noreferrer|original|payment|pingback|preconnect|predecessor-version|prefetch|preload|prerender|prev|preview|previous|prev-archive|privacy-policy|profile|related|replies|search|section|self|service|start|stylesheet|subsection|successor-version|tag|terms-of-service|timegate|timemap|type|up|version-history|via|webmention|working-copy|working-copy-of)$': {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            type: {
                                type: string;
                            };
                            class: {
                                type: string;
                                enum: string[];
                            };
                            href: {
                                $ref: string;
                            };
                            label: {
                                $ref: string;
                            };
                            note: {
                                $ref: string;
                            };
                            link: {
                                $ref: string;
                            };
                            updated: {
                                $ref: string;
                            };
                            source: {
                                $ref: string;
                            };
                            extension: {
                                $ref: string;
                            };
                            category: {
                                $ref: string;
                            };
                            id: {
                                $ref: string;
                            };
                            size: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            role: {
                                type: string;
                                properties: {
                                    time: {
                                        $ref: string;
                                    };
                                    geo: {
                                        $ref: string;
                                    };
                                    metric: {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            dimension: {
                                type: string;
                                additionalProperties: {
                                    type: string;
                                    properties: {
                                        href: {
                                            $ref: string;
                                        };
                                        label: {
                                            $ref: string;
                                        };
                                        note: {
                                            $ref: string;
                                        };
                                        link: {
                                            $ref: string;
                                        };
                                        extension: {
                                            $ref: string;
                                        };
                                        category: {
                                            $ref: string;
                                        };
                                    };
                                    additionalProperties: boolean;
                                    required: string[];
                                };
                            };
                            value: {
                                oneOf: ({
                                    type: string;
                                    items: {
                                        anyOf: {
                                            type: string;
                                        }[];
                                    };
                                    additionalProperties?: undefined;
                                } | {
                                    type: string;
                                    additionalProperties: {
                                        anyOf: {
                                            type: string;
                                        }[];
                                    };
                                    items?: undefined;
                                })[];
                            };
                            status: {
                                oneOf: ({
                                    type: string;
                                    items?: undefined;
                                    additionalProperties?: undefined;
                                } | {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                    additionalProperties?: undefined;
                                } | {
                                    type: string;
                                    additionalProperties: {
                                        type: string;
                                    };
                                    items?: undefined;
                                })[];
                            };
                        };
                        additionalProperties: boolean;
                    };
                };
            };
            additionalProperties: boolean;
        };
    };
    oneOf: ({
        type: string;
        properties: {
            class: {
                type: string;
                enum: string[];
            };
            version: {
                $ref: string;
            };
            href: {
                $ref: string;
            };
            label: {
                $ref: string;
            };
            note: {
                $ref: string;
            };
            link: {
                $ref: string;
                type?: undefined;
                properties?: undefined;
                additionalProperties?: undefined;
            };
            updated: {
                $ref: string;
            };
            source: {
                $ref: string;
            };
            error: {
                $ref: string;
            };
            extension: {
                $ref: string;
            };
            id: {
                $ref: string;
            };
            size: {
                type: string;
                items: {
                    type: string;
                };
            };
            role: {
                type: string;
                properties: {
                    time: {
                        $ref: string;
                    };
                    geo: {
                        $ref: string;
                    };
                    metric: {
                        $ref: string;
                    };
                };
                additionalProperties: boolean;
            };
            dimension: {
                type: string;
                additionalProperties: {
                    type: string;
                    properties: {
                        href: {
                            $ref: string;
                        };
                        label: {
                            $ref: string;
                        };
                        note: {
                            $ref: string;
                        };
                        link: {
                            $ref: string;
                        };
                        extension: {
                            $ref: string;
                        };
                        category: {
                            $ref: string;
                        };
                    };
                    additionalProperties: boolean;
                    required: string[];
                };
            };
            value: {
                oneOf: ({
                    type: string;
                    items: {
                        anyOf: {
                            type: string;
                        }[];
                    };
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    additionalProperties: {
                        anyOf: {
                            type: string;
                        }[];
                    };
                    items?: undefined;
                })[];
            };
            status: {
                oneOf: ({
                    type: string;
                    items?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    items: {
                        type: string;
                    };
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    additionalProperties: {
                        type: string;
                    };
                    items?: undefined;
                })[];
            };
            category?: undefined;
        };
        additionalProperties: boolean;
        required: string[];
    } | {
        type: string;
        properties: {
            class: {
                type: string;
                enum: string[];
            };
            version: {
                $ref: string;
            };
            href: {
                $ref: string;
            };
            label: {
                $ref: string;
            };
            note: {
                $ref: string;
            };
            link: {
                $ref: string;
                type?: undefined;
                properties?: undefined;
                additionalProperties?: undefined;
            };
            updated: {
                $ref: string;
            };
            source: {
                $ref: string;
            };
            error: {
                $ref: string;
            };
            extension: {
                $ref: string;
            };
            category: {
                $ref: string;
            };
            id?: undefined;
            size?: undefined;
            role?: undefined;
            dimension?: undefined;
            value?: undefined;
            status?: undefined;
        };
        additionalProperties: boolean;
        required: string[];
    } | {
        type: string;
        properties: {
            class: {
                type: string;
                enum: string[];
            };
            version: {
                $ref: string;
            };
            href: {
                $ref: string;
            };
            label: {
                $ref: string;
            };
            note: {
                $ref: string;
            };
            link: {
                type: string;
                properties: {
                    item: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                type: {
                                    type: string;
                                };
                                class: {
                                    type: string;
                                    enum: string[];
                                };
                                href: {
                                    $ref: string;
                                };
                                label: {
                                    $ref: string;
                                };
                                note: {
                                    $ref: string;
                                };
                                link: {
                                    $ref: string;
                                };
                                updated: {
                                    $ref: string;
                                };
                                source: {
                                    $ref: string;
                                };
                                extension: {
                                    $ref: string;
                                };
                                category: {
                                    $ref: string;
                                };
                                id: {
                                    $ref: string;
                                };
                                size: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                role: {
                                    type: string;
                                    properties: {
                                        time: {
                                            $ref: string;
                                        };
                                        geo: {
                                            $ref: string;
                                        };
                                        metric: {
                                            $ref: string;
                                        };
                                    };
                                    additionalProperties: boolean;
                                };
                                dimension: {
                                    type: string;
                                    additionalProperties: {
                                        type: string;
                                        properties: {
                                            href: {
                                                $ref: string;
                                            };
                                            label: {
                                                $ref: string;
                                            };
                                            note: {
                                                $ref: string;
                                            };
                                            link: {
                                                $ref: string;
                                            };
                                            extension: {
                                                $ref: string;
                                            };
                                            category: {
                                                $ref: string;
                                            };
                                        };
                                        additionalProperties: boolean;
                                        required: string[];
                                    };
                                };
                                value: {
                                    oneOf: ({
                                        type: string;
                                        items: {
                                            anyOf: {
                                                type: string;
                                            }[];
                                        };
                                        additionalProperties?: undefined;
                                    } | {
                                        type: string;
                                        additionalProperties: {
                                            anyOf: {
                                                type: string;
                                            }[];
                                        };
                                        items?: undefined;
                                    })[];
                                };
                                status: {
                                    oneOf: ({
                                        type: string;
                                        items?: undefined;
                                        additionalProperties?: undefined;
                                    } | {
                                        type: string;
                                        items: {
                                            type: string;
                                        };
                                        additionalProperties?: undefined;
                                    } | {
                                        type: string;
                                        additionalProperties: {
                                            type: string;
                                        };
                                        items?: undefined;
                                    })[];
                                };
                            };
                            additionalProperties: boolean;
                        };
                    };
                };
                additionalProperties: boolean;
                $ref?: undefined;
            };
            updated: {
                $ref: string;
            };
            source: {
                $ref: string;
            };
            error: {
                $ref: string;
            };
            extension: {
                $ref: string;
            };
            id?: undefined;
            size?: undefined;
            role?: undefined;
            dimension?: undefined;
            value?: undefined;
            status?: undefined;
            category?: undefined;
        };
        additionalProperties: boolean;
        required: string[];
    })[];
};
