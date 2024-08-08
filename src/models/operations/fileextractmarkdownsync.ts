/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractMarkdownSyncGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractMarkdownSyncGlobals$inboundSchema: z.ZodType<
    FileExtractMarkdownSyncGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type FileExtractMarkdownSyncGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractMarkdownSyncGlobals$outboundSchema: z.ZodType<
    FileExtractMarkdownSyncGlobals$Outbound,
    z.ZodTypeDef,
    FileExtractMarkdownSyncGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractMarkdownSyncGlobals$ {
    /** @deprecated use `FileExtractMarkdownSyncGlobals$inboundSchema` instead. */
    export const inboundSchema = FileExtractMarkdownSyncGlobals$inboundSchema;
    /** @deprecated use `FileExtractMarkdownSyncGlobals$outboundSchema` instead. */
    export const outboundSchema = FileExtractMarkdownSyncGlobals$outboundSchema;
    /** @deprecated use `FileExtractMarkdownSyncGlobals$Outbound` instead. */
    export type Outbound = FileExtractMarkdownSyncGlobals$Outbound;
}
