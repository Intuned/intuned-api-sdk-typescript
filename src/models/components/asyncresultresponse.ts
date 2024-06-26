/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AsyncRunCompletedResponse,
    AsyncRunCompletedResponse$,
} from "./asyncruncompletedresponse.js";
import { AsyncRunFailedResponse, AsyncRunFailedResponse$ } from "./asyncrunfailedresponse.js";
import { AsyncRunPendingResponse, AsyncRunPendingResponse$ } from "./asyncrunpendingresponse.js";
import * as z from "zod";

export type AsyncResultResponse =
    | (AsyncRunPendingResponse & { status: "pending" })
    | (AsyncRunCompletedResponse & { status: "completed" })
    | (AsyncRunFailedResponse & { status: "failed" });

/** @internal */
export namespace AsyncResultResponse$ {
    export const inboundSchema: z.ZodType<AsyncResultResponse, z.ZodTypeDef, unknown> = z.union([
        AsyncRunPendingResponse$.inboundSchema.and(
            z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
        ),
        AsyncRunCompletedResponse$.inboundSchema.and(
            z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
        ),
        AsyncRunFailedResponse$.inboundSchema.and(
            z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
        ),
    ]);

    export type Outbound =
        | (AsyncRunPendingResponse$.Outbound & { status: "pending" })
        | (AsyncRunCompletedResponse$.Outbound & { status: "completed" })
        | (AsyncRunFailedResponse$.Outbound & { status: "failed" });
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AsyncResultResponse> = z.union([
        AsyncRunPendingResponse$.outboundSchema.and(
            z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
        ),
        AsyncRunCompletedResponse$.outboundSchema.and(
            z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
        ),
        AsyncRunFailedResponse$.outboundSchema.and(
            z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
        ),
    ]);
}
