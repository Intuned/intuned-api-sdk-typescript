/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AsyncFailedResponse, AsyncFailedResponse$ } from "./asyncfailedresponse";
import { AsyncPendingResponse, AsyncPendingResponse$ } from "./asyncpendingresponse";
import * as z from "zod";

/**
 * extracted table
 */
export type TableExtractionAsyncResponseResult = {
    /**
     * page number of the table
     */
    pageNumber?: number | undefined;
    /**
     * title of the table
     */
    title?: string | null | undefined;
    /**
     * table content
     */
    content?: Array<Array<string>> | undefined;
};

/**
 * Operation status.
 */
export enum TableExtractionAsyncResponseStatus {
    Completed = "completed",
}

export type TableExtractionAsyncResponse1 = {
    /**
     * extracted tables
     */
    result?: Array<TableExtractionAsyncResponseResult> | undefined;
    /**
     * Operation ID
     */
    operationId?: string | undefined;
    /**
     * Operation status.
     */
    status?: TableExtractionAsyncResponseStatus | undefined;
    /**
     * HTTP status code of the operation.
     */
    statusCode?: number | undefined;
};

export type TableExtractionAsyncResponse =
    | AsyncPendingResponse
    | TableExtractionAsyncResponse1
    | AsyncFailedResponse;

/** @internal */
export namespace TableExtractionAsyncResponseResult$ {
    export const inboundSchema: z.ZodType<
        TableExtractionAsyncResponseResult,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            pageNumber: z.number().int().optional(),
            title: z.nullable(z.string()).optional(),
            content: z.array(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.pageNumber === undefined ? null : { pageNumber: v.pageNumber }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.content === undefined ? null : { content: v.content }),
            };
        });

    export type Outbound = {
        pageNumber?: number | undefined;
        title?: string | null | undefined;
        content?: Array<Array<string>> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TableExtractionAsyncResponseResult
    > = z
        .object({
            pageNumber: z.number().int().optional(),
            title: z.nullable(z.string()).optional(),
            content: z.array(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.pageNumber === undefined ? null : { pageNumber: v.pageNumber }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.content === undefined ? null : { content: v.content }),
            };
        });
}

/** @internal */
export namespace TableExtractionAsyncResponseStatus$ {
    export const inboundSchema = z.nativeEnum(TableExtractionAsyncResponseStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace TableExtractionAsyncResponse1$ {
    export const inboundSchema: z.ZodType<TableExtractionAsyncResponse1, z.ZodTypeDef, unknown> = z
        .object({
            result: z
                .array(z.lazy(() => TableExtractionAsyncResponseResult$.inboundSchema))
                .optional(),
            operationId: z.string().optional(),
            status: TableExtractionAsyncResponseStatus$.inboundSchema.optional(),
            statusCode: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.result === undefined ? null : { result: v.result }),
                ...(v.operationId === undefined ? null : { operationId: v.operationId }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
            };
        });

    export type Outbound = {
        result?: Array<TableExtractionAsyncResponseResult$.Outbound> | undefined;
        operationId?: string | undefined;
        status?: string | undefined;
        statusCode?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TableExtractionAsyncResponse1> =
        z
            .object({
                result: z
                    .array(z.lazy(() => TableExtractionAsyncResponseResult$.outboundSchema))
                    .optional(),
                operationId: z.string().optional(),
                status: TableExtractionAsyncResponseStatus$.outboundSchema.optional(),
                statusCode: z.number().int().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.result === undefined ? null : { result: v.result }),
                    ...(v.operationId === undefined ? null : { operationId: v.operationId }),
                    ...(v.status === undefined ? null : { status: v.status }),
                    ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                };
            });
}

/** @internal */
export namespace TableExtractionAsyncResponse$ {
    export const inboundSchema: z.ZodType<TableExtractionAsyncResponse, z.ZodTypeDef, unknown> =
        z.union([
            AsyncPendingResponse$.inboundSchema,
            z.lazy(() => TableExtractionAsyncResponse1$.inboundSchema),
            AsyncFailedResponse$.inboundSchema,
        ]);

    export type Outbound =
        | AsyncPendingResponse$.Outbound
        | TableExtractionAsyncResponse1$.Outbound
        | AsyncFailedResponse$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TableExtractionAsyncResponse> =
        z.union([
            AsyncPendingResponse$.outboundSchema,
            z.lazy(() => TableExtractionAsyncResponse1$.outboundSchema),
            AsyncFailedResponse$.outboundSchema,
        ]);
}
