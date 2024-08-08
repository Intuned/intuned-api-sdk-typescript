/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AsyncFilePendingResponse,
    AsyncFilePendingResponse$inboundSchema,
    AsyncFilePendingResponse$Outbound,
    AsyncFilePendingResponse$outboundSchema,
} from "./asyncfilependingresponse.js";
import {
    FileFailedResponse,
    FileFailedResponse$inboundSchema,
    FileFailedResponse$Outbound,
    FileFailedResponse$outboundSchema,
} from "./filefailedresponse.js";
import {
    TableExtractionSuccessfulResponse,
    TableExtractionSuccessfulResponse$inboundSchema,
    TableExtractionSuccessfulResponse$Outbound,
    TableExtractionSuccessfulResponse$outboundSchema,
} from "./tableextractionsuccessfulresponse.js";
import * as z from "zod";

export type TableExtractionAsyncResponse =
    | (AsyncFilePendingResponse & { status: "pending" })
    | (TableExtractionSuccessfulResponse & { status: "completed" })
    | (FileFailedResponse & { status: "failed" });

/** @internal */
export const TableExtractionAsyncResponse$inboundSchema: z.ZodType<
    TableExtractionAsyncResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    AsyncFilePendingResponse$inboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
    ),
    TableExtractionSuccessfulResponse$inboundSchema.and(
        z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
    ),
    FileFailedResponse$inboundSchema.and(
        z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
    ),
]);

/** @internal */
export type TableExtractionAsyncResponse$Outbound =
    | (AsyncFilePendingResponse$Outbound & { status: "pending" })
    | (TableExtractionSuccessfulResponse$Outbound & { status: "completed" })
    | (FileFailedResponse$Outbound & { status: "failed" });

/** @internal */
export const TableExtractionAsyncResponse$outboundSchema: z.ZodType<
    TableExtractionAsyncResponse$Outbound,
    z.ZodTypeDef,
    TableExtractionAsyncResponse
> = z.union([
    AsyncFilePendingResponse$outboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
    ),
    TableExtractionSuccessfulResponse$outboundSchema.and(
        z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
    ),
    FileFailedResponse$outboundSchema.and(
        z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
    ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TableExtractionAsyncResponse$ {
    /** @deprecated use `TableExtractionAsyncResponse$inboundSchema` instead. */
    export const inboundSchema = TableExtractionAsyncResponse$inboundSchema;
    /** @deprecated use `TableExtractionAsyncResponse$outboundSchema` instead. */
    export const outboundSchema = TableExtractionAsyncResponse$outboundSchema;
    /** @deprecated use `TableExtractionAsyncResponse$Outbound` instead. */
    export type Outbound = TableExtractionAsyncResponse$Outbound;
}
