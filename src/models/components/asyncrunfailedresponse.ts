/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * The status of the run
 */
export const AsyncRunFailedResponseStatus = {
    Failed: "failed",
} as const;
/**
 * The status of the run
 */
export type AsyncRunFailedResponseStatus = ClosedEnum<typeof AsyncRunFailedResponseStatus>;

/**
 * Failed API run result
 */
export type AsyncRunFailedResponse = {
    /**
     * Error code
     */
    error: string;
    /**
     * Error message
     */
    message: string;
    /**
     * The status of the run
     */
    status: AsyncRunFailedResponseStatus;
    /**
     * The run ID
     */
    runId: string;
    /**
     * The HTTP status code of the API run
     */
    statusCode: number;
};

/** @internal */
export namespace AsyncRunFailedResponseStatus$ {
    export const inboundSchema = z.nativeEnum(AsyncRunFailedResponseStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AsyncRunFailedResponse$ {
    export const inboundSchema: z.ZodType<AsyncRunFailedResponse, z.ZodTypeDef, unknown> = z.object(
        {
            error: z.string(),
            message: z.string(),
            status: AsyncRunFailedResponseStatus$.inboundSchema,
            runId: z.string(),
            statusCode: z.number(),
        }
    );

    export type Outbound = {
        error: string;
        message: string;
        status: string;
        runId: string;
        statusCode: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AsyncRunFailedResponse> =
        z.object({
            error: z.string(),
            message: z.string(),
            status: AsyncRunFailedResponseStatus$.outboundSchema,
            runId: z.string(),
            statusCode: z.number(),
        });
}
