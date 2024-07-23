/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractStructuredDataStartGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractStructuredDataStartGlobals$inboundSchema: z.ZodType<
    FileExtractStructuredDataStartGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type FileExtractStructuredDataStartGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractStructuredDataStartGlobals$outboundSchema: z.ZodType<
    FileExtractStructuredDataStartGlobals$Outbound,
    z.ZodTypeDef,
    FileExtractStructuredDataStartGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractStructuredDataStartGlobals$ {
    /** @deprecated use `FileExtractStructuredDataStartGlobals$inboundSchema` instead. */
    export const inboundSchema = FileExtractStructuredDataStartGlobals$inboundSchema;
    /** @deprecated use `FileExtractStructuredDataStartGlobals$outboundSchema` instead. */
    export const outboundSchema = FileExtractStructuredDataStartGlobals$outboundSchema;
    /** @deprecated use `FileExtractStructuredDataStartGlobals$Outbound` instead. */
    export type Outbound = FileExtractStructuredDataStartGlobals$Outbound;
}
