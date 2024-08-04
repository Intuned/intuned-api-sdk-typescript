/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const UpdateQueueRepeatItemMessage = {
    RepeatableItemUpdated: "repeatable item updated",
} as const;
export type UpdateQueueRepeatItemMessage = ClosedEnum<typeof UpdateQueueRepeatItemMessage>;

export type UpdateQueueRepeatItem = {
    message?: UpdateQueueRepeatItemMessage | undefined;
};

/** @internal */
export const UpdateQueueRepeatItemMessage$inboundSchema: z.ZodNativeEnum<
    typeof UpdateQueueRepeatItemMessage
> = z.nativeEnum(UpdateQueueRepeatItemMessage);

/** @internal */
export const UpdateQueueRepeatItemMessage$outboundSchema: z.ZodNativeEnum<
    typeof UpdateQueueRepeatItemMessage
> = UpdateQueueRepeatItemMessage$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateQueueRepeatItemMessage$ {
    /** @deprecated use `UpdateQueueRepeatItemMessage$inboundSchema` instead. */
    export const inboundSchema = UpdateQueueRepeatItemMessage$inboundSchema;
    /** @deprecated use `UpdateQueueRepeatItemMessage$outboundSchema` instead. */
    export const outboundSchema = UpdateQueueRepeatItemMessage$outboundSchema;
}

/** @internal */
export const UpdateQueueRepeatItem$inboundSchema: z.ZodType<
    UpdateQueueRepeatItem,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: UpdateQueueRepeatItemMessage$inboundSchema.optional(),
});

/** @internal */
export type UpdateQueueRepeatItem$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const UpdateQueueRepeatItem$outboundSchema: z.ZodType<
    UpdateQueueRepeatItem$Outbound,
    z.ZodTypeDef,
    UpdateQueueRepeatItem
> = z.object({
    message: UpdateQueueRepeatItemMessage$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateQueueRepeatItem$ {
    /** @deprecated use `UpdateQueueRepeatItem$inboundSchema` instead. */
    export const inboundSchema = UpdateQueueRepeatItem$inboundSchema;
    /** @deprecated use `UpdateQueueRepeatItem$outboundSchema` instead. */
    export const outboundSchema = UpdateQueueRepeatItem$outboundSchema;
    /** @deprecated use `UpdateQueueRepeatItem$Outbound` instead. */
    export type Outbound = UpdateQueueRepeatItem$Outbound;
}
