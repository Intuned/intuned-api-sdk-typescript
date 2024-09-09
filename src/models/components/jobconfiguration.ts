/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  JobRetry,
  JobRetry$inboundSchema,
  JobRetry$Outbound,
  JobRetry$outboundSchema,
} from "./jobretry.js";

/**
 * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
 */
export const JobConfigurationRunMode = {
  OrderIrrelevant: "Order-Irrelevant",
} as const;
/**
 * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
 */
export type JobConfigurationRunMode = ClosedEnum<
  typeof JobConfigurationRunMode
>;

/**
 * The configuration of the job. Configures the retry policy and maximum concurrent requests.
 */
export type JobConfiguration = {
  /**
   * The run mode of the job. Currently, only `Order-Irrelevant` is supported.
   */
  runMode: JobConfigurationRunMode;
  /**
   * The batch size of payloads to execute. This does not guarantee that the payloads will be executed at the same time.
   */
  maxConcurrentRequests?: number | undefined;
  /**
   * The retry policy of the job. Configure how many retries and the delay between them for each payload. The delay is calculated as `max(initialInterval * (backoffCoefficient ^ [i]), maximumInterval)`, where `i` is the current retry iteration.
   */
  retry?: JobRetry | undefined;
};

/** @internal */
export const JobConfigurationRunMode$inboundSchema: z.ZodNativeEnum<
  typeof JobConfigurationRunMode
> = z.nativeEnum(JobConfigurationRunMode);

/** @internal */
export const JobConfigurationRunMode$outboundSchema: z.ZodNativeEnum<
  typeof JobConfigurationRunMode
> = JobConfigurationRunMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobConfigurationRunMode$ {
  /** @deprecated use `JobConfigurationRunMode$inboundSchema` instead. */
  export const inboundSchema = JobConfigurationRunMode$inboundSchema;
  /** @deprecated use `JobConfigurationRunMode$outboundSchema` instead. */
  export const outboundSchema = JobConfigurationRunMode$outboundSchema;
}

/** @internal */
export const JobConfiguration$inboundSchema: z.ZodType<
  JobConfiguration,
  z.ZodTypeDef,
  unknown
> = z.object({
  runMode: JobConfigurationRunMode$inboundSchema,
  maxConcurrentRequests: z.number().optional(),
  retry: JobRetry$inboundSchema.optional(),
});

/** @internal */
export type JobConfiguration$Outbound = {
  runMode: string;
  maxConcurrentRequests?: number | undefined;
  retry?: JobRetry$Outbound | undefined;
};

/** @internal */
export const JobConfiguration$outboundSchema: z.ZodType<
  JobConfiguration$Outbound,
  z.ZodTypeDef,
  JobConfiguration
> = z.object({
  runMode: JobConfigurationRunMode$outboundSchema,
  maxConcurrentRequests: z.number().optional(),
  retry: JobRetry$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobConfiguration$ {
  /** @deprecated use `JobConfiguration$inboundSchema` instead. */
  export const inboundSchema = JobConfiguration$inboundSchema;
  /** @deprecated use `JobConfiguration$outboundSchema` instead. */
  export const outboundSchema = JobConfiguration$outboundSchema;
  /** @deprecated use `JobConfiguration$Outbound` instead. */
  export type Outbound = JobConfiguration$Outbound;
}
