/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AsyncRunCompletedResponse,
    AsyncRunCompletedResponse$inboundSchema,
    AsyncRunCompletedResponse$Outbound,
    AsyncRunCompletedResponse$outboundSchema,
} from "./asyncruncompletedresponse.js";
import {
    AsyncRunFailedResponse,
    AsyncRunFailedResponse$inboundSchema,
    AsyncRunFailedResponse$Outbound,
    AsyncRunFailedResponse$outboundSchema,
} from "./asyncrunfailedresponse.js";
import * as z from "zod";

export type SyncResultResponse = AsyncRunCompletedResponse | AsyncRunFailedResponse;

/** @internal */
export const SyncResultResponse$inboundSchema: z.ZodType<
    SyncResultResponse,
    z.ZodTypeDef,
    unknown
> = z.union([AsyncRunCompletedResponse$inboundSchema, AsyncRunFailedResponse$inboundSchema]);

/** @internal */
export type SyncResultResponse$Outbound =
    | AsyncRunCompletedResponse$Outbound
    | AsyncRunFailedResponse$Outbound;

/** @internal */
export const SyncResultResponse$outboundSchema: z.ZodType<
    SyncResultResponse$Outbound,
    z.ZodTypeDef,
    SyncResultResponse
> = z.union([AsyncRunCompletedResponse$outboundSchema, AsyncRunFailedResponse$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SyncResultResponse$ {
    /** @deprecated use `SyncResultResponse$inboundSchema` instead. */
    export const inboundSchema = SyncResultResponse$inboundSchema;
    /** @deprecated use `SyncResultResponse$outboundSchema` instead. */
    export const outboundSchema = SyncResultResponse$outboundSchema;
    /** @deprecated use `SyncResultResponse$Outbound` instead. */
    export type Outbound = SyncResultResponse$Outbound;
}
