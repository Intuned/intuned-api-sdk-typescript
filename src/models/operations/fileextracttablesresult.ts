/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractTablesResultGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type FileExtractTablesResultRequest = {
    /**
     * The ID for the requested file operation. This is obtained from the start request.
     */
    operationId: string;
};

/** @internal */
export const FileExtractTablesResultGlobals$inboundSchema: z.ZodType<
    FileExtractTablesResultGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type FileExtractTablesResultGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const FileExtractTablesResultGlobals$outboundSchema: z.ZodType<
    FileExtractTablesResultGlobals$Outbound,
    z.ZodTypeDef,
    FileExtractTablesResultGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractTablesResultGlobals$ {
    /** @deprecated use `FileExtractTablesResultGlobals$inboundSchema` instead. */
    export const inboundSchema = FileExtractTablesResultGlobals$inboundSchema;
    /** @deprecated use `FileExtractTablesResultGlobals$outboundSchema` instead. */
    export const outboundSchema = FileExtractTablesResultGlobals$outboundSchema;
    /** @deprecated use `FileExtractTablesResultGlobals$Outbound` instead. */
    export type Outbound = FileExtractTablesResultGlobals$Outbound;
}

/** @internal */
export const FileExtractTablesResultRequest$inboundSchema: z.ZodType<
    FileExtractTablesResultRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    operationId: z.string(),
});

/** @internal */
export type FileExtractTablesResultRequest$Outbound = {
    operationId: string;
};

/** @internal */
export const FileExtractTablesResultRequest$outboundSchema: z.ZodType<
    FileExtractTablesResultRequest$Outbound,
    z.ZodTypeDef,
    FileExtractTablesResultRequest
> = z.object({
    operationId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileExtractTablesResultRequest$ {
    /** @deprecated use `FileExtractTablesResultRequest$inboundSchema` instead. */
    export const inboundSchema = FileExtractTablesResultRequest$inboundSchema;
    /** @deprecated use `FileExtractTablesResultRequest$outboundSchema` instead. */
    export const outboundSchema = FileExtractTablesResultRequest$outboundSchema;
    /** @deprecated use `FileExtractTablesResultRequest$Outbound` instead. */
    export type Outbound = FileExtractTablesResultRequest$Outbound;
}
