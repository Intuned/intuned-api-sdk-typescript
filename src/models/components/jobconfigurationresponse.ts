/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    JobRetryResponse,
    JobRetryResponse$inboundSchema,
    JobRetryResponse$Outbound,
    JobRetryResponse$outboundSchema,
} from "./jobretryresponse.js";
import * as z from "zod";

/**
 * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
 */
export const RunMode = {
    OrderIrrelevant: "Order-Irrelevant",
} as const;
/**
 * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
 */
export type RunMode = ClosedEnum<typeof RunMode>;

/**
 * The configuration of the job. Configures the retry policy and maximum concurrent requests.
 */
export type JobConfigurationResponse = {
    /**
     * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
     */
    runMode: RunMode;
    /**
     * The batch size of payloads to execute. This does not guarantee that the payloads will be executed at the same time.
     */
    maxConcurrentRequests?: number | undefined;
    /**
     * The retry policy of the job. Configure how many retries and the delay between them for each payload. The delay is calculated as `max(initialInterval * (backoffCoefficient ^ [i]), maximumInterval)`, where `i` is the current retry iteration.
     */
    retry?: JobRetryResponse | undefined;
};

/** @internal */
export const RunMode$inboundSchema: z.ZodNativeEnum<typeof RunMode> = z.nativeEnum(RunMode);

/** @internal */
export const RunMode$outboundSchema: z.ZodNativeEnum<typeof RunMode> = RunMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunMode$ {
    /** @deprecated use `RunMode$inboundSchema` instead. */
    export const inboundSchema = RunMode$inboundSchema;
    /** @deprecated use `RunMode$outboundSchema` instead. */
    export const outboundSchema = RunMode$outboundSchema;
}

/** @internal */
export const JobConfigurationResponse$inboundSchema: z.ZodType<
    JobConfigurationResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    runMode: RunMode$inboundSchema,
    maxConcurrentRequests: z.number().optional(),
    retry: JobRetryResponse$inboundSchema.optional(),
});

/** @internal */
export type JobConfigurationResponse$Outbound = {
    runMode: string;
    maxConcurrentRequests?: number | undefined;
    retry?: JobRetryResponse$Outbound | undefined;
};

/** @internal */
export const JobConfigurationResponse$outboundSchema: z.ZodType<
    JobConfigurationResponse$Outbound,
    z.ZodTypeDef,
    JobConfigurationResponse
> = z.object({
    runMode: RunMode$outboundSchema,
    maxConcurrentRequests: z.number().optional(),
    retry: JobRetryResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobConfigurationResponse$ {
    /** @deprecated use `JobConfigurationResponse$inboundSchema` instead. */
    export const inboundSchema = JobConfigurationResponse$inboundSchema;
    /** @deprecated use `JobConfigurationResponse$outboundSchema` instead. */
    export const outboundSchema = JobConfigurationResponse$outboundSchema;
    /** @deprecated use `JobConfigurationResponse$Outbound` instead. */
    export type Outbound = JobConfigurationResponse$Outbound;
}
