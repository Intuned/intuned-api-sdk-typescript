/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TerminateJobRunGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type TerminateJobRunRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Your job ID. It is the ID of the job you provide when creating it.
     */
    jobId: string;
    /**
     * The job run ID. This can be obtained from the get job runs endpoint.
     */
    runId: string;
};

/** @internal */
export namespace TerminateJobRunGlobals$ {
    export const inboundSchema: z.ZodType<TerminateJobRunGlobals, z.ZodTypeDef, unknown> = z.object(
        {
            workspaceId: z.string().optional(),
        }
    );

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunGlobals> =
        z.object({
            workspaceId: z.string().optional(),
        });
}

/** @internal */
export namespace TerminateJobRunRequest$ {
    export const inboundSchema: z.ZodType<TerminateJobRunRequest, z.ZodTypeDef, unknown> = z.object(
        {
            projectName: z.string(),
            jobId: z.string(),
            runId: z.string(),
        }
    );

    export type Outbound = {
        projectName: string;
        jobId: string;
        runId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunRequest> =
        z.object({
            projectName: z.string(),
            jobId: z.string(),
            runId: z.string(),
        });
}
