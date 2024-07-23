/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const TerminateJobRunMessage = {
    JobRunTerminated: "Job run terminated",
} as const;
export type TerminateJobRunMessage = ClosedEnum<typeof TerminateJobRunMessage>;

export type TerminateJobRun = {
    message?: TerminateJobRunMessage | undefined;
};

/** @internal */
export const TerminateJobRunMessage$inboundSchema: z.ZodNativeEnum<typeof TerminateJobRunMessage> =
    z.nativeEnum(TerminateJobRunMessage);

/** @internal */
export const TerminateJobRunMessage$outboundSchema: z.ZodNativeEnum<typeof TerminateJobRunMessage> =
    TerminateJobRunMessage$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TerminateJobRunMessage$ {
    /** @deprecated use `TerminateJobRunMessage$inboundSchema` instead. */
    export const inboundSchema = TerminateJobRunMessage$inboundSchema;
    /** @deprecated use `TerminateJobRunMessage$outboundSchema` instead. */
    export const outboundSchema = TerminateJobRunMessage$outboundSchema;
}

/** @internal */
export const TerminateJobRun$inboundSchema: z.ZodType<TerminateJobRun, z.ZodTypeDef, unknown> =
    z.object({
        message: TerminateJobRunMessage$inboundSchema.optional(),
    });

/** @internal */
export type TerminateJobRun$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const TerminateJobRun$outboundSchema: z.ZodType<
    TerminateJobRun$Outbound,
    z.ZodTypeDef,
    TerminateJobRun
> = z.object({
    message: TerminateJobRunMessage$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TerminateJobRun$ {
    /** @deprecated use `TerminateJobRun$inboundSchema` instead. */
    export const inboundSchema = TerminateJobRun$inboundSchema;
    /** @deprecated use `TerminateJobRun$outboundSchema` instead. */
    export const outboundSchema = TerminateJobRun$outboundSchema;
    /** @deprecated use `TerminateJobRun$Outbound` instead. */
    export type Outbound = TerminateJobRun$Outbound;
}
