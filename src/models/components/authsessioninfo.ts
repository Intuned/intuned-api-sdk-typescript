/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Auth session status
 */
export const AuthSessionInfoStatus = {
    Expired: "EXPIRED",
    Pending: "PENDING",
    Ready: "READY",
} as const;
/**
 * Auth session status
 */
export type AuthSessionInfoStatus = ClosedEnum<typeof AuthSessionInfoStatus>;

/**
 * Auth session information
 */
export type AuthSessionInfo = {
    /**
     * Auth session ID
     */
    id: string;
    /**
     * Auth session name
     */
    name: string;
    /**
     * Auth session status
     */
    status: AuthSessionInfoStatus;
};

/** @internal */
export const AuthSessionInfoStatus$inboundSchema: z.ZodNativeEnum<typeof AuthSessionInfoStatus> =
    z.nativeEnum(AuthSessionInfoStatus);

/** @internal */
export const AuthSessionInfoStatus$outboundSchema: z.ZodNativeEnum<typeof AuthSessionInfoStatus> =
    AuthSessionInfoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthSessionInfoStatus$ {
    /** @deprecated use `AuthSessionInfoStatus$inboundSchema` instead. */
    export const inboundSchema = AuthSessionInfoStatus$inboundSchema;
    /** @deprecated use `AuthSessionInfoStatus$outboundSchema` instead. */
    export const outboundSchema = AuthSessionInfoStatus$outboundSchema;
}

/** @internal */
export const AuthSessionInfo$inboundSchema: z.ZodType<AuthSessionInfo, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        name: z.string(),
        status: AuthSessionInfoStatus$inboundSchema,
    });

/** @internal */
export type AuthSessionInfo$Outbound = {
    id: string;
    name: string;
    status: string;
};

/** @internal */
export const AuthSessionInfo$outboundSchema: z.ZodType<
    AuthSessionInfo$Outbound,
    z.ZodTypeDef,
    AuthSessionInfo
> = z.object({
    id: z.string(),
    name: z.string(),
    status: AuthSessionInfoStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthSessionInfo$ {
    /** @deprecated use `AuthSessionInfo$inboundSchema` instead. */
    export const inboundSchema = AuthSessionInfo$inboundSchema;
    /** @deprecated use `AuthSessionInfo$outboundSchema` instead. */
    export const outboundSchema = AuthSessionInfo$outboundSchema;
    /** @deprecated use `AuthSessionInfo$Outbound` instead. */
    export type Outbound = AuthSessionInfo$Outbound;
}
