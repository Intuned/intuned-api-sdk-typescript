/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * An extracted table.
 */
export type TableExtractionAsyncSuccessfulResponseResult = {
    /**
     * The page number where the table was found.
     */
    pageNumber: number;
    /**
     * Title of the table if any.
     */
    title: string | null;
    /**
     * Table content. An array of rows.
     */
    content: Array<Array<string>>;
};

/**
 * Operation status.
 */
export const TableExtractionAsyncSuccessfulResponseStatus = {
    Completed: "completed",
} as const;
/**
 * Operation status.
 */
export type TableExtractionAsyncSuccessfulResponseStatus = ClosedEnum<
    typeof TableExtractionAsyncSuccessfulResponseStatus
>;

/**
 * Successful file extraction result
 */
export type TableExtractionAsyncSuccessfulResponse = {
    /**
     * An array of the extracted tables.
     */
    result: Array<TableExtractionAsyncSuccessfulResponseResult>;
    /**
     * Operation ID.
     */
    operationId: string;
    /**
     * Operation status.
     */
    status: TableExtractionAsyncSuccessfulResponseStatus;
};

/** @internal */
export namespace TableExtractionAsyncSuccessfulResponseResult$ {
    export const inboundSchema: z.ZodType<
        TableExtractionAsyncSuccessfulResponseResult,
        z.ZodTypeDef,
        unknown
    > = z.object({
        pageNumber: z.number().int(),
        title: z.nullable(z.string()),
        content: z.array(z.array(z.string())),
    });

    export type Outbound = {
        pageNumber: number;
        title: string | null;
        content: Array<Array<string>>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TableExtractionAsyncSuccessfulResponseResult
    > = z.object({
        pageNumber: z.number().int(),
        title: z.nullable(z.string()),
        content: z.array(z.array(z.string())),
    });
}

/** @internal */
export namespace TableExtractionAsyncSuccessfulResponseStatus$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof TableExtractionAsyncSuccessfulResponseStatus
    > = z.nativeEnum(TableExtractionAsyncSuccessfulResponseStatus);
    export const outboundSchema: z.ZodNativeEnum<
        typeof TableExtractionAsyncSuccessfulResponseStatus
    > = inboundSchema;
}

/** @internal */
export namespace TableExtractionAsyncSuccessfulResponse$ {
    export const inboundSchema: z.ZodType<
        TableExtractionAsyncSuccessfulResponse,
        z.ZodTypeDef,
        unknown
    > = z.object({
        result: z.array(z.lazy(() => TableExtractionAsyncSuccessfulResponseResult$.inboundSchema)),
        operationId: z.string(),
        status: TableExtractionAsyncSuccessfulResponseStatus$.inboundSchema,
    });

    export type Outbound = {
        result: Array<TableExtractionAsyncSuccessfulResponseResult$.Outbound>;
        operationId: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TableExtractionAsyncSuccessfulResponse
    > = z.object({
        result: z.array(z.lazy(() => TableExtractionAsyncSuccessfulResponseResult$.outboundSchema)),
        operationId: z.string(),
        status: TableExtractionAsyncSuccessfulResponseStatus$.outboundSchema,
    });
}
