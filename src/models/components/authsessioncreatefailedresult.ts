/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Status of auth session creation operation.
 */
export const AuthSessionCreateFailedResultStatus = {
    Failed: "failed",
} as const;
/**
 * Status of auth session creation operation.
 */
export type AuthSessionCreateFailedResultStatus = ClosedEnum<
    typeof AuthSessionCreateFailedResultStatus
>;

/**
 * Auth session create failed.
 */
export type AuthSessionCreateFailedResult = {
    /**
     * Status of auth session creation operation.
     */
    status: AuthSessionCreateFailedResultStatus;
    /**
     * Error code.
     */
    error: string;
    /**
     * Error message.
     */
    message: string;
};

/** @internal */
export namespace AuthSessionCreateFailedResultStatus$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AuthSessionCreateFailedResultStatus> =
        z.nativeEnum(AuthSessionCreateFailedResultStatus);
    export const outboundSchema: z.ZodNativeEnum<typeof AuthSessionCreateFailedResultStatus> =
        inboundSchema;
}

/** @internal */
export namespace AuthSessionCreateFailedResult$ {
    export const inboundSchema: z.ZodType<AuthSessionCreateFailedResult, z.ZodTypeDef, unknown> =
        z.object({
            status: AuthSessionCreateFailedResultStatus$.inboundSchema,
            error: z.string(),
            message: z.string(),
        });

    export type Outbound = {
        status: string;
        error: string;
        message: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthSessionCreateFailedResult> =
        z.object({
            status: AuthSessionCreateFailedResultStatus$.outboundSchema,
            error: z.string(),
            message: z.string(),
        });
}
