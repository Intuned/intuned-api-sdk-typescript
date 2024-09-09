/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Execution status of the item
 */
export const CompletedQueueItemResultStatus = {
  Completed: "completed",
} as const;
/**
 * Execution status of the item
 */
export type CompletedQueueItemResultStatus = ClosedEnum<
  typeof CompletedQueueItemResultStatus
>;

export type CompletedQueueItemResult = {
  /**
   * The run ID of the item
   */
  runId: string;
  /**
   * Execution status of the item
   */
  status: CompletedQueueItemResultStatus;
  /**
   * The result of an API call.
   */
  result?: any | undefined;
  /**
   * The API response status code
   */
  statusCode: number;
};

/** @internal */
export const CompletedQueueItemResultStatus$inboundSchema: z.ZodNativeEnum<
  typeof CompletedQueueItemResultStatus
> = z.nativeEnum(CompletedQueueItemResultStatus);

/** @internal */
export const CompletedQueueItemResultStatus$outboundSchema: z.ZodNativeEnum<
  typeof CompletedQueueItemResultStatus
> = CompletedQueueItemResultStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletedQueueItemResultStatus$ {
  /** @deprecated use `CompletedQueueItemResultStatus$inboundSchema` instead. */
  export const inboundSchema = CompletedQueueItemResultStatus$inboundSchema;
  /** @deprecated use `CompletedQueueItemResultStatus$outboundSchema` instead. */
  export const outboundSchema = CompletedQueueItemResultStatus$outboundSchema;
}

/** @internal */
export const CompletedQueueItemResult$inboundSchema: z.ZodType<
  CompletedQueueItemResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  runId: z.string(),
  status: CompletedQueueItemResultStatus$inboundSchema,
  result: z.any().optional(),
  statusCode: z.number(),
});

/** @internal */
export type CompletedQueueItemResult$Outbound = {
  runId: string;
  status: string;
  result?: any | undefined;
  statusCode: number;
};

/** @internal */
export const CompletedQueueItemResult$outboundSchema: z.ZodType<
  CompletedQueueItemResult$Outbound,
  z.ZodTypeDef,
  CompletedQueueItemResult
> = z.object({
  runId: z.string(),
  status: CompletedQueueItemResultStatus$outboundSchema,
  result: z.any().optional(),
  statusCode: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletedQueueItemResult$ {
  /** @deprecated use `CompletedQueueItemResult$inboundSchema` instead. */
  export const inboundSchema = CompletedQueueItemResult$inboundSchema;
  /** @deprecated use `CompletedQueueItemResult$outboundSchema` instead. */
  export const outboundSchema = CompletedQueueItemResult$outboundSchema;
  /** @deprecated use `CompletedQueueItemResult$Outbound` instead. */
  export type Outbound = CompletedQueueItemResult$Outbound;
}
