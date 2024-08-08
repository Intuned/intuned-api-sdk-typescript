/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
export const AuthSessionCreateFailedResultStatus$inboundSchema: z.ZodNativeEnum<
    typeof AuthSessionCreateFailedResultStatus
> = z.nativeEnum(AuthSessionCreateFailedResultStatus);

/** @internal */
export const AuthSessionCreateFailedResultStatus$outboundSchema: z.ZodNativeEnum<
    typeof AuthSessionCreateFailedResultStatus
> = AuthSessionCreateFailedResultStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthSessionCreateFailedResultStatus$ {
    /** @deprecated use `AuthSessionCreateFailedResultStatus$inboundSchema` instead. */
    export const inboundSchema = AuthSessionCreateFailedResultStatus$inboundSchema;
    /** @deprecated use `AuthSessionCreateFailedResultStatus$outboundSchema` instead. */
    export const outboundSchema = AuthSessionCreateFailedResultStatus$outboundSchema;
}

/** @internal */
export const AuthSessionCreateFailedResult$inboundSchema: z.ZodType<
    AuthSessionCreateFailedResult,
    z.ZodTypeDef,
    unknown
> = z.object({
    status: AuthSessionCreateFailedResultStatus$inboundSchema,
    error: z.string(),
    message: z.string(),
});

/** @internal */
export type AuthSessionCreateFailedResult$Outbound = {
    status: string;
    error: string;
    message: string;
};

/** @internal */
export const AuthSessionCreateFailedResult$outboundSchema: z.ZodType<
    AuthSessionCreateFailedResult$Outbound,
    z.ZodTypeDef,
    AuthSessionCreateFailedResult
> = z.object({
    status: AuthSessionCreateFailedResultStatus$outboundSchema,
    error: z.string(),
    message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthSessionCreateFailedResult$ {
    /** @deprecated use `AuthSessionCreateFailedResult$inboundSchema` instead. */
    export const inboundSchema = AuthSessionCreateFailedResult$inboundSchema;
    /** @deprecated use `AuthSessionCreateFailedResult$outboundSchema` instead. */
    export const outboundSchema = AuthSessionCreateFailedResult$outboundSchema;
    /** @deprecated use `AuthSessionCreateFailedResult$Outbound` instead. */
    export type Outbound = AuthSessionCreateFailedResult$Outbound;
}
