/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The retry policy of the job. Configure how many retries and the delay between them for each payload. The delay is calculated as `max(initialInterval * (backoffCoefficient ^ [i]), maximumInterval)`, where `i` is the current retry iteration.
 */
export type JobRetryResponse = {
    /**
     * The maximum number of attempts to retry the API execution if it fails.
     */
    maximumAttempts: number;
    /**
     * The exponential backoff coefficient used in calculating the interval between retries.
     */
    backoffCoefficient?: number | undefined;
    /**
     * The first interval between retries, in milliseconds.
     */
    initialInterval?: number | undefined;
    /**
     * The maximum interval between retries, in milliseconds. This value will be used if the calculated interval is larger than this.
     */
    maximumInterval?: number | undefined;
};

/** @internal */
export const JobRetryResponse$inboundSchema: z.ZodType<JobRetryResponse, z.ZodTypeDef, unknown> =
    z.object({
        maximumAttempts: z.number(),
        backoffCoefficient: z.number().default(1),
        initialInterval: z.number().default(1000),
        maximumInterval: z.number().optional(),
    });

/** @internal */
export type JobRetryResponse$Outbound = {
    maximumAttempts: number;
    backoffCoefficient: number;
    initialInterval: number;
    maximumInterval?: number | undefined;
};

/** @internal */
export const JobRetryResponse$outboundSchema: z.ZodType<
    JobRetryResponse$Outbound,
    z.ZodTypeDef,
    JobRetryResponse
> = z.object({
    maximumAttempts: z.number(),
    backoffCoefficient: z.number().default(1),
    initialInterval: z.number().default(1000),
    maximumInterval: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobRetryResponse$ {
    /** @deprecated use `JobRetryResponse$inboundSchema` instead. */
    export const inboundSchema = JobRetryResponse$inboundSchema;
    /** @deprecated use `JobRetryResponse$outboundSchema` instead. */
    export const outboundSchema = JobRetryResponse$outboundSchema;
    /** @deprecated use `JobRetryResponse$Outbound` instead. */
    export type Outbound = JobRetryResponse$Outbound;
}
