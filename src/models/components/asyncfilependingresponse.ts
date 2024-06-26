/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Operation status.
 */
export const AsyncFilePendingResponseStatus = {
    Pending: "pending",
} as const;
/**
 * Operation status.
 */
export type AsyncFilePendingResponseStatus = ClosedEnum<typeof AsyncFilePendingResponseStatus>;

/**
 * Pending file extraction result
 */
export type AsyncFilePendingResponse = {
    /**
     * Operation ID
     */
    operationId: string;
    /**
     * Operation status.
     */
    status: AsyncFilePendingResponseStatus;
};

/** @internal */
export namespace AsyncFilePendingResponseStatus$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AsyncFilePendingResponseStatus> =
        z.nativeEnum(AsyncFilePendingResponseStatus);
    export const outboundSchema: z.ZodNativeEnum<typeof AsyncFilePendingResponseStatus> =
        inboundSchema;
}

/** @internal */
export namespace AsyncFilePendingResponse$ {
    export const inboundSchema: z.ZodType<AsyncFilePendingResponse, z.ZodTypeDef, unknown> =
        z.object({
            operationId: z.string(),
            status: AsyncFilePendingResponseStatus$.inboundSchema,
        });

    export type Outbound = {
        operationId: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AsyncFilePendingResponse> =
        z.object({
            operationId: z.string(),
            status: AsyncFilePendingResponseStatus$.outboundSchema,
        });
}
