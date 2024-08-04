/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * An extracted table.
 */
export type Result = {
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
export const TableExtractionSuccessfulResponseStatus = {
    Completed: "completed",
} as const;
/**
 * Operation status.
 */
export type TableExtractionSuccessfulResponseStatus = ClosedEnum<
    typeof TableExtractionSuccessfulResponseStatus
>;

/**
 * Successful file extraction result
 */
export type TableExtractionSuccessfulResponse = {
    /**
     * An array of the extracted tables.
     */
    result: Array<Result>;
    /**
     * Operation ID.
     */
    operationId: string;
    /**
     * Operation status.
     */
    status: TableExtractionSuccessfulResponseStatus;
};

/** @internal */
export const Result$inboundSchema: z.ZodType<Result, z.ZodTypeDef, unknown> = z.object({
    pageNumber: z.number().int(),
    title: z.nullable(z.string()),
    content: z.array(z.array(z.string())),
});

/** @internal */
export type Result$Outbound = {
    pageNumber: number;
    title: string | null;
    content: Array<Array<string>>;
};

/** @internal */
export const Result$outboundSchema: z.ZodType<Result$Outbound, z.ZodTypeDef, Result> = z.object({
    pageNumber: z.number().int(),
    title: z.nullable(z.string()),
    content: z.array(z.array(z.string())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Result$ {
    /** @deprecated use `Result$inboundSchema` instead. */
    export const inboundSchema = Result$inboundSchema;
    /** @deprecated use `Result$outboundSchema` instead. */
    export const outboundSchema = Result$outboundSchema;
    /** @deprecated use `Result$Outbound` instead. */
    export type Outbound = Result$Outbound;
}

/** @internal */
export const TableExtractionSuccessfulResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof TableExtractionSuccessfulResponseStatus
> = z.nativeEnum(TableExtractionSuccessfulResponseStatus);

/** @internal */
export const TableExtractionSuccessfulResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof TableExtractionSuccessfulResponseStatus
> = TableExtractionSuccessfulResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TableExtractionSuccessfulResponseStatus$ {
    /** @deprecated use `TableExtractionSuccessfulResponseStatus$inboundSchema` instead. */
    export const inboundSchema = TableExtractionSuccessfulResponseStatus$inboundSchema;
    /** @deprecated use `TableExtractionSuccessfulResponseStatus$outboundSchema` instead. */
    export const outboundSchema = TableExtractionSuccessfulResponseStatus$outboundSchema;
}

/** @internal */
export const TableExtractionSuccessfulResponse$inboundSchema: z.ZodType<
    TableExtractionSuccessfulResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    result: z.array(z.lazy(() => Result$inboundSchema)),
    operationId: z.string(),
    status: TableExtractionSuccessfulResponseStatus$inboundSchema,
});

/** @internal */
export type TableExtractionSuccessfulResponse$Outbound = {
    result: Array<Result$Outbound>;
    operationId: string;
    status: string;
};

/** @internal */
export const TableExtractionSuccessfulResponse$outboundSchema: z.ZodType<
    TableExtractionSuccessfulResponse$Outbound,
    z.ZodTypeDef,
    TableExtractionSuccessfulResponse
> = z.object({
    result: z.array(z.lazy(() => Result$outboundSchema)),
    operationId: z.string(),
    status: TableExtractionSuccessfulResponseStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TableExtractionSuccessfulResponse$ {
    /** @deprecated use `TableExtractionSuccessfulResponse$inboundSchema` instead. */
    export const inboundSchema = TableExtractionSuccessfulResponse$inboundSchema;
    /** @deprecated use `TableExtractionSuccessfulResponse$outboundSchema` instead. */
    export const outboundSchema = TableExtractionSuccessfulResponse$outboundSchema;
    /** @deprecated use `TableExtractionSuccessfulResponse$Outbound` instead. */
    export type Outbound = TableExtractionSuccessfulResponse$Outbound;
}
