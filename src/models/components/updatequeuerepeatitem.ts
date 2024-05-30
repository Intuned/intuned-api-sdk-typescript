/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum UpdateQueueRepeatItemMessage {
    RepeatableItemUpdated = "repeatable item updated",
}

export type UpdateQueueRepeatItem = {
    message?: UpdateQueueRepeatItemMessage | undefined;
};

/** @internal */
export namespace UpdateQueueRepeatItemMessage$ {
    export const inboundSchema = z.nativeEnum(UpdateQueueRepeatItemMessage);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateQueueRepeatItem$ {
    export const inboundSchema: z.ZodType<UpdateQueueRepeatItem, z.ZodTypeDef, unknown> = z
        .object({
            message: UpdateQueueRepeatItemMessage$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });

    export type Outbound = {
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateQueueRepeatItem> = z
        .object({
            message: UpdateQueueRepeatItemMessage$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });
}