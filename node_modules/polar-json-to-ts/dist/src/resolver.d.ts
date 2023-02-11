import $RefParser = require('@bcherny/json-schema-ref-parser');
import { JSONSchema } from './types/JSONSchema';
export type DereferencedPaths = WeakMap<$RefParser.JSONSchemaObject, string>;
export declare function dereference(schema: JSONSchema, { cwd, $refOptions }: {
    cwd: string;
    $refOptions: $RefParser.Options;
}): Promise<{
    dereferencedPaths: DereferencedPaths;
    dereferencedSchema: JSONSchema;
}>;
