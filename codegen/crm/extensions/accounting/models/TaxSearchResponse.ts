/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot's Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Tax } from './Tax';
import { HttpFile } from '../http/http';

/**
* A response to a search for taxes.
*/
export class TaxSearchResponse {
    /**
    * Designates if the response is a success ('OK') or failure ('ERR').
    */
    'result'?: TaxSearchResponseResultEnum;
    /**
    * The list of taxes that matched the search criteria
    */
    'taxes': Array<Tax>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "@result",
            "type": "TaxSearchResponseResultEnum",
            "format": ""
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<Tax>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TaxSearchResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TaxSearchResponseResultEnum = "OK" | "ERR" ;

