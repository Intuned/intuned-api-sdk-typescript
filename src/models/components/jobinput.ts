/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AuthSession,
    AuthSession$inboundSchema,
    AuthSession$Outbound,
    AuthSession$outboundSchema,
} from "./authsession.js";
import {
    JobConfiguration,
    JobConfiguration$inboundSchema,
    JobConfiguration$Outbound,
    JobConfiguration$outboundSchema,
} from "./jobconfiguration.js";
import {
    JobPayload,
    JobPayload$inboundSchema,
    JobPayload$Outbound,
    JobPayload$outboundSchema,
} from "./jobpayload.js";
import {
    JobSchedule,
    JobSchedule$inboundSchema,
    JobSchedule$Outbound,
    JobSchedule$outboundSchema,
} from "./jobschedule.js";
import {
    JobSink,
    JobSink$inboundSchema,
    JobSink$Outbound,
    JobSink$outboundSchema,
} from "./jobsink.js";
import * as z from "zod";

/**
 * Create job input
 */
export type JobInput = {
    /**
     * The ID of the job. Has to be a valid URL slug.
     */
    id: string;
    /**
     * A sink to send the results to. Can be a webhook or Amazon S3 bucket.
     */
    sink?: JobSink | null | undefined;
    /**
     * A list of the initial payloads of the job.
     */
    payload: Array<JobPayload>;
    /**
     * Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time.
     */
    schedule?: JobSchedule | undefined;
    /**
     * Auth session configurations
     */
    authSession?: AuthSession | undefined;
    /**
     * The configuration of the job. Configures the retry policy and maximum concurrent requests.
     */
    configuration: JobConfiguration;
};

/** @internal */
export const JobInput$inboundSchema: z.ZodType<JobInput, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    sink: z.nullable(JobSink$inboundSchema).optional(),
    payload: z.array(JobPayload$inboundSchema),
    schedule: JobSchedule$inboundSchema.optional(),
    authSession: AuthSession$inboundSchema.optional(),
    configuration: JobConfiguration$inboundSchema,
});

/** @internal */
export type JobInput$Outbound = {
    id: string;
    sink?: JobSink$Outbound | null | undefined;
    payload: Array<JobPayload$Outbound>;
    schedule?: JobSchedule$Outbound | undefined;
    authSession?: AuthSession$Outbound | undefined;
    configuration: JobConfiguration$Outbound;
};

/** @internal */
export const JobInput$outboundSchema: z.ZodType<JobInput$Outbound, z.ZodTypeDef, JobInput> =
    z.object({
        id: z.string(),
        sink: z.nullable(JobSink$outboundSchema).optional(),
        payload: z.array(JobPayload$outboundSchema),
        schedule: JobSchedule$outboundSchema.optional(),
        authSession: AuthSession$outboundSchema.optional(),
        configuration: JobConfiguration$outboundSchema,
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobInput$ {
    /** @deprecated use `JobInput$inboundSchema` instead. */
    export const inboundSchema = JobInput$inboundSchema;
    /** @deprecated use `JobInput$outboundSchema` instead. */
    export const outboundSchema = JobInput$outboundSchema;
    /** @deprecated use `JobInput$Outbound` instead. */
    export type Outbound = JobInput$Outbound;
}
