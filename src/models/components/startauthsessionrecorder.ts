/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type StartAuthSessionRecorder = {
    recorderUrl: string;
};

/** @internal */
export const StartAuthSessionRecorder$inboundSchema: z.ZodType<
    StartAuthSessionRecorder,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        recorder_url: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            recorder_url: "recorderUrl",
        });
    });

/** @internal */
export type StartAuthSessionRecorder$Outbound = {
    recorder_url: string;
};

/** @internal */
export const StartAuthSessionRecorder$outboundSchema: z.ZodType<
    StartAuthSessionRecorder$Outbound,
    z.ZodTypeDef,
    StartAuthSessionRecorder
> = z
    .object({
        recorderUrl: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            recorderUrl: "recorder_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartAuthSessionRecorder$ {
    /** @deprecated use `StartAuthSessionRecorder$inboundSchema` instead. */
    export const inboundSchema = StartAuthSessionRecorder$inboundSchema;
    /** @deprecated use `StartAuthSessionRecorder$outboundSchema` instead. */
    export const outboundSchema = StartAuthSessionRecorder$outboundSchema;
    /** @deprecated use `StartAuthSessionRecorder$Outbound` instead. */
    export type Outbound = StartAuthSessionRecorder$Outbound;
}
