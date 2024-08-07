/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractMarkdownResultGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type FileExtractMarkdownResultRequest = {
    /**
     * The ID for the requested file operation. This is obtained from the start request.
     */
    operationId: string;
};

/** @internal */
export const FileExtractMarkdownResultGlobals$inboundSchema: z.ZodType<
    FileExtractMarkdownResultGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type FileExtractMarkdownResultGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractMarkdownResultGlobals$outboundSchema: z.ZodType<
    FileExtractMarkdownResultGlobals$Outbound,
    z.ZodTypeDef,
    FileExtractMarkdownResultGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractMarkdownResultGlobals$ {
    /** @deprecated use `FileExtractMarkdownResultGlobals$inboundSchema` instead. */
    export const inboundSchema = FileExtractMarkdownResultGlobals$inboundSchema;
    /** @deprecated use `FileExtractMarkdownResultGlobals$outboundSchema` instead. */
    export const outboundSchema = FileExtractMarkdownResultGlobals$outboundSchema;
    /** @deprecated use `FileExtractMarkdownResultGlobals$Outbound` instead. */
    export type Outbound = FileExtractMarkdownResultGlobals$Outbound;
}

/** @internal */
export const FileExtractMarkdownResultRequest$inboundSchema: z.ZodType<
    FileExtractMarkdownResultRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    operationId: z.string(),
});

/** @internal */
export type FileExtractMarkdownResultRequest$Outbound = {
    operationId: string;
};

/** @internal */
export const FileExtractMarkdownResultRequest$outboundSchema: z.ZodType<
    FileExtractMarkdownResultRequest$Outbound,
    z.ZodTypeDef,
    FileExtractMarkdownResultRequest
> = z.object({
    operationId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractMarkdownResultRequest$ {
    /** @deprecated use `FileExtractMarkdownResultRequest$inboundSchema` instead. */
    export const inboundSchema = FileExtractMarkdownResultRequest$inboundSchema;
    /** @deprecated use `FileExtractMarkdownResultRequest$outboundSchema` instead. */
    export const outboundSchema = FileExtractMarkdownResultRequest$outboundSchema;
    /** @deprecated use `FileExtractMarkdownResultRequest$Outbound` instead. */
    export type Outbound = FileExtractMarkdownResultRequest$Outbound;
}
