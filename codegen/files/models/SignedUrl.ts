/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SignedUrl {
    /**
    * Timestamp of when the URL will no longer grant access to the file.
    */
    'expiresAt': Date;
    /**
    * Signed URL with access to the specified file. Anyone with this URL will be able to access the file until it expires.
    */
    'url': string;
    /**
    * Name of the requested file.
    */
    'name': string;
    /**
    * Extension of the requested file.
    */
    'extension': string;
    /**
    * Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.
    */
    'type': string;
    /**
    * Size in bytes of the requested file.
    */
    'size': number;
    /**
    * For image and video files. The height of the file.
    */
    'height'?: number;
    /**
    * For image and video files. The width of the file.
    */
    'width'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "url",
            "baseName": "url",
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
            "name": "extension",
            "baseName": "extension",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SignedUrl.attributeTypeMap;
    }

    public constructor() {
    }
}

