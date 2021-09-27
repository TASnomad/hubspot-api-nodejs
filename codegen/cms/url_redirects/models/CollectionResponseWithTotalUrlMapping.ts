/**
 * URL redirects
 * URL redirect operations
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Paging } from './Paging';
import { UrlMapping } from './UrlMapping';
import { HttpFile } from '../http/http';

export class CollectionResponseWithTotalUrlMapping {
    /**
    * The number of available results.
    */
    'total': number;
    /**
    * Matched URLs.
    */
    'results': Array<UrlMapping>;
    'paging'?: Paging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<UrlMapping>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseWithTotalUrlMapping.attributeTypeMap;
    }

    public constructor() {
    }
}

