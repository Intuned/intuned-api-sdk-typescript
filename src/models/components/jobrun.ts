/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The status of the job run.
 */
export const JobRunStatus = {
    Failed: "FAILED",
    Completed: "COMPLETED",
    Pending: "PENDING",
    Terminated: "TERMINATED",
    Paused: "PAUSED",
} as const;
/**
 * The status of the job run.
 */
export type JobRunStatus = ClosedEnum<typeof JobRunStatus>;

/**
 * A summary of the job run. Contains how many payloads are pending, how many finished executing, succeeded and failed.
 */
export type Summary = {
    /**
     * The total amount of payloads that finished execution, regardless of their status.
     */
    apisCount: number;
    /**
     * The amount of payloads that finished execution with a success status.
     */
    successCount: number;
    /**
     * The amount of payloads that finished execution with a failure status.
     */
    failuresCount: number;
    /**
     * The amount of payloads that have started execution but did not finish yet.
     */
    pendingCount?: number | undefined;
};

/**
 * Whether the job run was triggered manually or by the job schedule.
 */
export const JobRunType = {
    Manual: "MANUAL",
    Scheduled: "SCHEDULED",
} as const;
/**
 * Whether the job run was triggered manually or by the job schedule.
 */
export type JobRunType = ClosedEnum<typeof JobRunType>;

/**
 * The details of a job run.
 */
export type JobRun = {
    /**
     * The job run ID.
     */
    id: string;
    /**
     * The project ID of the job.
     */
    projectId: string;
    /**
     * The ID of the job.
     */
    jobId: string;
    /**
     * The timestamp when the job run started executing.
     */
    startTime: Date;
    /**
     * The status of the job run.
     */
    status: JobRunStatus;
    /**
     * A summary of the job run. Contains how many payloads are pending, how many finished executing, succeeded and failed.
     */
    summary?: Summary | null | undefined;
    /**
     * Whether the job run was triggered manually or by the job schedule.
     */
    type: JobRunType;
    /**
     * The workspace ID of the project of the job.
     */
    workspaceId: string;
};

/** @internal */
export const JobRunStatus$inboundSchema: z.ZodNativeEnum<typeof JobRunStatus> =
    z.nativeEnum(JobRunStatus);

/** @internal */
export const JobRunStatus$outboundSchema: z.ZodNativeEnum<typeof JobRunStatus> =
    JobRunStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobRunStatus$ {
    /** @deprecated use `JobRunStatus$inboundSchema` instead. */
    export const inboundSchema = JobRunStatus$inboundSchema;
    /** @deprecated use `JobRunStatus$outboundSchema` instead. */
    export const outboundSchema = JobRunStatus$outboundSchema;
}

/** @internal */
export const Summary$inboundSchema: z.ZodType<Summary, z.ZodTypeDef, unknown> = z
    .object({
        apis_count: z.number(),
        success_count: z.number(),
        failures_count: z.number(),
        pending_count: z.number().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            apis_count: "apisCount",
            success_count: "successCount",
            failures_count: "failuresCount",
            pending_count: "pendingCount",
        });
    });

/** @internal */
export type Summary$Outbound = {
    apis_count: number;
    success_count: number;
    failures_count: number;
    pending_count?: number | undefined;
};

/** @internal */
export const Summary$outboundSchema: z.ZodType<Summary$Outbound, z.ZodTypeDef, Summary> = z
    .object({
        apisCount: z.number(),
        successCount: z.number(),
        failuresCount: z.number(),
        pendingCount: z.number().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            apisCount: "apis_count",
            successCount: "success_count",
            failuresCount: "failures_count",
            pendingCount: "pending_count",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Summary$ {
    /** @deprecated use `Summary$inboundSchema` instead. */
    export const inboundSchema = Summary$inboundSchema;
    /** @deprecated use `Summary$outboundSchema` instead. */
    export const outboundSchema = Summary$outboundSchema;
    /** @deprecated use `Summary$Outbound` instead. */
    export type Outbound = Summary$Outbound;
}

/** @internal */
export const JobRunType$inboundSchema: z.ZodNativeEnum<typeof JobRunType> =
    z.nativeEnum(JobRunType);

/** @internal */
export const JobRunType$outboundSchema: z.ZodNativeEnum<typeof JobRunType> =
    JobRunType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobRunType$ {
    /** @deprecated use `JobRunType$inboundSchema` instead. */
    export const inboundSchema = JobRunType$inboundSchema;
    /** @deprecated use `JobRunType$outboundSchema` instead. */
    export const outboundSchema = JobRunType$outboundSchema;
}

/** @internal */
export const JobRun$inboundSchema: z.ZodType<JobRun, z.ZodTypeDef, unknown> = z
    .object({
        id: z.string(),
        projectId: z.string(),
        jobId: z.string(),
        start_time: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        status: JobRunStatus$inboundSchema,
        summary: z.nullable(z.lazy(() => Summary$inboundSchema)).optional(),
        type: JobRunType$inboundSchema,
        workspace_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            start_time: "startTime",
            workspace_id: "workspaceId",
        });
    });

/** @internal */
export type JobRun$Outbound = {
    id: string;
    projectId: string;
    jobId: string;
    start_time: string;
    status: string;
    summary?: Summary$Outbound | null | undefined;
    type: string;
    workspace_id: string;
};

/** @internal */
export const JobRun$outboundSchema: z.ZodType<JobRun$Outbound, z.ZodTypeDef, JobRun> = z
    .object({
        id: z.string(),
        projectId: z.string(),
        jobId: z.string(),
        startTime: z.date().transform((v) => v.toISOString()),
        status: JobRunStatus$outboundSchema,
        summary: z.nullable(z.lazy(() => Summary$outboundSchema)).optional(),
        type: JobRunType$outboundSchema,
        workspaceId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            startTime: "start_time",
            workspaceId: "workspace_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobRun$ {
    /** @deprecated use `JobRun$inboundSchema` instead. */
    export const inboundSchema = JobRun$inboundSchema;
    /** @deprecated use `JobRun$outboundSchema` instead. */
    export const outboundSchema = JobRun$outboundSchema;
    /** @deprecated use `JobRun$Outbound` instead. */
    export type Outbound = JobRun$Outbound;
}
