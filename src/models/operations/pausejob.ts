/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PauseJobGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type PauseJobRequest = {
    /**
     * Your project name. It is the name you provide when creating a project. Keep in mind that if you change your project name, you have to change the URIs to match it.
     */
    projectName: string;
    /**
     * Your job ID. It is the ID of the job you provide when creating it.
     */
    jobId: string;
};

/** @internal */
export namespace PauseJobGlobals$ {
    export const inboundSchema: z.ZodType<PauseJobGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string(),
    });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PauseJobGlobals> = z.object({
        workspaceId: z.string(),
    });
}

/** @internal */
export namespace PauseJobRequest$ {
    export const inboundSchema: z.ZodType<PauseJobRequest, z.ZodTypeDef, unknown> = z.object({
        projectName: z.string(),
        jobId: z.string(),
    });

    export type Outbound = {
        projectName: string;
        jobId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PauseJobRequest> = z.object({
        projectName: z.string(),
        jobId: z.string(),
    });
}
