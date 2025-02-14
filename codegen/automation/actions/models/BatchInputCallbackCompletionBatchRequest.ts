/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CallbackCompletionBatchRequest } from '../models/CallbackCompletionBatchRequest';

export class BatchInputCallbackCompletionBatchRequest {
    'inputs': Array<CallbackCompletionBatchRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<CallbackCompletionBatchRequest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputCallbackCompletionBatchRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

