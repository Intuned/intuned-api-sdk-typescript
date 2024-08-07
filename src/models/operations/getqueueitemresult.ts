/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetQueueItemResultGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type GetQueueItemResultRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Your queue ID. It is the ID of the queue you provided when creating it.
     */
    queueId: string;
    /**
     * Queue item run ID, obtained from the append queue item endpoint response.
     */
    itemRunId: string;
};

/** @internal */
export const GetQueueItemResultGlobals$inboundSchema: z.ZodType<
    GetQueueItemResultGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type GetQueueItemResultGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const GetQueueItemResultGlobals$outboundSchema: z.ZodType<
    GetQueueItemResultGlobals$Outbound,
    z.ZodTypeDef,
    GetQueueItemResultGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetQueueItemResultGlobals$ {
    /** @deprecated use `GetQueueItemResultGlobals$inboundSchema` instead. */
    export const inboundSchema = GetQueueItemResultGlobals$inboundSchema;
    /** @deprecated use `GetQueueItemResultGlobals$outboundSchema` instead. */
    export const outboundSchema = GetQueueItemResultGlobals$outboundSchema;
    /** @deprecated use `GetQueueItemResultGlobals$Outbound` instead. */
    export type Outbound = GetQueueItemResultGlobals$Outbound;
}

/** @internal */
export const GetQueueItemResultRequest$inboundSchema: z.ZodType<
    GetQueueItemResultRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectName: z.string(),
    queueId: z.string(),
    itemRunId: z.string(),
});

/** @internal */
export type GetQueueItemResultRequest$Outbound = {
    projectName: string;
    queueId: string;
    itemRunId: string;
};

/** @internal */
export const GetQueueItemResultRequest$outboundSchema: z.ZodType<
    GetQueueItemResultRequest$Outbound,
    z.ZodTypeDef,
    GetQueueItemResultRequest
> = z.object({
    projectName: z.string(),
    queueId: z.string(),
    itemRunId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetQueueItemResultRequest$ {
    /** @deprecated use `GetQueueItemResultRequest$inboundSchema` instead. */
    export const inboundSchema = GetQueueItemResultRequest$inboundSchema;
    /** @deprecated use `GetQueueItemResultRequest$outboundSchema` instead. */
    export const outboundSchema = GetQueueItemResultRequest$outboundSchema;
    /** @deprecated use `GetQueueItemResultRequest$Outbound` instead. */
    export type Outbound = GetQueueItemResultRequest$Outbound;
}
