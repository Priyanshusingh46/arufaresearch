/**
 * @see https://github.com/bcherny/json-schema-to-typescript/issues/422
 */
export declare const input: {
    definitions: {
        mainMenu: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                items: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            label: {
                                type: string;
                            };
                            subMenu: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    column1: {
                                        type: string;
                                        items: {
                                            oneOf: ({
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            label: {
                                                                type: string;
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    content?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    content: {
                                                        type: string;
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    link?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    media: {
                                                        oneOf: ({
                                                            type: string;
                                                            $ref?: undefined;
                                                        } | {
                                                            $ref: string;
                                                            type?: undefined;
                                                        })[];
                                                    };
                                                    headline: {
                                                        type: string;
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                            label?: undefined;
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    content?: undefined;
                                                };
                                                required: string[];
                                            })[];
                                        };
                                    };
                                    enableColumn2: {
                                        type: string;
                                    };
                                    column2: {
                                        type: string;
                                        items: {
                                            oneOf: ({
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            label: {
                                                                type: string;
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    content?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    content: {
                                                        type: string;
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    link?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    media: {
                                                        oneOf: ({
                                                            type: string;
                                                            $ref?: undefined;
                                                        } | {
                                                            $ref: string;
                                                            type?: undefined;
                                                        })[];
                                                    };
                                                    headline: {
                                                        type: string;
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                            label?: undefined;
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    content?: undefined;
                                                };
                                                required: string[];
                                            })[];
                                        };
                                    };
                                };
                                required: never[];
                            };
                            link: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    reference: {
                                        oneOf: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                value: {
                                                    oneOf: ({
                                                        type: string;
                                                        $ref?: undefined;
                                                    } | {
                                                        $ref: string;
                                                        type?: undefined;
                                                    })[];
                                                };
                                                relationTo: {
                                                    const: string;
                                                };
                                            };
                                            required: string[];
                                        }[];
                                    };
                                    url: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                secondaryItems: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            link: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    label: {
                                        type: string;
                                    };
                                    reference: {
                                        oneOf: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                value: {
                                                    oneOf: ({
                                                        type: string;
                                                        $ref?: undefined;
                                                    } | {
                                                        $ref: string;
                                                        type?: undefined;
                                                    })[];
                                                };
                                                relationTo: {
                                                    const: string;
                                                };
                                            };
                                            required: string[];
                                        }[];
                                    };
                                    url: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
            };
            required: never[];
        };
        footer: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                column1: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            appearance: {
                                type: string;
                                enum: string[];
                            };
                            label: {
                                type: string;
                            };
                            useLink: {
                                type: string;
                            };
                            link: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    reference: {
                                        oneOf: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                value: {
                                                    oneOf: ({
                                                        type: string;
                                                        $ref?: undefined;
                                                    } | {
                                                        $ref: string;
                                                        type?: undefined;
                                                    })[];
                                                };
                                                relationTo: {
                                                    const: string;
                                                };
                                            };
                                            required: string[];
                                        }[];
                                    };
                                    url: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
                column2: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            appearance: {
                                type: string;
                                enum: string[];
                            };
                            label: {
                                type: string;
                            };
                            useLink: {
                                type: string;
                            };
                            link: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    reference: {
                                        oneOf: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                value: {
                                                    oneOf: ({
                                                        type: string;
                                                        $ref?: undefined;
                                                    } | {
                                                        $ref: string;
                                                        type?: undefined;
                                                    })[];
                                                };
                                                relationTo: {
                                                    const: string;
                                                };
                                            };
                                            required: string[];
                                        }[];
                                    };
                                    url: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
            };
            required: never[];
        };
        meta: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                socialMediaLinks: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            url: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                legalLinks: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            link: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    label: {
                                        type: string;
                                    };
                                    reference: {
                                        oneOf: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                value: {
                                                    oneOf: ({
                                                        type: string;
                                                        $ref?: undefined;
                                                    } | {
                                                        $ref: string;
                                                        type?: undefined;
                                                    })[];
                                                };
                                                relationTo: {
                                                    const: string;
                                                };
                                            };
                                            required: string[];
                                        }[];
                                    };
                                    url: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
                locations: {
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            $ref?: undefined;
                        } | {
                            $ref: string;
                            type?: undefined;
                        })[];
                    };
                };
                phone: {
                    type: string;
                };
                nationalPhone: {
                    type: string;
                };
                fax: {
                    type: string;
                };
                popularSearchTerms: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            term: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
            };
            required: never[];
        };
        pages: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                breadcrumbs: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            doc: {
                                oneOf: ({
                                    type: string;
                                    $ref?: undefined;
                                } | {
                                    $ref: string;
                                    type?: undefined;
                                })[];
                            };
                            url: {
                                type: string;
                            };
                            label: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
                title: {
                    type: string;
                };
                showBreadcrumbs: {
                    type: string;
                };
                hero: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        basic: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                            };
                            required: never[];
                        };
                        content: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                            };
                            required: never[];
                        };
                        contentMedia: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                            };
                            required: string[];
                        };
                        contentMedia2: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                            };
                            required: string[];
                        };
                        contentSidebar: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                mainContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                sidebarContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                            };
                            required: never[];
                        };
                        columnsBelow: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                columns: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            heading: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                            required: string[];
                        };
                        fullscreenBackground: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                invertColors: {
                                    type: string;
                                };
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                            };
                            required: string[];
                        };
                        quickNav: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                invertColors: {
                                    type: string;
                                };
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                columns: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            heading: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                            required: string[];
                        };
                        fullscreenSlider: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                useStaticContent: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            backgroundMedia: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            links: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        link: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                appearance: {
                                                                    type: string;
                                                                    enum: string[];
                                                                };
                                                                type: {
                                                                    type: string;
                                                                    enum: string[];
                                                                };
                                                                label: {
                                                                    type: string;
                                                                };
                                                                reference: {
                                                                    oneOf: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            value: {
                                                                                oneOf: ({
                                                                                    type: string;
                                                                                    $ref?: undefined;
                                                                                } | {
                                                                                    $ref: string;
                                                                                    type?: undefined;
                                                                                })[];
                                                                            };
                                                                            relationTo: {
                                                                                const: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    }[];
                                                                };
                                                                url: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: never[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                            required: never[];
                        };
                    };
                    required: string[];
                };
                layout: {
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                appearance: {
                                    type: string;
                                    enum: string[];
                                };
                                sections: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            label: {
                                                type: string;
                                            };
                                            openOnInit: {
                                                type: string;
                                            };
                                            columns: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        width: {
                                                            type: string;
                                                            enum: string[];
                                                        };
                                                        alignment: {
                                                            type: string;
                                                            enum: string[];
                                                        };
                                                        richText: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        links: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                                additionalProperties: boolean;
                                                                properties: {
                                                                    link: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            type: {
                                                                                type: string;
                                                                                enum: string[];
                                                                            };
                                                                            label: {
                                                                                type: string;
                                                                            };
                                                                            reference: {
                                                                                oneOf: {
                                                                                    type: string;
                                                                                    additionalProperties: boolean;
                                                                                    properties: {
                                                                                        value: {
                                                                                            oneOf: ({
                                                                                                type: string;
                                                                                                $ref?: undefined;
                                                                                            } | {
                                                                                                $ref: string;
                                                                                                type?: undefined;
                                                                                            })[];
                                                                                        };
                                                                                        relationTo: {
                                                                                            const: string;
                                                                                        };
                                                                                    };
                                                                                    required: string[];
                                                                                }[];
                                                                            };
                                                                            url: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    id: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: never[];
                                                            };
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                invertColors: {
                                    type: string;
                                };
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                cardStyle: {
                                    type: string;
                                    enum: string[];
                                };
                                cards: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                cardStyle: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                    label?: undefined;
                                                };
                                                required: string[];
                                            };
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            id: {
                                                type: string;
                                            };
                                            enableLink?: undefined;
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                media1: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                media2: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                media3: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                enableGrayBackground: {
                                    type: string;
                                };
                                columns: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            width: {
                                                type: string;
                                                enum: string[];
                                            };
                                            alignment: {
                                                type: string;
                                                enum: string[];
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            links: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        link: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                type: {
                                                                    type: string;
                                                                    enum: string[];
                                                                };
                                                                label: {
                                                                    type: string;
                                                                };
                                                                reference: {
                                                                    oneOf: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            value: {
                                                                                oneOf: ({
                                                                                    type: string;
                                                                                    $ref?: undefined;
                                                                                } | {
                                                                                    $ref: string;
                                                                                    type?: undefined;
                                                                                })[];
                                                                            };
                                                                            relationTo: {
                                                                                const: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    }[];
                                                                };
                                                                url: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: never[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                cellWidth: {
                                    type: string;
                                    enum: string[];
                                };
                                invertColors: {
                                    type: string;
                                };
                                enableCellNumbers: {
                                    type: string;
                                };
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                cells: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                            media?: undefined;
                                            useOverlay?: undefined;
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                form: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                locations: {
                                    type: string;
                                    items: {
                                        oneOf: ({
                                            type: string;
                                            $ref?: undefined;
                                        } | {
                                            $ref: string;
                                            type?: undefined;
                                        })[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useVimeo: {
                                    type: string;
                                };
                                vimeoID: {
                                    type: string;
                                };
                                aspectRatio: {
                                    type: string;
                                    enum: string[];
                                };
                                size: {
                                    type: string;
                                    enum: string[];
                                };
                                caption: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                collage: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                alignment: {
                                    type: string;
                                    enum: string[];
                                };
                                overlap: {
                                    type: string;
                                };
                                invertColors: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                embeddedVideo: {
                                    type: string;
                                    additionalProperties: boolean;
                                    properties: {
                                        embed: {
                                            type: string;
                                        };
                                        poster: {
                                            oneOf: ({
                                                type: string;
                                                $ref?: undefined;
                                            } | {
                                                $ref: string;
                                                type?: undefined;
                                            })[];
                                        };
                                        platform: {
                                            type: string;
                                            enum: string[];
                                        };
                                        videoID: {
                                            type: string;
                                        };
                                        aspectRatio: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                    required: string[];
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                            richText?: undefined;
                                            link?: undefined;
                                            useOverlay?: undefined;
                                            enableLink?: undefined;
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                items: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            label: {
                                                type: string;
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        })[];
                    };
                };
                fullTitle: {
                    type: string;
                };
                excerpt: {
                    type: string;
                };
                meta: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        title: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        keywords: {
                            type: string;
                        };
                        image: {
                            oneOf: ({
                                type: string;
                                $ref?: undefined;
                            } | {
                                $ref: string;
                                type?: undefined;
                            })[];
                        };
                    };
                    required: never[];
                };
                status: {
                    type: string;
                    enum: string[];
                };
                slug: {
                    type: string;
                };
                parent: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
                subsite: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
                color: {
                    type: string;
                    enum: string[];
                };
                author: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
                preview: {
                    type: string;
                };
            };
            required: string[];
        };
        posts: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                title: {
                    type: string;
                };
                hero: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        basic: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                            };
                            required: never[];
                        };
                        content: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                            };
                            required: never[];
                        };
                        contentMedia: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                            };
                            required: string[];
                        };
                        contentMedia2: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                            };
                            required: string[];
                        };
                        contentSidebar: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                mainContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                sidebarContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                            };
                            required: never[];
                        };
                        columnsBelow: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                columns: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            heading: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                            required: string[];
                        };
                        fullscreenBackground: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                invertColors: {
                                    type: string;
                                };
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                            };
                            required: string[];
                        };
                        quickNav: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                invertColors: {
                                    type: string;
                                };
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                columns: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            heading: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                            required: string[];
                        };
                        fullscreenSlider: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                useStaticContent: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            backgroundMedia: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            links: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        link: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                appearance: {
                                                                    type: string;
                                                                    enum: string[];
                                                                };
                                                                type: {
                                                                    type: string;
                                                                    enum: string[];
                                                                };
                                                                label: {
                                                                    type: string;
                                                                };
                                                                reference: {
                                                                    oneOf: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            value: {
                                                                                oneOf: ({
                                                                                    type: string;
                                                                                    $ref?: undefined;
                                                                                } | {
                                                                                    $ref: string;
                                                                                    type?: undefined;
                                                                                })[];
                                                                            };
                                                                            relationTo: {
                                                                                const: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    }[];
                                                                };
                                                                url: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: never[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                            required: never[];
                        };
                    };
                    required: string[];
                };
                layout: {
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                appearance: {
                                    type: string;
                                    enum: string[];
                                };
                                sections: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            label: {
                                                type: string;
                                            };
                                            openOnInit: {
                                                type: string;
                                            };
                                            columns: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        width: {
                                                            type: string;
                                                            enum: string[];
                                                        };
                                                        alignment: {
                                                            type: string;
                                                            enum: string[];
                                                        };
                                                        richText: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        links: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                                additionalProperties: boolean;
                                                                properties: {
                                                                    link: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            type: {
                                                                                type: string;
                                                                                enum: string[];
                                                                            };
                                                                            label: {
                                                                                type: string;
                                                                            };
                                                                            reference: {
                                                                                oneOf: {
                                                                                    type: string;
                                                                                    additionalProperties: boolean;
                                                                                    properties: {
                                                                                        value: {
                                                                                            oneOf: ({
                                                                                                type: string;
                                                                                                $ref?: undefined;
                                                                                            } | {
                                                                                                $ref: string;
                                                                                                type?: undefined;
                                                                                            })[];
                                                                                        };
                                                                                        relationTo: {
                                                                                            const: string;
                                                                                        };
                                                                                    };
                                                                                    required: string[];
                                                                                }[];
                                                                            };
                                                                            url: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    id: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: never[];
                                                            };
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                invertColors: {
                                    type: string;
                                };
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                cardStyle: {
                                    type: string;
                                    enum: string[];
                                };
                                cards: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                cardStyle: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                    label?: undefined;
                                                };
                                                required: string[];
                                            };
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            id: {
                                                type: string;
                                            };
                                            enableLink?: undefined;
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                media1: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                media2: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                media3: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                enableGrayBackground: {
                                    type: string;
                                };
                                columns: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            width: {
                                                type: string;
                                                enum: string[];
                                            };
                                            alignment: {
                                                type: string;
                                                enum: string[];
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            links: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        link: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                type: {
                                                                    type: string;
                                                                    enum: string[];
                                                                };
                                                                label: {
                                                                    type: string;
                                                                };
                                                                reference: {
                                                                    oneOf: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            value: {
                                                                                oneOf: ({
                                                                                    type: string;
                                                                                    $ref?: undefined;
                                                                                } | {
                                                                                    $ref: string;
                                                                                    type?: undefined;
                                                                                })[];
                                                                            };
                                                                            relationTo: {
                                                                                const: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    }[];
                                                                };
                                                                url: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: never[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                cellWidth: {
                                    type: string;
                                    enum: string[];
                                };
                                invertColors: {
                                    type: string;
                                };
                                enableCellNumbers: {
                                    type: string;
                                };
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                cells: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                            media?: undefined;
                                            useOverlay?: undefined;
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                form: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                locations: {
                                    type: string;
                                    items: {
                                        oneOf: ({
                                            type: string;
                                            $ref?: undefined;
                                        } | {
                                            $ref: string;
                                            type?: undefined;
                                        })[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useVimeo: {
                                    type: string;
                                };
                                vimeoID: {
                                    type: string;
                                };
                                aspectRatio: {
                                    type: string;
                                    enum: string[];
                                };
                                size: {
                                    type: string;
                                    enum: string[];
                                };
                                caption: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                collage: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                alignment: {
                                    type: string;
                                    enum: string[];
                                };
                                overlap: {
                                    type: string;
                                };
                                invertColors: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                embeddedVideo: {
                                    type: string;
                                    additionalProperties: boolean;
                                    properties: {
                                        embed: {
                                            type: string;
                                        };
                                        poster: {
                                            oneOf: ({
                                                type: string;
                                                $ref?: undefined;
                                            } | {
                                                $ref: string;
                                                type?: undefined;
                                            })[];
                                        };
                                        platform: {
                                            type: string;
                                            enum: string[];
                                        };
                                        videoID: {
                                            type: string;
                                        };
                                        aspectRatio: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                    required: string[];
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                            richText?: undefined;
                                            link?: undefined;
                                            useOverlay?: undefined;
                                            enableLink?: undefined;
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                items: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            label: {
                                                type: string;
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        })[];
                    };
                };
                slug: {
                    type: string;
                };
                category: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
                subsite: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
                meta: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        title: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        keywords: {
                            type: string;
                        };
                        image: {
                            oneOf: ({
                                type: string;
                                $ref?: undefined;
                            } | {
                                $ref: string;
                                type?: undefined;
                            })[];
                        };
                    };
                    required: never[];
                };
            };
            required: string[];
        };
        'post-categories': {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                title: {
                    type: string;
                };
                color: {
                    type: string;
                    enum: string[];
                };
                slug: {
                    type: string;
                };
                subsite: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
            };
            required: string[];
        };
        housing: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                title: {
                    type: string;
                };
                address: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        line1: {
                            type: string;
                        };
                        line2: {
                            type: string;
                        };
                        city: {
                            type: string;
                        };
                        state: {
                            type: string;
                            enum: string[];
                        };
                        zip: {
                            type: string;
                        };
                        coords: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                lat: {
                                    type: string;
                                };
                                lng: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                    };
                    required: never[];
                };
                contacts: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            label: {
                                type: string;
                            };
                            value: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
                layout: {
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                appearance: {
                                    type: string;
                                    enum: string[];
                                };
                                sections: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            label: {
                                                type: string;
                                            };
                                            openOnInit: {
                                                type: string;
                                            };
                                            columns: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        width: {
                                                            type: string;
                                                            enum: string[];
                                                        };
                                                        alignment: {
                                                            type: string;
                                                            enum: string[];
                                                        };
                                                        richText: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        links: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                                additionalProperties: boolean;
                                                                properties: {
                                                                    link: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            type: {
                                                                                type: string;
                                                                                enum: string[];
                                                                            };
                                                                            label: {
                                                                                type: string;
                                                                            };
                                                                            reference: {
                                                                                oneOf: {
                                                                                    type: string;
                                                                                    additionalProperties: boolean;
                                                                                    properties: {
                                                                                        value: {
                                                                                            oneOf: ({
                                                                                                type: string;
                                                                                                $ref?: undefined;
                                                                                            } | {
                                                                                                $ref: string;
                                                                                                type?: undefined;
                                                                                            })[];
                                                                                        };
                                                                                        relationTo: {
                                                                                            const: string;
                                                                                        };
                                                                                    };
                                                                                    required: string[];
                                                                                }[];
                                                                            };
                                                                            url: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    id: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: never[];
                                                            };
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                invertColors: {
                                    type: string;
                                };
                                backgroundMedia: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useOverlay: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                cardStyle: {
                                    type: string;
                                    enum: string[];
                                };
                                cards: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                cardStyle: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                    label?: undefined;
                                                };
                                                required: string[];
                                            };
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            useOverlay: {
                                                type: string;
                                            };
                                            id: {
                                                type: string;
                                            };
                                            enableLink?: undefined;
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                media1: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                media2: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                media3: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                enableGrayBackground: {
                                    type: string;
                                };
                                columns: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            width: {
                                                type: string;
                                                enum: string[];
                                            };
                                            alignment: {
                                                type: string;
                                                enum: string[];
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            links: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        link: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                type: {
                                                                    type: string;
                                                                    enum: string[];
                                                                };
                                                                label: {
                                                                    type: string;
                                                                };
                                                                reference: {
                                                                    oneOf: {
                                                                        type: string;
                                                                        additionalProperties: boolean;
                                                                        properties: {
                                                                            value: {
                                                                                oneOf: ({
                                                                                    type: string;
                                                                                    $ref?: undefined;
                                                                                } | {
                                                                                    $ref: string;
                                                                                    type?: undefined;
                                                                                })[];
                                                                            };
                                                                            relationTo: {
                                                                                const: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    }[];
                                                                };
                                                                url: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: never[];
                                                };
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                cellWidth: {
                                    type: string;
                                    enum: string[];
                                };
                                invertColors: {
                                    type: string;
                                };
                                enableCellNumbers: {
                                    type: string;
                                };
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                cells: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                            media?: undefined;
                                            useOverlay?: undefined;
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                form: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                links?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                locations: {
                                    type: string;
                                    items: {
                                        oneOf: ({
                                            type: string;
                                            $ref?: undefined;
                                        } | {
                                            $ref: string;
                                            type?: undefined;
                                        })[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                useVimeo: {
                                    type: string;
                                };
                                vimeoID: {
                                    type: string;
                                };
                                aspectRatio: {
                                    type: string;
                                    enum: string[];
                                };
                                size: {
                                    type: string;
                                    enum: string[];
                                };
                                caption: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                collage: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                alignment: {
                                    type: string;
                                    enum: string[];
                                };
                                overlap: {
                                    type: string;
                                };
                                invertColors: {
                                    type: string;
                                };
                                richText: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                media: {
                                    oneOf: ({
                                        type: string;
                                        $ref?: undefined;
                                    } | {
                                        $ref: string;
                                        type?: undefined;
                                    })[];
                                };
                                embeddedVideo: {
                                    type: string;
                                    additionalProperties: boolean;
                                    properties: {
                                        embed: {
                                            type: string;
                                        };
                                        poster: {
                                            oneOf: ({
                                                type: string;
                                                $ref?: undefined;
                                            } | {
                                                $ref: string;
                                                type?: undefined;
                                            })[];
                                        };
                                        platform: {
                                            type: string;
                                            enum: string[];
                                        };
                                        videoID: {
                                            type: string;
                                        };
                                        aspectRatio: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                    required: string[];
                                };
                                links: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: never[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                introContent: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                backgroundType: {
                                    type: string;
                                    enum: string[];
                                };
                                slides: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            media: {
                                                oneOf: ({
                                                    type: string;
                                                    $ref?: undefined;
                                                } | {
                                                    $ref: string;
                                                    type?: undefined;
                                                })[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                            richText?: undefined;
                                            link?: undefined;
                                            useOverlay?: undefined;
                                            enableLink?: undefined;
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                                items?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                items: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            label: {
                                                type: string;
                                            };
                                            richText: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            enableLink: {
                                                type: string;
                                            };
                                            link: {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    type: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    label: {
                                                        type: string;
                                                    };
                                                    reference: {
                                                        oneOf: {
                                                            type: string;
                                                            additionalProperties: boolean;
                                                            properties: {
                                                                value: {
                                                                    oneOf: ({
                                                                        type: string;
                                                                        $ref?: undefined;
                                                                    } | {
                                                                        $ref: string;
                                                                        type?: undefined;
                                                                    })[];
                                                                };
                                                                relationTo: {
                                                                    const: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        }[];
                                                    };
                                                    url: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                appearance?: undefined;
                                sections?: undefined;
                                invertColors?: undefined;
                                backgroundMedia?: undefined;
                                useOverlay?: undefined;
                                richText?: undefined;
                                links?: undefined;
                                introContent?: undefined;
                                cardStyle?: undefined;
                                cards?: undefined;
                                backgroundType?: undefined;
                                slides?: undefined;
                                media1?: undefined;
                                media2?: undefined;
                                media3?: undefined;
                                enableGrayBackground?: undefined;
                                columns?: undefined;
                                cellWidth?: undefined;
                                enableCellNumbers?: undefined;
                                cells?: undefined;
                                form?: undefined;
                                locations?: undefined;
                                media?: undefined;
                                useVimeo?: undefined;
                                vimeoID?: undefined;
                                aspectRatio?: undefined;
                                size?: undefined;
                                caption?: undefined;
                                collage?: undefined;
                                alignment?: undefined;
                                overlap?: undefined;
                                embeddedVideo?: undefined;
                            };
                            required: string[];
                        })[];
                    };
                };
                meta: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        title: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        keywords: {
                            type: string;
                        };
                        image: {
                            oneOf: ({
                                type: string;
                                $ref?: undefined;
                            } | {
                                $ref: string;
                                type?: undefined;
                            })[];
                        };
                    };
                    required: never[];
                };
                slug: {
                    type: string;
                };
                categories: {
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            $ref?: undefined;
                        } | {
                            $ref: string;
                            type?: undefined;
                        })[];
                    };
                };
                subsite: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
            };
            required: string[];
        };
        'housing-categories': {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                title: {
                    type: string;
                };
                slug: {
                    type: string;
                };
            };
            required: string[];
        };
        locations: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                name: {
                    type: string;
                };
                address: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        line1: {
                            type: string;
                        };
                        line2: {
                            type: string;
                        };
                        city: {
                            type: string;
                        };
                        state: {
                            type: string;
                            enum: string[];
                        };
                        zip: {
                            type: string;
                        };
                        coords: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                lat: {
                                    type: string;
                                };
                                lng: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                    };
                    required: never[];
                };
                contacts: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            label: {
                                type: string;
                            };
                            value: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
                meta: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        title: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        keywords: {
                            type: string;
                        };
                        image: {
                            oneOf: ({
                                type: string;
                                $ref?: undefined;
                            } | {
                                $ref: string;
                                type?: undefined;
                            })[];
                        };
                    };
                    required: never[];
                };
            };
            required: string[];
        };
        subsites: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                title: {
                    type: string;
                };
                menuItems: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            link: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    label: {
                                        type: string;
                                    };
                                    reference: {
                                        oneOf: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                value: {
                                                    oneOf: ({
                                                        type: string;
                                                        $ref?: undefined;
                                                    } | {
                                                        $ref: string;
                                                        type?: undefined;
                                                    })[];
                                                };
                                                relationTo: {
                                                    const: string;
                                                };
                                            };
                                            required: string[];
                                        }[];
                                    };
                                    url: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            label: {
                                type: string;
                            };
                            subMenu: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    column1: {
                                        type: string;
                                        items: {
                                            oneOf: ({
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            label: {
                                                                type: string;
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    content?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    content: {
                                                        type: string;
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    link?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    media: {
                                                        oneOf: ({
                                                            type: string;
                                                            $ref?: undefined;
                                                        } | {
                                                            $ref: string;
                                                            type?: undefined;
                                                        })[];
                                                    };
                                                    headline: {
                                                        type: string;
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                            label?: undefined;
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    content?: undefined;
                                                };
                                                required: string[];
                                            })[];
                                        };
                                    };
                                    enableColumn2: {
                                        type: string;
                                    };
                                    column2: {
                                        type: string;
                                        items: {
                                            oneOf: ({
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            label: {
                                                                type: string;
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    content?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    content: {
                                                        type: string;
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    link?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    media: {
                                                        oneOf: ({
                                                            type: string;
                                                            $ref?: undefined;
                                                        } | {
                                                            $ref: string;
                                                            type?: undefined;
                                                        })[];
                                                    };
                                                    headline: {
                                                        type: string;
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                            label?: undefined;
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    content?: undefined;
                                                };
                                                required: string[];
                                            })[];
                                        };
                                    };
                                    enableColumn3: {
                                        type: string;
                                    };
                                    column3: {
                                        type: string;
                                        items: {
                                            oneOf: ({
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    appearance: {
                                                        type: string;
                                                        enum: string[];
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            label: {
                                                                type: string;
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    content?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    content: {
                                                        type: string;
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    link?: undefined;
                                                    media?: undefined;
                                                    headline?: undefined;
                                                };
                                                required: string[];
                                            } | {
                                                type: string;
                                                additionalProperties: boolean;
                                                properties: {
                                                    media: {
                                                        oneOf: ({
                                                            type: string;
                                                            $ref?: undefined;
                                                        } | {
                                                            $ref: string;
                                                            type?: undefined;
                                                        })[];
                                                    };
                                                    headline: {
                                                        type: string;
                                                    };
                                                    link: {
                                                        type: string;
                                                        additionalProperties: boolean;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                                enum: string[];
                                                            };
                                                            reference: {
                                                                oneOf: {
                                                                    type: string;
                                                                    additionalProperties: boolean;
                                                                    properties: {
                                                                        value: {
                                                                            oneOf: ({
                                                                                type: string;
                                                                                $ref?: undefined;
                                                                            } | {
                                                                                $ref: string;
                                                                                type?: undefined;
                                                                            })[];
                                                                        };
                                                                        relationTo: {
                                                                            const: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                }[];
                                                            };
                                                            url: {
                                                                type: string;
                                                            };
                                                            label?: undefined;
                                                        };
                                                        required: string[];
                                                    };
                                                    id: {
                                                        type: string;
                                                    };
                                                    blockName: {
                                                        type: string;
                                                    };
                                                    blockType: {
                                                        const: string;
                                                    };
                                                    appearance?: undefined;
                                                    content?: undefined;
                                                };
                                                required: string[];
                                            })[];
                                        };
                                    };
                                };
                                required: never[];
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                slug: {
                    type: string;
                };
                color: {
                    type: string;
                    enum: string[];
                };
                home: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
            };
            required: string[];
        };
        alerts: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                placement: {
                    type: string;
                    enum: string[];
                };
                subsites: {
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            $ref?: undefined;
                        } | {
                            $ref: string;
                            type?: undefined;
                        })[];
                    };
                };
                backgroundColor: {
                    type: string;
                    enum: string[];
                };
                content: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                links: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            link: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    appearance: {
                                        type: string;
                                        enum: string[];
                                    };
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    label: {
                                        type: string;
                                    };
                                    reference: {
                                        oneOf: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                value: {
                                                    oneOf: ({
                                                        type: string;
                                                        $ref?: undefined;
                                                    } | {
                                                        $ref: string;
                                                        type?: undefined;
                                                    })[];
                                                };
                                                relationTo: {
                                                    const: string;
                                                };
                                            };
                                            required: string[];
                                        }[];
                                    };
                                    url: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
            };
            required: string[];
        };
        search: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                title: {
                    type: string;
                };
                description: {
                    type: string;
                };
                keywords: {
                    type: string;
                };
                slug: {
                    type: string;
                };
                media: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
                doc: {
                    oneOf: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            value: {
                                oneOf: ({
                                    type: string;
                                    $ref?: undefined;
                                } | {
                                    $ref: string;
                                    type?: undefined;
                                })[];
                            };
                            relationTo: {
                                const: string;
                            };
                        };
                        required: string[];
                    }[];
                };
            };
            required: string[];
        };
        media: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                url: {
                    type: string;
                };
                filename: {
                    type: string;
                };
                mimeType: {
                    type: string;
                };
                filesize: {
                    type: string;
                };
                width: {
                    type: string;
                };
                height: {
                    type: string;
                };
                sizes: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        thumbnail: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                url: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                mimeType: {
                                    type: string;
                                };
                                filesize: {
                                    type: string;
                                };
                                filename: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                        card: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                url: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                mimeType: {
                                    type: string;
                                };
                                filesize: {
                                    type: string;
                                };
                                filename: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                        portrait: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                url: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                mimeType: {
                                    type: string;
                                };
                                filesize: {
                                    type: string;
                                };
                                filename: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                        square: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                url: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                mimeType: {
                                    type: string;
                                };
                                filesize: {
                                    type: string;
                                };
                                filename: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                        feature: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                url: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                mimeType: {
                                    type: string;
                                };
                                filesize: {
                                    type: string;
                                };
                                filename: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                        meta: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                url: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                mimeType: {
                                    type: string;
                                };
                                filesize: {
                                    type: string;
                                };
                                filename: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                        hero: {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                url: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                mimeType: {
                                    type: string;
                                };
                                filesize: {
                                    type: string;
                                };
                                filename: {
                                    type: string;
                                };
                            };
                            required: never[];
                        };
                    };
                    required: never[];
                };
                alt: {
                    type: string;
                };
                fallback: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
            };
            required: string[];
        };
        people: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                name: {
                    type: string;
                };
                position: {
                    type: string;
                };
                contacts: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            label: {
                                type: string;
                            };
                            value: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: never[];
                    };
                };
                socialMediaLinks: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            url: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
                richText: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                meta: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        title: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        keywords: {
                            type: string;
                        };
                        image: {
                            oneOf: ({
                                type: string;
                                $ref?: undefined;
                            } | {
                                $ref: string;
                                type?: undefined;
                            })[];
                        };
                    };
                    required: never[];
                };
                slug: {
                    type: string;
                };
                home: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
            };
            required: string[];
        };
        forms: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                title: {
                    type: string;
                };
                emailTo: {
                    type: string;
                };
                successMessage: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                redirect: {
                    type: string;
                };
                submitButtonLabel: {
                    type: string;
                };
                fields: {
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                name: {
                                    type: string;
                                };
                                label: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                defaultValue: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                options?: undefined;
                                message?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                name: {
                                    type: string;
                                };
                                label: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                defaultValue: {
                                    type: string;
                                };
                                options: {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            label: {
                                                type: string;
                                            };
                                            value: {
                                                type: string;
                                            };
                                            id: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                required: {
                                    type: string;
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                message?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                name: {
                                    type: string;
                                };
                                label: {
                                    type: string;
                                };
                                width: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                defaultValue?: undefined;
                                options?: undefined;
                                message?: undefined;
                            };
                            required: string[];
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                message: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                id: {
                                    type: string;
                                };
                                blockName: {
                                    type: string;
                                };
                                blockType: {
                                    const: string;
                                };
                                name?: undefined;
                                label?: undefined;
                                width?: undefined;
                                defaultValue?: undefined;
                                required?: undefined;
                                options?: undefined;
                            };
                            required: string[];
                        })[];
                    };
                };
            };
            required: string[];
        };
        'form-submissions': {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                form: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                };
                submissionData: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            field: {
                                type: string;
                            };
                            value: {
                                type: string;
                            };
                            id: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
            };
            required: string[];
        };
        users: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: {
                email: {
                    type: string;
                };
                resetPasswordToken: {
                    type: string;
                };
                resetPasswordExpiration: {
                    type: string;
                };
                loginAttempts: {
                    type: string;
                };
                lockUntil: {
                    type: string;
                };
            };
            required: never[];
        };
    };
    additionalProperties: boolean;
};
export declare const options: {
    unreachableDefinitions: boolean;
};
