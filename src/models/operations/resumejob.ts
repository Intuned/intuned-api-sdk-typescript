/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ResumeJobGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type ResumeJobRequest = {
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
export const ResumeJobGlobals$inboundSchema: z.ZodType<ResumeJobGlobals, z.ZodTypeDef, unknown> =
    z.object({
        workspaceId: z.string().optional(),
    });

/** @internal */
export type ResumeJobGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const ResumeJobGlobals$outboundSchema: z.ZodType<
    ResumeJobGlobals$Outbound,
    z.ZodTypeDef,
    ResumeJobGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResumeJobGlobals$ {
    /** @deprecated use `ResumeJobGlobals$inboundSchema` instead. */
    export const inboundSchema = ResumeJobGlobals$inboundSchema;
    /** @deprecated use `ResumeJobGlobals$outboundSchema` instead. */
    export const outboundSchema = ResumeJobGlobals$outboundSchema;
    /** @deprecated use `ResumeJobGlobals$Outbound` instead. */
    export type Outbound = ResumeJobGlobals$Outbound;
}

/** @internal */
export const ResumeJobRequest$inboundSchema: z.ZodType<ResumeJobRequest, z.ZodTypeDef, unknown> =
    z.object({
        projectName: z.string(),
        jobId: z.string(),
    });

/** @internal */
export type ResumeJobRequest$Outbound = {
    projectName: string;
    jobId: string;
};

/** @internal */
export const ResumeJobRequest$outboundSchema: z.ZodType<
    ResumeJobRequest$Outbound,
    z.ZodTypeDef,
    ResumeJobRequest
> = z.object({
    projectName: z.string(),
    jobId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResumeJobRequest$ {
    /** @deprecated use `ResumeJobRequest$inboundSchema` instead. */
    export const inboundSchema = ResumeJobRequest$inboundSchema;
    /** @deprecated use `ResumeJobRequest$outboundSchema` instead. */
    export const outboundSchema = ResumeJobRequest$outboundSchema;
    /** @deprecated use `ResumeJobRequest$Outbound` instead. */
    export type Outbound = ResumeJobRequest$Outbound;
}
