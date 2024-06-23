/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace TriggerJobGlobals$ {
    export const inboundSchema: z.ZodType<TriggerJobGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggerJobGlobals> = z.object({
        workspaceId: z.string().optional(),
    });
}

/** @internal */
export namespace TriggerJobRequest$ {
    export const inboundSchema: z.ZodType<TriggerJobRequest, z.ZodTypeDef, unknown> = z.object({
        projectName: z.string(),
        jobId: z.string(),
    });

    export type Outbound = {
        projectName: string;
        jobId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggerJobRequest> = z.object({
        projectName: z.string(),
        jobId: z.string(),
    });
}
