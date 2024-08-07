/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Retry policy configurations
 */
export type Retry = {
    /**
     * The maximum number of attempts to retry the API execution if it fails.
     */
    maximumAttempts: number;
};

/** @internal */
export const Retry$inboundSchema: z.ZodType<Retry, z.ZodTypeDef, unknown> = z.object({
    maximumAttempts: z.number(),
});

/** @internal */
export type Retry$Outbound = {
    maximumAttempts: number;
};

/** @internal */
export const Retry$outboundSchema: z.ZodType<Retry$Outbound, z.ZodTypeDef, Retry> = z.object({
    maximumAttempts: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Retry$ {
    /** @deprecated use `Retry$inboundSchema` instead. */
    export const inboundSchema = Retry$inboundSchema;
    /** @deprecated use `Retry$outboundSchema` instead. */
    export const outboundSchema = Retry$outboundSchema;
    /** @deprecated use `Retry$Outbound` instead. */
    export type Outbound = Retry$Outbound;
}
