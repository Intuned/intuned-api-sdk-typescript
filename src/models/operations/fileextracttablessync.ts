/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractTablesSyncGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractTablesSyncGlobals$inboundSchema: z.ZodType<
    FileExtractTablesSyncGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type FileExtractTablesSyncGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractTablesSyncGlobals$outboundSchema: z.ZodType<
    FileExtractTablesSyncGlobals$Outbound,
    z.ZodTypeDef,
    FileExtractTablesSyncGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractTablesSyncGlobals$ {
    /** @deprecated use `FileExtractTablesSyncGlobals$inboundSchema` instead. */
    export const inboundSchema = FileExtractTablesSyncGlobals$inboundSchema;
    /** @deprecated use `FileExtractTablesSyncGlobals$outboundSchema` instead. */
    export const outboundSchema = FileExtractTablesSyncGlobals$outboundSchema;
    /** @deprecated use `FileExtractTablesSyncGlobals$Outbound` instead. */
    export type Outbound = FileExtractTablesSyncGlobals$Outbound;
}
