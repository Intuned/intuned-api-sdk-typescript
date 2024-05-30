/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Operation status.
 */
export enum AsyncFailedResponseStatus {
    Failed = "failed",
}

export type AsyncFailedResponse = {
    /**
     * Operation ID
     */
    operationId?: string | undefined;
    /**
     * Operation status.
     */
    status?: AsyncFailedResponseStatus | undefined;
    /**
     * HTTP status code of the operation.
     */
    statusCode?: number | undefined;
    /**
     * Error code.
     */
    error?: string | undefined;
    /**
     * Error message.
     */
    message?: string | undefined;
};

/** @internal */
export namespace AsyncFailedResponseStatus$ {
    export const inboundSchema = z.nativeEnum(AsyncFailedResponseStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AsyncFailedResponse$ {
    export const inboundSchema: z.ZodType<AsyncFailedResponse, z.ZodTypeDef, unknown> = z
        .object({
            operationId: z.string().optional(),
            status: AsyncFailedResponseStatus$.inboundSchema.optional(),
            statusCode: z.number().int().optional(),
            error: z.string().optional(),
            message: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.operationId === undefined ? null : { operationId: v.operationId }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });

    export type Outbound = {
        operationId?: string | undefined;
        status?: string | undefined;
        statusCode?: number | undefined;
        error?: string | undefined;
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AsyncFailedResponse> = z
        .object({
            operationId: z.string().optional(),
            status: AsyncFailedResponseStatus$.outboundSchema.optional(),
            statusCode: z.number().int().optional(),
            error: z.string().optional(),
            message: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.operationId === undefined ? null : { operationId: v.operationId }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });
}
