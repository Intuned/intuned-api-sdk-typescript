/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type TerminateJobRunGlobals = {
    /**
     * Workspace Id.
     */
    workspaceId?: string | undefined;
    /**
     * Project Name.
     */
    projectName?: string | undefined;
};

export type TerminateJobRunRequest = {
    /**
     * Project name
     */
    projectName?: string | undefined;
    /**
     * Job ID
     */
    jobId: string;
    /**
     * Job run ID
     */
    runId: string;
};

export enum TerminateJobRunMessage {
    JobRunTerminated = "Job run terminated",
}

/**
 * Job run terminated
 */
export type TerminateJobRunResponseBody = {
    message?: TerminateJobRunMessage | undefined;
};

export type TerminateJobRunResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Job run terminated
     */
    object?: TerminateJobRunResponseBody | undefined;
};

/** @internal */
export namespace TerminateJobRunGlobals$ {
    export const inboundSchema: z.ZodType<TerminateJobRunGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string().optional(),
            projectName: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.workspaceId === undefined ? null : { workspaceId: v.workspaceId }),
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
            };
        });

    export type Outbound = {
        workspaceId?: string | undefined;
        projectName?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunGlobals> = z
        .object({
            workspaceId: z.string().optional(),
            projectName: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.workspaceId === undefined ? null : { workspaceId: v.workspaceId }),
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
            };
        });
}

/** @internal */
export namespace TerminateJobRunRequest$ {
    export const inboundSchema: z.ZodType<TerminateJobRunRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string().optional(),
            jobId: z.string(),
            runId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                jobId: v.jobId,
                runId: v.runId,
            };
        });

    export type Outbound = {
        projectName?: string | undefined;
        jobId: string;
        runId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunRequest> = z
        .object({
            projectName: z.string().optional(),
            jobId: z.string(),
            runId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                jobId: v.jobId,
                runId: v.runId,
            };
        });
}

/** @internal */
export namespace TerminateJobRunMessage$ {
    export const inboundSchema = z.nativeEnum(TerminateJobRunMessage);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace TerminateJobRunResponseBody$ {
    export const inboundSchema: z.ZodType<TerminateJobRunResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            message: TerminateJobRunMessage$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });

    export type Outbound = {
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunResponseBody> = z
        .object({
            message: TerminateJobRunMessage$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });
}

/** @internal */
export namespace TerminateJobRunResponse$ {
    export const inboundSchema: z.ZodType<TerminateJobRunResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => TerminateJobRunResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: TerminateJobRunResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TerminateJobRunResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => TerminateJobRunResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
