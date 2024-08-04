/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteRepeatQueueItemGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type DeleteRepeatQueueItemRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Your queue ID. It is the ID of the queue you provided when creating it.
     */
    queueId: string;
    /**
     * Repeat Item ID
     */
    itemId: string;
};

/** @internal */
export const DeleteRepeatQueueItemGlobals$inboundSchema: z.ZodType<
    DeleteRepeatQueueItemGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type DeleteRepeatQueueItemGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const DeleteRepeatQueueItemGlobals$outboundSchema: z.ZodType<
    DeleteRepeatQueueItemGlobals$Outbound,
    z.ZodTypeDef,
    DeleteRepeatQueueItemGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRepeatQueueItemGlobals$ {
    /** @deprecated use `DeleteRepeatQueueItemGlobals$inboundSchema` instead. */
    export const inboundSchema = DeleteRepeatQueueItemGlobals$inboundSchema;
    /** @deprecated use `DeleteRepeatQueueItemGlobals$outboundSchema` instead. */
    export const outboundSchema = DeleteRepeatQueueItemGlobals$outboundSchema;
    /** @deprecated use `DeleteRepeatQueueItemGlobals$Outbound` instead. */
    export type Outbound = DeleteRepeatQueueItemGlobals$Outbound;
}

/** @internal */
export const DeleteRepeatQueueItemRequest$inboundSchema: z.ZodType<
    DeleteRepeatQueueItemRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectName: z.string(),
    queueId: z.string(),
    itemId: z.string(),
});

/** @internal */
export type DeleteRepeatQueueItemRequest$Outbound = {
    projectName: string;
    queueId: string;
    itemId: string;
};

/** @internal */
export const DeleteRepeatQueueItemRequest$outboundSchema: z.ZodType<
    DeleteRepeatQueueItemRequest$Outbound,
    z.ZodTypeDef,
    DeleteRepeatQueueItemRequest
> = z.object({
    projectName: z.string(),
    queueId: z.string(),
    itemId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRepeatQueueItemRequest$ {
    /** @deprecated use `DeleteRepeatQueueItemRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteRepeatQueueItemRequest$inboundSchema;
    /** @deprecated use `DeleteRepeatQueueItemRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteRepeatQueueItemRequest$outboundSchema;
    /** @deprecated use `DeleteRepeatQueueItemRequest$Outbound` instead. */
    export type Outbound = DeleteRepeatQueueItemRequest$Outbound;
}
