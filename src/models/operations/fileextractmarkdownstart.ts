/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractMarkdownStartGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractMarkdownStartGlobals$inboundSchema: z.ZodType<
    FileExtractMarkdownStartGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type FileExtractMarkdownStartGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractMarkdownStartGlobals$outboundSchema: z.ZodType<
    FileExtractMarkdownStartGlobals$Outbound,
    z.ZodTypeDef,
    FileExtractMarkdownStartGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractMarkdownStartGlobals$ {
    /** @deprecated use `FileExtractMarkdownStartGlobals$inboundSchema` instead. */
    export const inboundSchema = FileExtractMarkdownStartGlobals$inboundSchema;
    /** @deprecated use `FileExtractMarkdownStartGlobals$outboundSchema` instead. */
    export const outboundSchema = FileExtractMarkdownStartGlobals$outboundSchema;
    /** @deprecated use `FileExtractMarkdownStartGlobals$Outbound` instead. */
    export type Outbound = FileExtractMarkdownStartGlobals$Outbound;
}
