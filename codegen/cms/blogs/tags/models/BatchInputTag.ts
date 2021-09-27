/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Tag } from './Tag';
import { HttpFile } from '../http/http';

export class BatchInputTag {
    'inputs': Array<Tag>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<Tag>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputTag.attributeTypeMap;
    }

    public constructor() {
    }
}

