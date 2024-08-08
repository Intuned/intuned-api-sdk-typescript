/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The status of the run
 */
export const AsyncRunPendingResponseStatus = {
    Pending: "pending",
} as const;
/**
 * The status of the run
 */
export type AsyncRunPendingResponseStatus = ClosedEnum<typeof AsyncRunPendingResponseStatus>;

/**
 * Pending API run
 */
export type AsyncRunPendingResponse = {
    /**
     * The status of the run
     */
    status: AsyncRunPendingResponseStatus;
    /**
     * run id of the execution
     */
    runId: string;
};

/** @internal */
export const AsyncRunPendingResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof AsyncRunPendingResponseStatus
> = z.nativeEnum(AsyncRunPendingResponseStatus);

/** @internal */
export const AsyncRunPendingResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof AsyncRunPendingResponseStatus
> = AsyncRunPendingResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AsyncRunPendingResponseStatus$ {
    /** @deprecated use `AsyncRunPendingResponseStatus$inboundSchema` instead. */
    export const inboundSchema = AsyncRunPendingResponseStatus$inboundSchema;
    /** @deprecated use `AsyncRunPendingResponseStatus$outboundSchema` instead. */
    export const outboundSchema = AsyncRunPendingResponseStatus$outboundSchema;
}

/** @internal */
export const AsyncRunPendingResponse$inboundSchema: z.ZodType<
    AsyncRunPendingResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    status: AsyncRunPendingResponseStatus$inboundSchema,
    runId: z.string(),
});

/** @internal */
export type AsyncRunPendingResponse$Outbound = {
    status: string;
    runId: string;
};

/** @internal */
export const AsyncRunPendingResponse$outboundSchema: z.ZodType<
    AsyncRunPendingResponse$Outbound,
    z.ZodTypeDef,
    AsyncRunPendingResponse
> = z.object({
    status: AsyncRunPendingResponseStatus$outboundSchema,
    runId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AsyncRunPendingResponse$ {
    /** @deprecated use `AsyncRunPendingResponse$inboundSchema` instead. */
    export const inboundSchema = AsyncRunPendingResponse$inboundSchema;
    /** @deprecated use `AsyncRunPendingResponse$outboundSchema` instead. */
    export const outboundSchema = AsyncRunPendingResponse$outboundSchema;
    /** @deprecated use `AsyncRunPendingResponse$Outbound` instead. */
    export type Outbound = AsyncRunPendingResponse$Outbound;
}
