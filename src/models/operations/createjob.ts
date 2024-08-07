/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateJobGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type CreateJobRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * create job request
     */
    jobInput: components.JobInput;
};

/** @internal */
export const CreateJobGlobals$inboundSchema: z.ZodType<CreateJobGlobals, z.ZodTypeDef, unknown> =
    z.object({
        workspaceId: z.string().optional(),
    });

/** @internal */
export type CreateJobGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const CreateJobGlobals$outboundSchema: z.ZodType<
    CreateJobGlobals$Outbound,
    z.ZodTypeDef,
    CreateJobGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateJobGlobals$ {
    /** @deprecated use `CreateJobGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateJobGlobals$inboundSchema;
    /** @deprecated use `CreateJobGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateJobGlobals$outboundSchema;
    /** @deprecated use `CreateJobGlobals$Outbound` instead. */
    export type Outbound = CreateJobGlobals$Outbound;
}

/** @internal */
export const CreateJobRequest$inboundSchema: z.ZodType<CreateJobRequest, z.ZodTypeDef, unknown> = z
    .object({
        projectName: z.string(),
        JobInput: components.JobInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            JobInput: "jobInput",
        });
    });

/** @internal */
export type CreateJobRequest$Outbound = {
    projectName: string;
    JobInput: components.JobInput$Outbound;
};

/** @internal */
export const CreateJobRequest$outboundSchema: z.ZodType<
    CreateJobRequest$Outbound,
    z.ZodTypeDef,
    CreateJobRequest
> = z
    .object({
        projectName: z.string(),
        jobInput: components.JobInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            jobInput: "JobInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateJobRequest$ {
    /** @deprecated use `CreateJobRequest$inboundSchema` instead. */
    export const inboundSchema = CreateJobRequest$inboundSchema;
    /** @deprecated use `CreateJobRequest$outboundSchema` instead. */
    export const outboundSchema = CreateJobRequest$outboundSchema;
    /** @deprecated use `CreateJobRequest$Outbound` instead. */
    export type Outbound = CreateJobRequest$Outbound;
}
