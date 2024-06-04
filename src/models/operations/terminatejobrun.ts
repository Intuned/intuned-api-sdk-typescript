/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type TerminateJobRunGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
};

export type TerminateJobRunRequest = {
    /**
     * Project name
     */
    projectName: string;
    /**
     * Job ID
     */
    jobId: string;
    /**
     * Job run ID
     */
    runId: string;
};

export type TerminateJobRunResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully terminated job run
     */
    terminateJobRun?: components.TerminateJobRun | undefined;
};

/** @internal */
export namespace TerminateJobRunGlobals$ {
    export const inboundSchema: z.ZodType<TerminateJobRunGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
            };
        });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunGlobals> = z
        .object({
            workspaceId: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
            };
        });
}

/** @internal */
export namespace TerminateJobRunRequest$ {
    export const inboundSchema: z.ZodType<TerminateJobRunRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            jobId: z.string(),
            runId: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
                jobId: v.jobId,
                runId: v.runId,
            };
        });

    export type Outbound = {
        projectName: string;
        jobId: string;
        runId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunRequest> = z
        .object({
            projectName: z.string(),
            jobId: z.string(),
            runId: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
                jobId: v.jobId,
                runId: v.runId,
            };
        });
}

/** @internal */
export namespace TerminateJobRunResponse$ {
    export const inboundSchema: z.ZodType<TerminateJobRunResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            TerminateJobRun: components.TerminateJobRun$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.TerminateJobRun === undefined
                    ? null
                    : { terminateJobRun: v.TerminateJobRun }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        TerminateJobRun?: components.TerminateJobRun$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            terminateJobRun: components.TerminateJobRun$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.terminateJobRun === undefined
                    ? null
                    : { TerminateJobRun: v.terminateJobRun }),
            };
        });
}
