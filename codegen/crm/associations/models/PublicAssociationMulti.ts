/**
 * Associations
 * Associations define the relationships between objects in HubSpot. These endpoints allow you to create, read, and remove associations.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AssociatedId } from './AssociatedId';
import { PublicObjectId } from './PublicObjectId';
import { HttpFile } from '../http/http';

export class PublicAssociationMulti {
    'from': PublicObjectId;
    /**
    * The IDs of objects that are associated with the object identified by the ID in 'from'.
    */
    'to': Array<AssociatedId>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "PublicObjectId",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<AssociatedId>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociationMulti.attributeTypeMap;
    }

    public constructor() {
    }
}

