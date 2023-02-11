export declare const options: {
    format: boolean;
};
export declare const input: {
    id: string;
    $schema: string;
    title: string;
    description: string;
    type: string;
    properties: {
        $schema: {
            type: string;
            description: string;
        };
        metadata: {
            type: string;
            description: string;
            additionalProperties: boolean;
        };
        apiProfile: {
            type: string;
            enum: string[];
            description: string;
        };
        contentVersion: {
            type: string;
            pattern: string;
            description: string;
        };
        variables: {
            type: string;
            description: string;
        };
        parameters: {
            type: string;
            description: string;
            additionalProperties: {
                $ref: string;
            };
        };
        functions: {
            type: string;
            items: {
                $ref: string;
            };
            description: string;
        };
        resources: {
            description: string;
            oneOf: {
                $ref: string;
            }[];
        };
        outputs: {
            type: string;
            description: string;
            additionalProperties: {
                $ref: string;
            };
        };
    };
    additionalProperties: boolean;
    required: string[];
    definitions: {
        ARMResourceBase: {
            type: string;
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                type: {
                    type: string;
                    description: string;
                };
                condition: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                    description: string;
                };
                apiVersion: {
                    type: string;
                    description: string;
                };
                dependsOn: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
            };
            required: string[];
        };
        proxyResourceBase: {
            allOf: ({
                $ref: string;
                properties?: undefined;
            } | {
                properties: {
                    location: {
                        $ref: string;
                        description: string;
                    };
                };
                $ref?: undefined;
            })[];
        };
        resourceBase: {
            allOf: ({
                $ref: string;
                properties?: undefined;
            } | {
                properties: {
                    location: {
                        $ref: string;
                        description: string;
                    };
                    tags: {
                        type: string;
                        description: string;
                    };
                    copy: {
                        $ref: string;
                    };
                    scope: {
                        type: string;
                        description: string;
                    };
                    comments: {
                        type: string;
                    };
                };
                $ref?: undefined;
            })[];
        };
        resourceBaseExternal: {
            $ref: string;
            required: string[];
        };
        resourceSku: {
            type: string;
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                tier: {
                    type: string;
                    description: string;
                };
                size: {
                    type: string;
                    description: string;
                };
                family: {
                    type: string;
                    description: string;
                };
                capacity: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        resourceCopy: {
            type: string;
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                count: {
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                    } | {
                        type: string;
                        $ref?: undefined;
                    })[];
                    description: string;
                };
                mode: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                batchSize: {
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                    } | {
                        type: string;
                        $ref?: undefined;
                    })[];
                    description: string;
                };
            };
        };
        resourceKind: {
            type: string;
            maxLength: number;
            pattern: string;
            description: string;
        };
        resourcePlan: {
            type: string;
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                promotionCode: {
                    type: string;
                    description: string;
                };
                publisher: {
                    type: string;
                    description: string;
                };
                product: {
                    type: string;
                    description: string;
                };
                version: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
            description: string;
        };
        resourceLocations: {
            anyOf: ({
                type: string;
                enum?: undefined;
            } | {
                enum: string[];
                type?: undefined;
            })[];
        };
        functionNamespace: {
            type: string;
            properties: {
                namespace: {
                    type: string;
                    minLength: number;
                    description: string;
                };
                members: {
                    type: string;
                    additionalProperties: {
                        $ref: string;
                    };
                    description: string;
                };
            };
        };
        functionMember: {
            type: string;
            properties: {
                parameters: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    description: string;
                };
                output: {
                    $ref: string;
                    description: string;
                };
            };
        };
        functionParameter: {
            type: string;
            properties: {
                name: {
                    type: string;
                    minLength: number;
                    description: string;
                };
                type: {
                    $ref: string;
                    description: string;
                };
            };
        };
        functionOutput: {
            type: string;
            properties: {
                type: {
                    $ref: string;
                    description: string;
                };
                value: {
                    $ref: string;
                    description: string;
                };
            };
        };
        parameter: {
            type: string;
            properties: {
                type: {
                    $ref: string;
                    description: string;
                };
                defaultValue: {
                    $ref: string;
                    description: string;
                };
                allowedValues: {
                    type: string;
                    description: string;
                };
                metadata: {
                    type: string;
                    description: string;
                };
                minValue: {
                    type: string;
                    description: string;
                };
                maxValue: {
                    type: string;
                    description: string;
                };
                minLength: {
                    type: string;
                    description: string;
                };
                maxLength: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
            description: string;
        };
        output: {
            type: string;
            properties: {
                condition: {
                    oneOf: ({
                        type: string;
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                    description: string;
                };
                type: {
                    $ref: string;
                    description: string;
                };
                value: {
                    $ref: string;
                    description: string;
                };
                copy: {
                    $ref: string;
                    description: string;
                };
            };
            required: string[];
            description: string;
        };
        parameterTypes: {
            enum: string[];
        };
        parameterValueTypes: {
            type: string[];
        };
        keyVaultReference: {
            type: string;
            properties: {
                keyVault: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                            minLength: number;
                        };
                    };
                    required: string[];
                    additionalProperties: boolean;
                };
                secretName: {
                    type: string;
                    minLength: number;
                };
                secretVersion: {
                    type: string;
                    minLength: number;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        outputCopy: {
            type: string;
            properties: {
                count: {
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                    } | {
                        type: string;
                        $ref?: undefined;
                    })[];
                    description: string;
                };
                input: {
                    anyOf: ({
                        type: string[];
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        type?: undefined;
                    })[];
                    description: string;
                };
            };
            required: string[];
            description: string;
        };
        resource: {
            description: string;
            oneOf: {
                allOf: ({
                    $ref: string;
                    oneOf?: undefined;
                } | {
                    oneOf: {
                        $ref: string;
                    }[];
                    $ref?: undefined;
                })[];
            }[];
        };
        resourcesWithSymbolicNames: {
            type: string;
            description: string;
            additionalProperties: {
                $ref: string;
            };
        };
        resourcesWithoutSymbolicNames: {
            type: string;
            description: string;
            items: {
                $ref: string;
            };
        };
    };
};
