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
export const FileUrlSourceType$inboundSchema: z.ZodNativeEnum<typeof FileUrlSourceType> =
    z.nativeEnum(FileUrlSourceType);

/** @internal */
export const FileUrlSourceType$outboundSchema: z.ZodNativeEnum<typeof FileUrlSourceType> =
    FileUrlSourceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileUrlSourceType$ {
    /** @deprecated use `FileUrlSourceType$inboundSchema` instead. */
    export const inboundSchema = FileUrlSourceType$inboundSchema;
    /** @deprecated use `FileUrlSourceType$outboundSchema` instead. */
    export const outboundSchema = FileUrlSourceType$outboundSchema;
}

/** @internal */
export const FileUrlSource$inboundSchema: z.ZodType<FileUrlSource, z.ZodTypeDef, unknown> =
    z.object({
        type: FileUrlSourceType$inboundSchema,
        data: z.string(),
    });

/** @internal */
export type FileUrlSource$Outbound = {
    type: string;
    data: string;
};

/** @internal */
export const FileUrlSource$outboundSchema: z.ZodType<
    FileUrlSource$Outbound,
    z.ZodTypeDef,
    FileUrlSource
> = z.object({
    type: FileUrlSourceType$outboundSchema,
    data: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileUrlSource$ {
    /** @deprecated use `FileUrlSource$inboundSchema` instead. */
    export const inboundSchema = FileUrlSource$inboundSchema;
    /** @deprecated use `FileUrlSource$outboundSchema` instead. */
    export const outboundSchema = FileUrlSource$outboundSchema;
    /** @deprecated use `FileUrlSource$Outbound` instead. */
    export type Outbound = FileUrlSource$Outbound;
}
