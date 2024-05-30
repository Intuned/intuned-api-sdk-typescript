/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetJobRunsGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
    /**
     * Project name
     */
    projectName: string;
};

export type GetJobRunsRequest = {
    /**
     * Project name
     */
    projectName?: string | undefined;
    /**
     * Job ID
     */
    jobId: string;
};

export type GetJobRunsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Array of job runs
     */
    getJobRuns?: Array<components.JobRun> | undefined;
};

/** @internal */
export namespace GetJobRunsGlobals$ {
    export const inboundSchema: z.ZodType<GetJobRunsGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string(),
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                projectName: v.projectName,
            };
        });

    export type Outbound = {
        workspaceId: string;
        projectName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobRunsGlobals> = z
        .object({
            workspaceId: z.string(),
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                projectName: v.projectName,
            };
        });
}

/** @internal */
export namespace GetJobRunsRequest$ {
    export const inboundSchema: z.ZodType<GetJobRunsRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string().optional(),
            jobId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                jobId: v.jobId,
            };
        });

    export type Outbound = {
        projectName?: string | undefined;
        jobId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobRunsRequest> = z
        .object({
            projectName: z.string().optional(),
            jobId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                jobId: v.jobId,
            };
        });
}

/** @internal */
export namespace GetJobRunsResponse$ {
    export const inboundSchema: z.ZodType<GetJobRunsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            GetJobRuns: z.array(components.JobRun$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.GetJobRuns === undefined ? null : { getJobRuns: v.GetJobRuns }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        GetJobRuns?: Array<components.JobRun$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobRunsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            getJobRuns: z.array(components.JobRun$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.getJobRuns === undefined ? null : { GetJobRuns: v.getJobRuns }),
            };
        });
}
