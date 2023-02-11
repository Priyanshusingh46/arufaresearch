import { JSONSchema4Type } from 'json-schema';
import { Options } from './';
import { AST } from './types/AST';
import { JSONSchema as LinkedJSONSchema, SchemaType } from './types/JSONSchema';
export type Processed = Map<LinkedJSONSchema, Map<SchemaType, AST>>;
export type UsedNames = Set<string>;
export declare function parse(schema: LinkedJSONSchema | JSONSchema4Type, options: Options, keyName?: string, processed?: Processed, usedNames?: Set<string>): AST;
