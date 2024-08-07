/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ResumeJobMessage = {
    Resumed: "Resumed",
} as const;
export type ResumeJobMessage = ClosedEnum<typeof ResumeJobMessage>;

export type ResumeJob = {
    id?: string | undefined;
    message?: ResumeJobMessage | undefined;
};

/** @internal */
export const ResumeJobMessage$inboundSchema: z.ZodNativeEnum<typeof ResumeJobMessage> =
    z.nativeEnum(ResumeJobMessage);

/** @internal */
export const ResumeJobMessage$outboundSchema: z.ZodNativeEnum<typeof ResumeJobMessage> =
    ResumeJobMessage$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResumeJobMessage$ {
    /** @deprecated use `ResumeJobMessage$inboundSchema` instead. */
    export const inboundSchema = ResumeJobMessage$inboundSchema;
    /** @deprecated use `ResumeJobMessage$outboundSchema` instead. */
    export const outboundSchema = ResumeJobMessage$outboundSchema;
}

/** @internal */
export const ResumeJob$inboundSchema: z.ZodType<ResumeJob, z.ZodTypeDef, unknown> = z.object({
    id: z.string().optional(),
    message: ResumeJobMessage$inboundSchema.optional(),
});

/** @internal */
export type ResumeJob$Outbound = {
    id?: string | undefined;
    message?: string | undefined;
};

/** @internal */
export const ResumeJob$outboundSchema: z.ZodType<ResumeJob$Outbound, z.ZodTypeDef, ResumeJob> =
    z.object({
        id: z.string().optional(),
        message: ResumeJobMessage$outboundSchema.optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResumeJob$ {
    /** @deprecated use `ResumeJob$inboundSchema` instead. */
    export const inboundSchema = ResumeJob$inboundSchema;
    /** @deprecated use `ResumeJob$outboundSchema` instead. */
    export const outboundSchema = ResumeJob$outboundSchema;
    /** @deprecated use `ResumeJob$Outbound` instead. */
    export type Outbound = ResumeJob$Outbound;
}
