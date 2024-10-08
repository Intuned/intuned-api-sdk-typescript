/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const CreateRecorderAuthSessionInstanceStatus = {
    Expired: "EXPIRED",
    Pending: "PENDING",
    Ready: "READY",
} as const;
export type CreateRecorderAuthSessionInstanceStatus = ClosedEnum<
    typeof CreateRecorderAuthSessionInstanceStatus
>;

export type CreateRecorderAuthSessionInstance = {
    id: string;
    status: CreateRecorderAuthSessionInstanceStatus;
};

/** @internal */
export const CreateRecorderAuthSessionInstanceStatus$inboundSchema: z.ZodNativeEnum<
    typeof CreateRecorderAuthSessionInstanceStatus
> = z.nativeEnum(CreateRecorderAuthSessionInstanceStatus);

/** @internal */
export const CreateRecorderAuthSessionInstanceStatus$outboundSchema: z.ZodNativeEnum<
    typeof CreateRecorderAuthSessionInstanceStatus
> = CreateRecorderAuthSessionInstanceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRecorderAuthSessionInstanceStatus$ {
    /** @deprecated use `CreateRecorderAuthSessionInstanceStatus$inboundSchema` instead. */
    export const inboundSchema = CreateRecorderAuthSessionInstanceStatus$inboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionInstanceStatus$outboundSchema` instead. */
    export const outboundSchema = CreateRecorderAuthSessionInstanceStatus$outboundSchema;
}

/** @internal */
export const CreateRecorderAuthSessionInstance$inboundSchema: z.ZodType<
    CreateRecorderAuthSessionInstance,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    status: CreateRecorderAuthSessionInstanceStatus$inboundSchema,
});

/** @internal */
export type CreateRecorderAuthSessionInstance$Outbound = {
    id: string;
    status: string;
};

/** @internal */
export const CreateRecorderAuthSessionInstance$outboundSchema: z.ZodType<
    CreateRecorderAuthSessionInstance$Outbound,
    z.ZodTypeDef,
    CreateRecorderAuthSessionInstance
> = z.object({
    id: z.string(),
    status: CreateRecorderAuthSessionInstanceStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRecorderAuthSessionInstance$ {
    /** @deprecated use `CreateRecorderAuthSessionInstance$inboundSchema` instead. */
    export const inboundSchema = CreateRecorderAuthSessionInstance$inboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionInstance$outboundSchema` instead. */
    export const outboundSchema = CreateRecorderAuthSessionInstance$outboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionInstance$Outbound` instead. */
    export type Outbound = CreateRecorderAuthSessionInstance$Outbound;
}
