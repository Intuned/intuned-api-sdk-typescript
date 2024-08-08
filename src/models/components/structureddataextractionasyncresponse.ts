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
    StructuredDataExtractionFileSuccessfulResponse,
    StructuredDataExtractionFileSuccessfulResponse$inboundSchema,
    StructuredDataExtractionFileSuccessfulResponse$Outbound,
    StructuredDataExtractionFileSuccessfulResponse$outboundSchema,
} from "./structureddataextractionfilesuccessfulresponse.js";
import * as z from "zod";

export type StructuredDataExtractionAsyncResponse =
    | (AsyncFilePendingResponse & { status: "pending" })
    | (StructuredDataExtractionFileSuccessfulResponse & { status: "completed" })
    | (FileFailedResponse & { status: "failed" });

/** @internal */
export const StructuredDataExtractionAsyncResponse$inboundSchema: z.ZodType<
    StructuredDataExtractionAsyncResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    AsyncFilePendingResponse$inboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
    ),
    StructuredDataExtractionFileSuccessfulResponse$inboundSchema.and(
        z.object({ status: z.literal("completed") }).transform((v) => ({ status: v.status }))
    ),
    FileFailedResponse$inboundSchema.and(
        z.object({ status: z.literal("failed") }).transform((v) => ({ status: v.status }))
    ),
]);

/** @internal */
export type StructuredDataExtractionAsyncResponse$Outbound =
    | (AsyncFilePendingResponse$Outbound & { status: "pending" })
    | (StructuredDataExtractionFileSuccessfulResponse$Outbound & { status: "completed" })
    | (FileFailedResponse$Outbound & { status: "failed" });

/** @internal */
export const StructuredDataExtractionAsyncResponse$outboundSchema: z.ZodType<
    StructuredDataExtractionAsyncResponse$Outbound,
    z.ZodTypeDef,
    StructuredDataExtractionAsyncResponse
> = z.union([
    AsyncFilePendingResponse$outboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({ status: v.status }))
    ),
    StructuredDataExtractionFileSuccessfulResponse$outboundSchema.and(
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
export namespace StructuredDataExtractionAsyncResponse$ {
    /** @deprecated use `StructuredDataExtractionAsyncResponse$inboundSchema` instead. */
    export const inboundSchema = StructuredDataExtractionAsyncResponse$inboundSchema;
    /** @deprecated use `StructuredDataExtractionAsyncResponse$outboundSchema` instead. */
    export const outboundSchema = StructuredDataExtractionAsyncResponse$outboundSchema;
    /** @deprecated use `StructuredDataExtractionAsyncResponse$Outbound` instead. */
    export type Outbound = StructuredDataExtractionAsyncResponse$Outbound;
}
