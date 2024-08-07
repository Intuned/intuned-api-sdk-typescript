/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Auth session recorder create instance
 */
export type CreateRecorderAuthSessionRequest = {
    /**
     * Auth session name, can contain letters, numbers and hyphens
     */
    name: string;
};

/** @internal */
export const CreateRecorderAuthSessionRequest$inboundSchema: z.ZodType<
    CreateRecorderAuthSessionRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
});

/** @internal */
export type CreateRecorderAuthSessionRequest$Outbound = {
    name: string;
};

/** @internal */
export const CreateRecorderAuthSessionRequest$outboundSchema: z.ZodType<
    CreateRecorderAuthSessionRequest$Outbound,
    z.ZodTypeDef,
    CreateRecorderAuthSessionRequest
> = z.object({
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRecorderAuthSessionRequest$ {
    /** @deprecated use `CreateRecorderAuthSessionRequest$inboundSchema` instead. */
    export const inboundSchema = CreateRecorderAuthSessionRequest$inboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionRequest$outboundSchema` instead. */
    export const outboundSchema = CreateRecorderAuthSessionRequest$outboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionRequest$Outbound` instead. */
    export type Outbound = CreateRecorderAuthSessionRequest$Outbound;
}
