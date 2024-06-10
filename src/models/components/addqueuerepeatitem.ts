/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const AddQueueRepeatItemStatus = {
    RepeatableItemCreated: "repeatable item created",
} as const;
export type AddQueueRepeatItemStatus = ClosedEnum<typeof AddQueueRepeatItemStatus>;

export type AddQueueRepeatItem = {
    id: string;
    status: AddQueueRepeatItemStatus;
};

/** @internal */
export namespace AddQueueRepeatItemStatus$ {
    export const inboundSchema = z.nativeEnum(AddQueueRepeatItemStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AddQueueRepeatItem$ {
    export const inboundSchema: z.ZodType<AddQueueRepeatItem, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        status: AddQueueRepeatItemStatus$.inboundSchema,
    });

    export type Outbound = {
        id: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddQueueRepeatItem> = z.object({
        id: z.string(),
        status: AddQueueRepeatItemStatus$.outboundSchema,
    });
}
