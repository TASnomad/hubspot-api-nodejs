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

import { CreateInvoiceSubFeatures } from './CreateInvoiceSubFeatures';
import { HttpFile } from '../http/http';

/**
* Indicates what elements of creating invoices in HubSpot is supported for the integration.
*/
export class CreateInvoiceFeature {
    /**
    * Indicates if creating invoices in HubSpot is supported for the integration.
    */
    'enabled': boolean;
    'subFeatures': CreateInvoiceSubFeatures;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subFeatures",
            "baseName": "subFeatures",
            "type": "CreateInvoiceSubFeatures",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateInvoiceFeature.attributeTypeMap;
    }

    public constructor() {
    }
}

