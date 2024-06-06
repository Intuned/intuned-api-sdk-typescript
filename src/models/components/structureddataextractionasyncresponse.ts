/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AsyncFailedResponse,
    AsyncFailedResponse$,
    AsyncFailedResponseStatus,
} from "./asyncfailedresponse";
import {
    AsyncFilePendingResponse,
    AsyncFilePendingResponse$,
    Status,
} from "./asyncfilependingresponse";
import {
    StructuredDataExtractionAsyncSuccessfulResponse,
    StructuredDataExtractionAsyncSuccessfulResponse$,
    StructuredDataExtractionAsyncSuccessfulResponseStatus,
} from "./structureddataextractionasyncsuccessfulresponse";
import * as z from "zod";

export type StructuredDataExtractionAsyncResponse =
    | (AsyncFilePendingResponse & { status: Status.Pending })
    | (StructuredDataExtractionAsyncSuccessfulResponse & {
          status: StructuredDataExtractionAsyncSuccessfulResponseStatus.Completed;
      })
    | (AsyncFailedResponse & { status: AsyncFailedResponseStatus.Failed });

/** @internal */
export namespace StructuredDataExtractionAsyncResponse$ {
    export const inboundSchema: z.ZodType<
        StructuredDataExtractionAsyncResponse,
        z.ZodTypeDef,
        unknown
    > = z.union([
        AsyncFilePendingResponse$.inboundSchema.and(
            z.object({ status: z.literal(Status.Pending) }).transform((v) => ({ status: v.status }))
        ),
        StructuredDataExtractionAsyncSuccessfulResponse$.inboundSchema.and(
            z
                .object({
                    status: z.literal(
                        StructuredDataExtractionAsyncSuccessfulResponseStatus.Completed
                    ),
                })
                .transform((v) => ({ status: v.status }))
        ),
        AsyncFailedResponse$.inboundSchema.and(
            z
                .object({ status: z.literal(AsyncFailedResponseStatus.Failed) })
                .transform((v) => ({ status: v.status }))
        ),
    ]);

    export type Outbound =
        | (AsyncFilePendingResponse$.Outbound & { status: Status.Pending })
        | (StructuredDataExtractionAsyncSuccessfulResponse$.Outbound & {
              status: StructuredDataExtractionAsyncSuccessfulResponseStatus.Completed;
          })
        | (AsyncFailedResponse$.Outbound & { status: AsyncFailedResponseStatus.Failed });
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StructuredDataExtractionAsyncResponse
    > = z.union([
        AsyncFilePendingResponse$.outboundSchema.and(
            z.object({ status: z.literal(Status.Pending) }).transform((v) => ({ status: v.status }))
        ),
        StructuredDataExtractionAsyncSuccessfulResponse$.outboundSchema.and(
            z
                .object({
                    status: z.literal(
                        StructuredDataExtractionAsyncSuccessfulResponseStatus.Completed
                    ),
                })
                .transform((v) => ({ status: v.status }))
        ),
        AsyncFailedResponse$.outboundSchema.and(
            z
                .object({ status: z.literal(AsyncFailedResponseStatus.Failed) })
                .transform((v) => ({ status: v.status }))
        ),
    ]);
}
