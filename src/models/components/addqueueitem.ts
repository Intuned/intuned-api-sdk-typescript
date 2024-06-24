/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AddQueueItemStatus = {
    Queued: "queued",
} as const;
export type AddQueueItemStatus = ClosedEnum<typeof AddQueueItemStatus>;

export type AddQueueItem = {
    runId: string;
    status: AddQueueItemStatus;
};

/** @internal */
export namespace AddQueueItemStatus$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AddQueueItemStatus> =
        z.nativeEnum(AddQueueItemStatus);
    export const outboundSchema: z.ZodNativeEnum<typeof AddQueueItemStatus> = inboundSchema;
}

/** @internal */
export namespace AddQueueItem$ {
    export const inboundSchema: z.ZodType<AddQueueItem, z.ZodTypeDef, unknown> = z.object({
        runId: z.string(),
        status: AddQueueItemStatus$.inboundSchema,
    });

    export type Outbound = {
        runId: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddQueueItem> = z.object({
        runId: z.string(),
        status: AddQueueItemStatus$.outboundSchema,
    });
}
