/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
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

export type StructuredDataExtractionSyncResponse =
  | (StructuredDataExtractionFileSuccessfulResponse & { status: "completed" })
  | (FileFailedResponse & { status: "failed" });

/** @internal */
export const StructuredDataExtractionSyncResponse$inboundSchema: z.ZodType<
  StructuredDataExtractionSyncResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  StructuredDataExtractionFileSuccessfulResponse$inboundSchema.and(
    z.object({ status: z.literal("completed") }).transform((v) => ({
      status: v.status,
    })),
  ),
  FileFailedResponse$inboundSchema.and(
    z.object({ status: z.literal("failed") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/** @internal */
export type StructuredDataExtractionSyncResponse$Outbound =
  | (StructuredDataExtractionFileSuccessfulResponse$Outbound & {
    status: "completed";
  })
  | (FileFailedResponse$Outbound & { status: "failed" });

/** @internal */
export const StructuredDataExtractionSyncResponse$outboundSchema: z.ZodType<
  StructuredDataExtractionSyncResponse$Outbound,
  z.ZodTypeDef,
  StructuredDataExtractionSyncResponse
> = z.union([
  StructuredDataExtractionFileSuccessfulResponse$outboundSchema.and(
    z.object({ status: z.literal("completed") }).transform((v) => ({
      status: v.status,
    })),
  ),
  FileFailedResponse$outboundSchema.and(
    z.object({ status: z.literal("failed") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StructuredDataExtractionSyncResponse$ {
  /** @deprecated use `StructuredDataExtractionSyncResponse$inboundSchema` instead. */
  export const inboundSchema =
    StructuredDataExtractionSyncResponse$inboundSchema;
  /** @deprecated use `StructuredDataExtractionSyncResponse$outboundSchema` instead. */
  export const outboundSchema =
    StructuredDataExtractionSyncResponse$outboundSchema;
  /** @deprecated use `StructuredDataExtractionSyncResponse$Outbound` instead. */
  export type Outbound = StructuredDataExtractionSyncResponse$Outbound;
}
