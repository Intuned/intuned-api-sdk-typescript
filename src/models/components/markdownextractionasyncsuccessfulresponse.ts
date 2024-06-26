/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Operation status.
 */
export const MarkdownExtractionAsyncSuccessfulResponseStatus = {
    Completed: "completed",
} as const;
/**
 * Operation status.
 */
export type MarkdownExtractionAsyncSuccessfulResponseStatus = ClosedEnum<
    typeof MarkdownExtractionAsyncSuccessfulResponseStatus
>;

/**
 * Successful file extraction result
 */
export type MarkdownExtractionAsyncSuccessfulResponse = {
    /**
     * The extracted markdown
     */
    result: string;
    /**
     * Operation ID.
     */
    operationId: string;
    /**
     * Operation status.
     */
    status: MarkdownExtractionAsyncSuccessfulResponseStatus;
};

/** @internal */
export namespace MarkdownExtractionAsyncSuccessfulResponseStatus$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof MarkdownExtractionAsyncSuccessfulResponseStatus
    > = z.nativeEnum(MarkdownExtractionAsyncSuccessfulResponseStatus);
    export const outboundSchema: z.ZodNativeEnum<
        typeof MarkdownExtractionAsyncSuccessfulResponseStatus
    > = inboundSchema;
}

/** @internal */
export namespace MarkdownExtractionAsyncSuccessfulResponse$ {
    export const inboundSchema: z.ZodType<
        MarkdownExtractionAsyncSuccessfulResponse,
        z.ZodTypeDef,
        unknown
    > = z.object({
        result: z.string(),
        operationId: z.string(),
        status: MarkdownExtractionAsyncSuccessfulResponseStatus$.inboundSchema,
    });

    export type Outbound = {
        result: string;
        operationId: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarkdownExtractionAsyncSuccessfulResponse
    > = z.object({
        result: z.string(),
        operationId: z.string(),
        status: MarkdownExtractionAsyncSuccessfulResponseStatus$.outboundSchema,
    });
}
