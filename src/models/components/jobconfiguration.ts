/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
 */
export enum RunMode {
    OrderIrrelevant = "Order-Irrelevant",
}

/**
 * The retry policy of the job. Configure how many retries and the delay between them for each payload. The delay is calculated as `max(initialInterval * (backoffCoefficient ^ [i]), maximumInterval)`, where `i` is the current retry iteration.
 */
export type JobConfigurationRetry = {
    /**
     * The maximum number of attempts to retry the API execution if it fails.
     */
    maximumAttempts: number;
    /**
     * The exponential backoff coefficient used in calculating the interval between retries.
     */
    backoffCoefficient?: number | undefined;
    /**
     * The first interval between retries.
     */
    initialInterval?: string | undefined;
    /**
     * The maximum interval between retries. This value will be used if the calculated interval is larger than this.
     */
    maximumInterval?: string | undefined;
};

/**
 * The configuration of the job. Configures the retry policy and maximum concurrent requests.
 */
export type JobConfiguration = {
    /**
     * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
     */
    runMode: RunMode;
    /**
     * The retry policy of the job. Configure how many retries and the delay between them for each payload. The delay is calculated as `max(initialInterval * (backoffCoefficient ^ [i]), maximumInterval)`, where `i` is the current retry iteration.
     */
    retry?: JobConfigurationRetry | undefined;
    /**
     * The batch size of payloads to execute. This does not guarantee that the payloads will be executed at the same time.
     */
    maxConcurrentRequests?: number | undefined;
};

/** @internal */
export namespace RunMode$ {
    export const inboundSchema = z.nativeEnum(RunMode);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace JobConfigurationRetry$ {
    export const inboundSchema: z.ZodType<JobConfigurationRetry, z.ZodTypeDef, unknown> = z.object({
        maximumAttempts: z.number(),
        backoffCoefficient: z.number().default(1),
        initialInterval: z.string().default("1s"),
        maximumInterval: z.string().optional(),
    });

    export type Outbound = {
        maximumAttempts: number;
        backoffCoefficient: number;
        initialInterval: string;
        maximumInterval?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobConfigurationRetry> =
        z.object({
            maximumAttempts: z.number(),
            backoffCoefficient: z.number().default(1),
            initialInterval: z.string().default("1s"),
            maximumInterval: z.string().optional(),
        });
}

/** @internal */
export namespace JobConfiguration$ {
    export const inboundSchema: z.ZodType<JobConfiguration, z.ZodTypeDef, unknown> = z.object({
        runMode: RunMode$.inboundSchema,
        retry: z.lazy(() => JobConfigurationRetry$.inboundSchema).optional(),
        maxConcurrentRequests: z.number().optional(),
    });

    export type Outbound = {
        runMode: string;
        retry?: JobConfigurationRetry$.Outbound | undefined;
        maxConcurrentRequests?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobConfiguration> = z.object({
        runMode: RunMode$.outboundSchema,
        retry: z.lazy(() => JobConfigurationRetry$.outboundSchema).optional(),
        maxConcurrentRequests: z.number().optional(),
    });
}
