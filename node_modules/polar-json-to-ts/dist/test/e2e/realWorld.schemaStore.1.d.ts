export declare const input: {
    $schema: string;
    title: string;
    definitions: {
        person: {
            description: string;
            type: string[];
            required: string[];
            properties: {
                name: {
                    type: string;
                };
                url: {
                    type: string;
                    format: string;
                };
                email: {
                    type: string;
                    format: string;
                };
            };
        };
        dependency: {
            description: string;
            type: string;
            additionalProperties: {
                type: string;
            };
        };
        scriptsInstallAfter: {
            description: string;
            type: string;
        };
        scriptsPublishAfter: {
            description: string;
            type: string;
        };
        scriptsRestart: {
            description: string;
            type: string;
        };
        scriptsStart: {
            description: string;
            type: string;
        };
        scriptsStop: {
            description: string;
            type: string;
        };
        scriptsTest: {
            description: string;
            type: string;
        };
        scriptsUninstallBefore: {
            description: string;
            type: string;
        };
        scriptsVersionBefore: {
            description: string;
            type: string;
        };
        packageExportsEntryPath: {
            type: string[];
            description: string;
            pattern: string;
        };
        packageExportsEntryObject: {
            type: string;
            description: string;
            properties: {
                require: {
                    $ref: string;
                    description: string;
                };
                import: {
                    $ref: string;
                    description: string;
                };
                node: {
                    $ref: string;
                    description: string;
                };
                default: {
                    $ref: string;
                    description: string;
                };
            };
            patternProperties: {
                '^(?![\\.0-9]).': {
                    $ref: string;
                    description: string;
                };
            };
            additionalProperties: boolean;
        };
        packageExportsEntry: {
            oneOf: {
                $ref: string;
            }[];
        };
        packageExportsFallback: {
            type: string;
            description: string;
            items: {
                $ref: string;
            };
        };
        packageExportsEntryOrFallback: {
            oneOf: {
                $ref: string;
            }[];
        };
    };
    type: string;
    patternProperties: {
        '^_': {
            description: string;
            tsType: string;
        };
    };
    properties: {
        name: {
            description: string;
            type: string;
            maxLength: number;
            minLength: number;
            pattern: string;
        };
        version: {
            description: string;
            type: string;
        };
        description: {
            description: string;
            type: string;
        };
        keywords: {
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        homepage: {
            description: string;
            type: string;
        };
        bugs: {
            description: string;
            type: string[];
            properties: {
                url: {
                    type: string;
                    description: string;
                    format: string;
                };
                email: {
                    type: string;
                    description: string;
                    format: string;
                };
            };
        };
        license: {
            type: string;
            description: string;
        };
        licenses: {
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    type: {
                        type: string;
                    };
                    url: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
        author: {
            $ref: string;
        };
        contributors: {
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        maintainers: {
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        files: {
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        main: {
            description: string;
            type: string;
        };
        exports: {
            description: string;
            oneOf: ({
                $ref: string;
                description: string;
                type?: undefined;
                properties?: undefined;
                patternProperties?: undefined;
                additionalProperties?: undefined;
            } | {
                type: string;
                properties: {
                    '.': {
                        $ref: string;
                        description: string;
                    };
                    './': {
                        $ref: string;
                        description: string;
                    };
                };
                patternProperties: {
                    '^\\./': {
                        $ref: string;
                        description: string;
                    };
                };
                additionalProperties: boolean;
                $ref?: undefined;
                description?: undefined;
            })[];
        };
        bin: {
            type: string[];
            additionalProperties: {
                type: string;
            };
        };
        type: {
            description: string;
            type: string;
            enum: string[];
            default: string;
        };
        types: {
            description: string;
            type: string;
        };
        typings: {
            description: string;
            type: string;
        };
        typesVersions: {
            description: string;
            type: string;
            additionalProperties: {
                description: string;
                type: string;
                properties: {
                    '*': {
                        description: string;
                        type: string;
                        items: {
                            type: string;
                            pattern: string;
                        };
                    };
                };
                patternProperties: {
                    '^[^*]+$': {
                        description: string;
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    '^[^*]*\\*[^*]*$': {
                        description: string;
                        type: string;
                        items: {
                            type: string;
                            pattern: string;
                        };
                    };
                };
                additionalProperties: boolean;
            };
        };
        man: {
            type: string[];
            description: string;
            items: {
                type: string;
            };
        };
        directories: {
            type: string;
            properties: {
                bin: {
                    description: string;
                    type: string;
                };
                doc: {
                    description: string;
                    type: string;
                };
                example: {
                    description: string;
                    type: string;
                };
                lib: {
                    description: string;
                    type: string;
                };
                man: {
                    description: string;
                    type: string;
                };
                test: {
                    type: string;
                };
            };
        };
        repository: {
            description: string;
            type: string[];
            properties: {
                type: {
                    type: string;
                };
                url: {
                    type: string;
                };
                directory: {
                    type: string;
                };
            };
        };
        scripts: {
            description: string;
            type: string;
            properties: {
                prepublish: {
                    type: string;
                    description: string;
                };
                prepare: {
                    type: string;
                    description: string;
                };
                prepublishOnly: {
                    type: string;
                    description: string;
                };
                prepack: {
                    type: string;
                    description: string;
                };
                postpack: {
                    type: string;
                    description: string;
                };
                publish: {
                    $ref: string;
                };
                postpublish: {
                    $ref: string;
                };
                preinstall: {
                    type: string;
                    description: string;
                };
                install: {
                    $ref: string;
                };
                postinstall: {
                    $ref: string;
                };
                preuninstall: {
                    $ref: string;
                };
                uninstall: {
                    $ref: string;
                };
                postuninstall: {
                    type: string;
                    description: string;
                };
                preversion: {
                    $ref: string;
                };
                version: {
                    $ref: string;
                };
                postversion: {
                    type: string;
                    description: string;
                };
                pretest: {
                    $ref: string;
                };
                test: {
                    $ref: string;
                };
                posttest: {
                    $ref: string;
                };
                prestop: {
                    $ref: string;
                };
                stop: {
                    $ref: string;
                };
                poststop: {
                    $ref: string;
                };
                prestart: {
                    $ref: string;
                };
                start: {
                    $ref: string;
                };
                poststart: {
                    $ref: string;
                };
                prerestart: {
                    $ref: string;
                };
                restart: {
                    $ref: string;
                };
                postrestart: {
                    $ref: string;
                };
            };
            additionalProperties: {
                type: string;
                tsType: string;
            };
        };
        config: {
            description: string;
            type: string;
            additionalProperties: boolean;
        };
        dependencies: {
            $ref: string;
        };
        devDependencies: {
            $ref: string;
        };
        optionalDependencies: {
            $ref: string;
        };
        peerDependencies: {
            $ref: string;
        };
        peerDependenciesMeta: {
            description: string;
            type: string;
            additionalProperties: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    optional: {
                        description: string;
                        type: string;
                    };
                };
            };
        };
        bundledDependencies: {
            description: string;
            oneOf: ({
                type: string;
                items: {
                    type: string;
                };
                enum?: undefined;
            } | {
                enum: boolean[];
                type?: undefined;
                items?: undefined;
            })[];
        };
        bundleDependencies: {
            description: string;
            oneOf: ({
                type: string;
                items: {
                    type: string;
                };
                enum?: undefined;
            } | {
                enum: boolean[];
                type?: undefined;
                items?: undefined;
            })[];
        };
        resolutions: {
            description: string;
            type: string;
        };
        engines: {
            type: string;
            properties: {
                node: {
                    type: string;
                };
            };
            additionalProperties: {
                type: string;
            };
        };
        engineStrict: {
            type: string;
        };
        os: {
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        cpu: {
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        preferGlobal: {
            type: string;
            description: string;
        };
        private: {
            description: string;
            oneOf: ({
                type: string;
                enum?: undefined;
            } | {
                enum: string[];
                type?: undefined;
            })[];
        };
        publishConfig: {
            type: string;
            properties: {
                access: {
                    type: string;
                    enum: string[];
                };
                tag: {
                    type: string;
                };
                registry: {
                    type: string;
                    format: string;
                };
            };
            additionalProperties: boolean;
        };
        dist: {
            type: string;
            properties: {
                shasum: {
                    type: string;
                };
                tarball: {
                    type: string;
                };
            };
        };
        readme: {
            type: string;
        };
        module: {
            description: string;
            type: string;
        };
        esnext: {
            description: string;
            type: string[];
            properties: {
                main: {
                    type: string;
                };
                browser: {
                    type: string;
                };
            };
            additionalProperties: {
                type: string;
            };
        };
        workspaces: {
            description: string;
            anyOf: ({
                type: string;
                description: string;
                items: {
                    type: string;
                };
                properties?: undefined;
            } | {
                type: string;
                properties: {
                    packages: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                    };
                    nohoist: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                    };
                };
                description?: undefined;
                items?: undefined;
            })[];
        };
        jspm: {
            $ref: string;
        };
    };
    anyOf: ({
        type: string;
        not: {
            required: string[];
        };
        required?: undefined;
    } | {
        type: string;
        not: {
            required: string[];
        };
        required: string[];
    })[];
};
