/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type PauseJobGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
    /**
     * Project name
     */
    projectName: string;
};

export type PauseJobRequest = {
    /**
     * Project name
     */
    projectName?: string | undefined;
    /**
     * Job ID
     */
    jobId: string;
};

export type PauseJobResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully paused job
     */
    pauseJob?: components.PauseJob | undefined;
};

/** @internal */
export namespace PauseJobGlobals$ {
    export const inboundSchema: z.ZodType<PauseJobGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PauseJobGlobals> = z
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
export namespace PauseJobRequest$ {
    export const inboundSchema: z.ZodType<PauseJobRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PauseJobRequest> = z
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
export namespace PauseJobResponse$ {
    export const inboundSchema: z.ZodType<PauseJobResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            PauseJob: components.PauseJob$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.PauseJob === undefined ? null : { pauseJob: v.PauseJob }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        PauseJob?: components.PauseJob$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PauseJobResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            pauseJob: components.PauseJob$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.pauseJob === undefined ? null : { PauseJob: v.pauseJob }),
            };
        });
}
