/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AsyncFailedResponse, AsyncFailedResponse$ } from "./asyncfailedresponse";
import { AsyncFilePendingResponse, AsyncFilePendingResponse$ } from "./asyncfilependingresponse";
import {
    MarkdownExtractionAsyncSuccessfulResponse,
    MarkdownExtractionAsyncSuccessfulResponse$,
} from "./markdownextractionasyncsuccessfulresponse";
import * as z from "zod";

export type MarkdownExtractionAsyncResponse =
    | (AsyncFilePendingResponse & { status: "pending" })
    | (MarkdownExtractionAsyncSuccessfulResponse & { status: "completed" })
    | (AsyncFailedResponse & { status: "failed" });

/** @internal */
export namespace MarkdownExtractionAsyncResponse$ {
    export const inboundSchema: z.ZodType<MarkdownExtractionAsyncResponse, z.ZodTypeDef, unknown> =
        z.union([
            AsyncFilePendingResponse$.inboundSchema.and(
                z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
            ),
            MarkdownExtractionAsyncSuccessfulResponse$.inboundSchema.and(
                z
                    .object({ status: z.literal("completed") })
                    .transform((v) => ({ status: v.status }))
            ),
            AsyncFailedResponse$.inboundSchema.and(
                z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
            ),
        ]);

    export type Outbound =
        | (AsyncFilePendingResponse$.Outbound & { status: "pending" })
        | (MarkdownExtractionAsyncSuccessfulResponse$.Outbound & { status: "completed" })
        | (AsyncFailedResponse$.Outbound & { status: "failed" });
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarkdownExtractionAsyncResponse
    > = z.union([
        AsyncFilePendingResponse$.outboundSchema.and(
            z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
        ),
        MarkdownExtractionAsyncSuccessfulResponse$.outboundSchema.and(
            z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
        ),
        AsyncFailedResponse$.outboundSchema.and(
            z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
        ),
    ]);
}
