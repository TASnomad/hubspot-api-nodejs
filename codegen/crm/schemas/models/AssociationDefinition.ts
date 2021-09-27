/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object's type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Defines an association between two object types.
*/
export class AssociationDefinition {
    /**
    * ID of the primary object type to link from.
    */
    'fromObjectTypeId': string;
    /**
    * ID of the target object type ID to link to.
    */
    'toObjectTypeId': string;
    /**
    * A unique name for this association.
    */
    'name'?: string;
    /**
    * A unique ID for this association.
    */
    'id': string;
    /**
    * When the association was defined.
    */
    'createdAt'?: Date;
    /**
    * When the association was last updated.
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fromObjectTypeId",
            "baseName": "fromObjectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "toObjectTypeId",
            "baseName": "toObjectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return AssociationDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

