/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TriggerJobGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type TriggerJobRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Your job ID. It is the ID of the job you provide when creating it.
     */
    jobId: string;
};

/** @internal */
export const TriggerJobGlobals$inboundSchema: z.ZodType<TriggerJobGlobals, z.ZodTypeDef, unknown> =
    z.object({
        workspaceId: z.string().optional(),
    });

/** @internal */
export type TriggerJobGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const TriggerJobGlobals$outboundSchema: z.ZodType<
    TriggerJobGlobals$Outbound,
    z.ZodTypeDef,
    TriggerJobGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerJobGlobals$ {
    /** @deprecated use `TriggerJobGlobals$inboundSchema` instead. */
    export const inboundSchema = TriggerJobGlobals$inboundSchema;
    /** @deprecated use `TriggerJobGlobals$outboundSchema` instead. */
    export const outboundSchema = TriggerJobGlobals$outboundSchema;
    /** @deprecated use `TriggerJobGlobals$Outbound` instead. */
    export type Outbound = TriggerJobGlobals$Outbound;
}

/** @internal */
export const TriggerJobRequest$inboundSchema: z.ZodType<TriggerJobRequest, z.ZodTypeDef, unknown> =
    z.object({
        projectName: z.string(),
        jobId: z.string(),
    });

/** @internal */
export type TriggerJobRequest$Outbound = {
    projectName: string;
    jobId: string;
};

/** @internal */
export const TriggerJobRequest$outboundSchema: z.ZodType<
    TriggerJobRequest$Outbound,
    z.ZodTypeDef,
    TriggerJobRequest
> = z.object({
    projectName: z.string(),
    jobId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerJobRequest$ {
    /** @deprecated use `TriggerJobRequest$inboundSchema` instead. */
    export const inboundSchema = TriggerJobRequest$inboundSchema;
    /** @deprecated use `TriggerJobRequest$outboundSchema` instead. */
    export const outboundSchema = TriggerJobRequest$outboundSchema;
    /** @deprecated use `TriggerJobRequest$Outbound` instead. */
    export type Outbound = TriggerJobRequest$Outbound;
}
