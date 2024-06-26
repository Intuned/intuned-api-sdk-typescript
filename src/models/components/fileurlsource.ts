/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Type of file source
 */
export const FileUrlSourceType = {
    Url: "url",
} as const;
/**
 * Type of file source
 */
export type FileUrlSourceType = ClosedEnum<typeof FileUrlSourceType>;

/**
 * URL file source.
 */
export type FileUrlSource = {
    /**
     * Type of file source
     */
    type: FileUrlSourceType;
    /**
     * URL to the file
     */
    data: string;
};

/** @internal */
export namespace FileUrlSourceType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof FileUrlSourceType> =
        z.nativeEnum(FileUrlSourceType);
    export const outboundSchema: z.ZodNativeEnum<typeof FileUrlSourceType> = inboundSchema;
}

/** @internal */
export namespace FileUrlSource$ {
    export const inboundSchema: z.ZodType<FileUrlSource, z.ZodTypeDef, unknown> = z.object({
        type: FileUrlSourceType$.inboundSchema,
        data: z.string(),
    });

    export type Outbound = {
        type: string;
        data: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileUrlSource> = z.object({
        type: FileUrlSourceType$.outboundSchema,
        data: z.string(),
    });
}
