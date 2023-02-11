export declare const input: {
    typeName: string;
    description: string;
    definitions: {
        CalculatedColumn: {
            type: string;
            description: string;
            properties: {
                ColumnId: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                ColumnName: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Expression: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        CastColumnTypeOperation: {
            type: string;
            description: string;
            properties: {
                ColumnName: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Format: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                NewColumnType: {
                    $ref: string;
                };
            };
            required: string[];
        };
        ColumnDataType: {
            type: string;
            enum: string[];
        };
        ColumnDescription: {
            type: string;
            description: string;
            properties: {
                Text: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
        };
        ColumnGroup: {
            type: string;
            description: string;
            properties: {
                GeoSpatialColumnGroup: {
                    $ref: string;
                };
            };
        };
        ColumnLevelPermissionRule: {
            type: string;
            properties: {
                ColumnNames: {
                    type: string;
                    items: {
                        type: string;
                    };
                    minItems: number;
                };
                Principals: {
                    type: string;
                    items: {
                        type: string;
                    };
                    maxItems: number;
                    minItems: number;
                };
            };
        };
        ColumnTag: {
            type: string;
            description: string;
            properties: {
                ColumnGeographicRole: {
                    $ref: string;
                };
                ColumnDescription: {
                    $ref: string;
                };
            };
        };
        CreateColumnsOperation: {
            type: string;
            description: string;
            properties: {
                Columns: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
            };
            required: string[];
        };
        CustomSql: {
            type: string;
            description: string;
            properties: {
                DataSourceArn: {
                    type: string;
                    description: string;
                };
                SqlQuery: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Columns: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
                Name: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        DataSetImportMode: {
            type: string;
            enum: string[];
        };
        FieldFolder: {
            type: string;
            properties: {
                Description: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                Columns: {
                    type: string;
                    items: {
                        type: string;
                    };
                    maxItems: number;
                    minItems: number;
                };
            };
        };
        FieldFolderMap: {
            type: string;
            patternProperties: {
                '.+': {
                    $ref: string;
                };
            };
        };
        FileFormat: {
            type: string;
            enum: string[];
        };
        FilterOperation: {
            type: string;
            description: string;
            properties: {
                ConditionExpression: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        GeoSpatialColumnGroup: {
            type: string;
            description: string;
            properties: {
                Columns: {
                    type: string;
                    items: {
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
                CountryCode: {
                    $ref: string;
                };
                Name: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        GeoSpatialCountryCode: {
            type: string;
            enum: string[];
        };
        GeoSpatialDataRole: {
            type: string;
            enum: string[];
        };
        InputColumn: {
            type: string;
            description: string;
            properties: {
                Type: {
                    $ref: string;
                };
                Name: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        InputColumnDataType: {
            type: string;
            enum: string[];
        };
        JoinInstruction: {
            type: string;
            description: string;
            properties: {
                OnClause: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Type: {
                    $ref: string;
                };
                LeftJoinKeyProperties: {
                    $ref: string;
                };
                LeftOperand: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    description: string;
                };
                RightOperand: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    description: string;
                };
                RightJoinKeyProperties: {
                    $ref: string;
                };
            };
            required: string[];
        };
        JoinKeyProperties: {
            type: string;
            properties: {
                UniqueKey: {
                    type: string;
                };
            };
        };
        JoinType: {
            type: string;
            enum: string[];
        };
        LogicalTable: {
            type: string;
            description: string;
            properties: {
                Alias: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                DataTransforms: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
                Source: {
                    $ref: string;
                };
            };
            required: string[];
        };
        LogicalTableMap: {
            type: string;
            maxProperties: number;
            minProperties: number;
            patternProperties: {
                '[0-9a-zA-Z-]*': {
                    $ref: string;
                };
            };
        };
        LogicalTableSource: {
            type: string;
            description: string;
            properties: {
                PhysicalTableId: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    description: string;
                };
                JoinInstruction: {
                    $ref: string;
                };
            };
        };
        OutputColumn: {
            type: string;
            description: string;
            properties: {
                Type: {
                    $ref: string;
                };
                Description: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Name: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
        };
        PhysicalTable: {
            type: string;
            description: string;
            properties: {
                RelationalTable: {
                    $ref: string;
                };
                CustomSql: {
                    $ref: string;
                };
                S3Source: {
                    $ref: string;
                };
            };
        };
        PhysicalTableMap: {
            type: string;
            maxProperties: number;
            minProperties: number;
            patternProperties: {
                '[0-9a-zA-Z-]*': {
                    $ref: string;
                };
            };
        };
        ProjectOperation: {
            type: string;
            description: string;
            properties: {
                ProjectedColumns: {
                    type: string;
                    items: {
                        type: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
            };
            required: string[];
        };
        RelationalTable: {
            type: string;
            description: string;
            properties: {
                DataSourceArn: {
                    type: string;
                    description: string;
                };
                InputColumns: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
                Schema: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Catalog: {
                    type: string;
                    description: string;
                    maxLength: number;
                    minLength: number;
                };
                Name: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        RenameColumnOperation: {
            type: string;
            description: string;
            properties: {
                NewColumnName: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                ColumnName: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        ResourcePermission: {
            type: string;
            description: string;
            properties: {
                Actions: {
                    type: string;
                    items: {
                        type: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
                Principal: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        RowLevelPermissionDataSet: {
            type: string;
            description: string;
            properties: {
                Arn: {
                    type: string;
                    description: string;
                };
                Namespace: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    description: string;
                };
                PermissionPolicy: {
                    $ref: string;
                };
                FormatVersion: {
                    $ref: string;
                };
            };
            required: string[];
        };
        RowLevelPermissionPolicy: {
            type: string;
            enum: string[];
        };
        RowLevelPermissionFormatVersion: {
            type: string;
            enum: string[];
        };
        S3Source: {
            type: string;
            description: string;
            properties: {
                DataSourceArn: {
                    type: string;
                    description: string;
                };
                InputColumns: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
                UploadSettings: {
                    $ref: string;
                };
            };
            required: string[];
        };
        Tag: {
            type: string;
            description: string;
            properties: {
                Value: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Key: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
            required: string[];
        };
        TagColumnOperation: {
            type: string;
            description: string;
            properties: {
                ColumnName: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
                Tags: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    maxItems: number;
                    minItems: number;
                    description: string;
                };
            };
            required: string[];
        };
        TextQualifier: {
            type: string;
            enum: string[];
        };
        TransformOperation: {
            type: string;
            description: string;
            properties: {
                TagColumnOperation: {
                    $ref: string;
                };
                FilterOperation: {
                    $ref: string;
                };
                CastColumnTypeOperation: {
                    $ref: string;
                };
                CreateColumnsOperation: {
                    $ref: string;
                };
                RenameColumnOperation: {
                    $ref: string;
                };
                ProjectOperation: {
                    $ref: string;
                };
            };
        };
        UploadSettings: {
            type: string;
            description: string;
            properties: {
                ContainsHeader: {
                    type: string;
                    description: string;
                };
                TextQualifier: {
                    $ref: string;
                };
                Format: {
                    $ref: string;
                };
                StartFromRow: {
                    type: string;
                    minimum: number;
                    description: string;
                };
                Delimiter: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                    description: string;
                };
            };
        };
        IngestionWaitPolicy: {
            type: string;
            description: string;
            properties: {
                WaitForSpiceIngestion: {
                    type: string;
                    description: string;
                    default: boolean;
                };
                IngestionWaitTimeInHours: {
                    type: string;
                    description: string;
                    minimum: number;
                    maximum: number;
                    default: number;
                };
            };
        };
    };
    properties: {
        Arn: {
            type: string;
            description: string;
        };
        AwsAccountId: {
            type: string;
            maxLength: number;
            minLength: number;
            pattern: string;
        };
        ColumnGroups: {
            type: string;
            items: {
                $ref: string;
            };
            maxItems: number;
            minItems: number;
            description: string;
        };
        ColumnLevelPermissionRules: {
            type: string;
            items: {
                $ref: string;
            };
            minItems: number;
        };
        ConsumedSpiceCapacityInBytes: {
            type: string;
            description: string;
        };
        CreatedTime: {
            type: string;
            description: string;
            format: string;
        };
        DataSetId: {
            type: string;
        };
        FieldFolders: {
            $ref: string;
        };
        ImportMode: {
            $ref: string;
        };
        LastUpdatedTime: {
            type: string;
            description: string;
            format: string;
        };
        LogicalTableMap: {
            $ref: string;
        };
        Name: {
            type: string;
            maxLength: number;
            minLength: number;
            description: string;
        };
        OutputColumns: {
            type: string;
            items: {
                $ref: string;
            };
            description: string;
        };
        Permissions: {
            type: string;
            items: {
                $ref: string;
            };
            maxItems: number;
            minItems: number;
            description: string;
        };
        PhysicalTableMap: {
            $ref: string;
        };
        RowLevelPermissionDataSet: {
            $ref: string;
        };
        Tags: {
            type: string;
            items: {
                $ref: string;
            };
            maxItems: number;
            minItems: number;
            description: string;
        };
        IngestionWaitPolicy: {
            $ref: string;
        };
    };
    readOnlyProperties: string[];
    writeOnlyProperties: string[];
    createOnlyProperties: string[];
    primaryIdentifier: string[];
    additionalProperties: boolean;
    handlers: {
        create: {
            permissions: string[];
        };
        read: {
            permissions: string[];
        };
        update: {
            permissions: string[];
        };
        delete: {
            permissions: string[];
        };
        list: {
            permissions: string[];
        };
    };
};
