/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum FileBase64SourceType {
    Base64 = "base64",
}

export type FileBase64Source = {
    type: FileBase64SourceType;
    data: string;
};

/** @internal */
export namespace FileBase64SourceType$ {
    export const inboundSchema = z.nativeEnum(FileBase64SourceType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace FileBase64Source$ {
    export const inboundSchema: z.ZodType<FileBase64Source, z.ZodTypeDef, unknown> = z
        .object({
            type: FileBase64SourceType$.inboundSchema,
            data: z.string(),
        })
        .transform((v) => {
            return {
                type: v.type,
                data: v.data,
            };
        });

    export type Outbound = {
        type: string;
        data: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileBase64Source> = z
        .object({
            type: FileBase64SourceType$.outboundSchema,
            data: z.string(),
        })
        .transform((v) => {
            return {
                type: v.type,
                data: v.data,
            };
        });
}
