/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Operation status.
 */
export enum Status {
    Pending = "pending",
}

export type AsyncFilePendingResponse = {
    /**
     * Operation ID
     */
    operationId?: string | undefined;
    /**
     * Operation status.
     */
    status?: Status | undefined;
};

/** @internal */
export namespace Status$ {
    export const inboundSchema = z.nativeEnum(Status);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AsyncFilePendingResponse$ {
    export const inboundSchema: z.ZodType<AsyncFilePendingResponse, z.ZodTypeDef, unknown> = z
        .object({
            operationId: z.string().optional(),
            status: Status$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.operationId === undefined ? null : { operationId: v.operationId }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        operationId?: string | undefined;
        status?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AsyncFilePendingResponse> = z
        .object({
            operationId: z.string().optional(),
            status: Status$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.operationId === undefined ? null : { operationId: v.operationId }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}