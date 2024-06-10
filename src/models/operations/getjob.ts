/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetJobGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type GetJobRequest = {
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
export namespace GetJobGlobals$ {
    export const inboundSchema: z.ZodType<GetJobGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string(),
    });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobGlobals> = z.object({
        workspaceId: z.string(),
    });
}

/** @internal */
export namespace GetJobRequest$ {
    export const inboundSchema: z.ZodType<GetJobRequest, z.ZodTypeDef, unknown> = z.object({
        projectName: z.string(),
        jobId: z.string(),
    });

    export type Outbound = {
        projectName: string;
        jobId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobRequest> = z.object({
        projectName: z.string(),
        jobId: z.string(),
    });
}
