/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetQueueGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type GetQueueRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Your queue ID. It is the ID of the queue you provided when creating it.
     */
    queueId: string;
};

/** @internal */
export const GetQueueGlobals$inboundSchema: z.ZodType<GetQueueGlobals, z.ZodTypeDef, unknown> =
    z.object({
        workspaceId: z.string().optional(),
    });

/** @internal */
export type GetQueueGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const GetQueueGlobals$outboundSchema: z.ZodType<
    GetQueueGlobals$Outbound,
    z.ZodTypeDef,
    GetQueueGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetQueueGlobals$ {
    /** @deprecated use `GetQueueGlobals$inboundSchema` instead. */
    export const inboundSchema = GetQueueGlobals$inboundSchema;
    /** @deprecated use `GetQueueGlobals$outboundSchema` instead. */
    export const outboundSchema = GetQueueGlobals$outboundSchema;
    /** @deprecated use `GetQueueGlobals$Outbound` instead. */
    export type Outbound = GetQueueGlobals$Outbound;
}

/** @internal */
export const GetQueueRequest$inboundSchema: z.ZodType<GetQueueRequest, z.ZodTypeDef, unknown> =
    z.object({
        projectName: z.string(),
        queueId: z.string(),
    });

/** @internal */
export type GetQueueRequest$Outbound = {
    projectName: string;
    queueId: string;
};

/** @internal */
export const GetQueueRequest$outboundSchema: z.ZodType<
    GetQueueRequest$Outbound,
    z.ZodTypeDef,
    GetQueueRequest
> = z.object({
    projectName: z.string(),
    queueId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetQueueRequest$ {
    /** @deprecated use `GetQueueRequest$inboundSchema` instead. */
    export const inboundSchema = GetQueueRequest$inboundSchema;
    /** @deprecated use `GetQueueRequest$outboundSchema` instead. */
    export const outboundSchema = GetQueueRequest$outboundSchema;
    /** @deprecated use `GetQueueRequest$Outbound` instead. */
    export type Outbound = GetQueueRequest$Outbound;
}
