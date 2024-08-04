/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteJobGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type DeleteJobRequest = {
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
export const DeleteJobGlobals$inboundSchema: z.ZodType<DeleteJobGlobals, z.ZodTypeDef, unknown> =
    z.object({
        workspaceId: z.string().optional(),
    });

/** @internal */
export type DeleteJobGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const DeleteJobGlobals$outboundSchema: z.ZodType<
    DeleteJobGlobals$Outbound,
    z.ZodTypeDef,
    DeleteJobGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteJobGlobals$ {
    /** @deprecated use `DeleteJobGlobals$inboundSchema` instead. */
    export const inboundSchema = DeleteJobGlobals$inboundSchema;
    /** @deprecated use `DeleteJobGlobals$outboundSchema` instead. */
    export const outboundSchema = DeleteJobGlobals$outboundSchema;
    /** @deprecated use `DeleteJobGlobals$Outbound` instead. */
    export type Outbound = DeleteJobGlobals$Outbound;
}

/** @internal */
export const DeleteJobRequest$inboundSchema: z.ZodType<DeleteJobRequest, z.ZodTypeDef, unknown> =
    z.object({
        projectName: z.string(),
        jobId: z.string(),
    });

/** @internal */
export type DeleteJobRequest$Outbound = {
    projectName: string;
    jobId: string;
};

/** @internal */
export const DeleteJobRequest$outboundSchema: z.ZodType<
    DeleteJobRequest$Outbound,
    z.ZodTypeDef,
    DeleteJobRequest
> = z.object({
    projectName: z.string(),
    jobId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteJobRequest$ {
    /** @deprecated use `DeleteJobRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteJobRequest$inboundSchema;
    /** @deprecated use `DeleteJobRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteJobRequest$outboundSchema;
    /** @deprecated use `DeleteJobRequest$Outbound` instead. */
    export type Outbound = DeleteJobRequest$Outbound;
}
