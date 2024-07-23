/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteQueueItemGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type DeleteQueueItemRequest = {
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
export const DeleteQueueItemGlobals$inboundSchema: z.ZodType<
    DeleteQueueItemGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type DeleteQueueItemGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const DeleteQueueItemGlobals$outboundSchema: z.ZodType<
    DeleteQueueItemGlobals$Outbound,
    z.ZodTypeDef,
    DeleteQueueItemGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteQueueItemGlobals$ {
    /** @deprecated use `DeleteQueueItemGlobals$inboundSchema` instead. */
    export const inboundSchema = DeleteQueueItemGlobals$inboundSchema;
    /** @deprecated use `DeleteQueueItemGlobals$outboundSchema` instead. */
    export const outboundSchema = DeleteQueueItemGlobals$outboundSchema;
    /** @deprecated use `DeleteQueueItemGlobals$Outbound` instead. */
    export type Outbound = DeleteQueueItemGlobals$Outbound;
}

/** @internal */
export const DeleteQueueItemRequest$inboundSchema: z.ZodType<
    DeleteQueueItemRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectName: z.string(),
    queueId: z.string(),
    itemRunId: z.string(),
});

/** @internal */
export type DeleteQueueItemRequest$Outbound = {
    projectName: string;
    queueId: string;
    itemRunId: string;
};

/** @internal */
export const DeleteQueueItemRequest$outboundSchema: z.ZodType<
    DeleteQueueItemRequest$Outbound,
    z.ZodTypeDef,
    DeleteQueueItemRequest
> = z.object({
    projectName: z.string(),
    queueId: z.string(),
    itemRunId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteQueueItemRequest$ {
    /** @deprecated use `DeleteQueueItemRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteQueueItemRequest$inboundSchema;
    /** @deprecated use `DeleteQueueItemRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteQueueItemRequest$outboundSchema;
    /** @deprecated use `DeleteQueueItemRequest$Outbound` instead. */
    export type Outbound = DeleteQueueItemRequest$Outbound;
}
