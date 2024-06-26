/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AsyncFilePendingResponse, AsyncFilePendingResponse$ } from "./asyncfilependingresponse.js";
import { FileFailedResponse, FileFailedResponse$ } from "./filefailedresponse.js";
import {
    StructuredDataExtractionFileSuccessfulResponse,
    StructuredDataExtractionFileSuccessfulResponse$,
} from "./structureddataextractionfilesuccessfulresponse.js";
import * as z from "zod";

export type StructuredDataExtractionAsyncResponse =
    | (AsyncFilePendingResponse & { status: "pending" })
    | (StructuredDataExtractionFileSuccessfulResponse & { status: "completed" })
    | (FileFailedResponse & { status: "failed" });

/** @internal */
export namespace StructuredDataExtractionAsyncResponse$ {
    export const inboundSchema: z.ZodType<
        StructuredDataExtractionAsyncResponse,
        z.ZodTypeDef,
        unknown
    > = z.union([
        AsyncFilePendingResponse$.inboundSchema.and(
            z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
        ),
        StructuredDataExtractionFileSuccessfulResponse$.inboundSchema.and(
            z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
        ),
        FileFailedResponse$.inboundSchema.and(
            z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
        ),
    ]);

    export type Outbound =
        | (AsyncFilePendingResponse$.Outbound & { status: "pending" })
        | (StructuredDataExtractionFileSuccessfulResponse$.Outbound & { status: "completed" })
        | (FileFailedResponse$.Outbound & { status: "failed" });
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StructuredDataExtractionAsyncResponse
    > = z.union([
        AsyncFilePendingResponse$.outboundSchema.and(
            z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
        ),
        StructuredDataExtractionFileSuccessfulResponse$.outboundSchema.and(
            z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
        ),
        FileFailedResponse$.outboundSchema.and(
            z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
        ),
    ]);
}
