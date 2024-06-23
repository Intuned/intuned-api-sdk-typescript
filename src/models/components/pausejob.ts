/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const PauseJobMessage = {
    Paused: "Paused",
} as const;
export type PauseJobMessage = ClosedEnum<typeof PauseJobMessage>;

export type PauseJob = {
    id?: string | undefined;
    message?: PauseJobMessage | undefined;
};

/** @internal */
export namespace PauseJobMessage$ {
    export const inboundSchema: z.ZodNativeEnum<typeof PauseJobMessage> =
        z.nativeEnum(PauseJobMessage);
    export const outboundSchema: z.ZodNativeEnum<typeof PauseJobMessage> = inboundSchema;
}

/** @internal */
export namespace PauseJob$ {
    export const inboundSchema: z.ZodType<PauseJob, z.ZodTypeDef, unknown> = z.object({
        id: z.string().optional(),
        message: PauseJobMessage$.inboundSchema.optional(),
    });

    export type Outbound = {
        id?: string | undefined;
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PauseJob> = z.object({
        id: z.string().optional(),
        message: PauseJobMessage$.outboundSchema.optional(),
    });
}
