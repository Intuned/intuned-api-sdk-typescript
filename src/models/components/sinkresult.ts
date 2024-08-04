/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    JobSinkResultPayload,
    JobSinkResultPayload$inboundSchema,
    JobSinkResultPayload$Outbound,
    JobSinkResultPayload$outboundSchema,
} from "./jobsinkresultpayload.js";
import {
    QueueSinkResultPayload,
    QueueSinkResultPayload$inboundSchema,
    QueueSinkResultPayload$Outbound,
    QueueSinkResultPayload$outboundSchema,
} from "./queuesinkresultpayload.js";
import * as z from "zod";

export type SinkResult = QueueSinkResultPayload | JobSinkResultPayload;

/** @internal */
export const SinkResult$inboundSchema: z.ZodType<SinkResult, z.ZodTypeDef, unknown> = z.union([
    QueueSinkResultPayload$inboundSchema,
    JobSinkResultPayload$inboundSchema,
]);

/** @internal */
export type SinkResult$Outbound = QueueSinkResultPayload$Outbound | JobSinkResultPayload$Outbound;

/** @internal */
export const SinkResult$outboundSchema: z.ZodType<SinkResult$Outbound, z.ZodTypeDef, SinkResult> =
    z.union([QueueSinkResultPayload$outboundSchema, JobSinkResultPayload$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SinkResult$ {
    /** @deprecated use `SinkResult$inboundSchema` instead. */
    export const inboundSchema = SinkResult$inboundSchema;
    /** @deprecated use `SinkResult$outboundSchema` instead. */
    export const outboundSchema = SinkResult$outboundSchema;
    /** @deprecated use `SinkResult$Outbound` instead. */
    export type Outbound = SinkResult$Outbound;
}
