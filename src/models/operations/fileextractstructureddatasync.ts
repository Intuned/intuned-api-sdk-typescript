/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractStructuredDataSyncGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractStructuredDataSyncGlobals$inboundSchema: z.ZodType<
    FileExtractStructuredDataSyncGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type FileExtractStructuredDataSyncGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractStructuredDataSyncGlobals$outboundSchema: z.ZodType<
    FileExtractStructuredDataSyncGlobals$Outbound,
    z.ZodTypeDef,
    FileExtractStructuredDataSyncGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractStructuredDataSyncGlobals$ {
    /** @deprecated use `FileExtractStructuredDataSyncGlobals$inboundSchema` instead. */
    export const inboundSchema = FileExtractStructuredDataSyncGlobals$inboundSchema;
    /** @deprecated use `FileExtractStructuredDataSyncGlobals$outboundSchema` instead. */
    export const outboundSchema = FileExtractStructuredDataSyncGlobals$outboundSchema;
    /** @deprecated use `FileExtractStructuredDataSyncGlobals$Outbound` instead. */
    export type Outbound = FileExtractStructuredDataSyncGlobals$Outbound;
}
