/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateRepeatQueueItemGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type UpdateRepeatQueueItemRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Your queue ID. It is the ID of the queue you provided when creating it.
     */
    queueId: string;
    /**
     * Repeat Item ID
     */
    itemId: string;
    /**
     * queue repeatable item
     */
    queueRepeatItemInput: components.QueueRepeatItemInput;
};

/** @internal */
export namespace UpdateRepeatQueueItemGlobals$ {
    export const inboundSchema: z.ZodType<UpdateRepeatQueueItemGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string().optional(),
        });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateRepeatQueueItemGlobals> =
        z.object({
            workspaceId: z.string().optional(),
        });
}

/** @internal */
export namespace UpdateRepeatQueueItemRequest$ {
    export const inboundSchema: z.ZodType<UpdateRepeatQueueItemRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            itemId: z.string(),
            QueueRepeatItemInput: components.QueueRepeatItemInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                QueueRepeatItemInput: "queueRepeatItemInput",
            });
        });

    export type Outbound = {
        projectName: string;
        queueId: string;
        itemId: string;
        QueueRepeatItemInput: components.QueueRepeatItemInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateRepeatQueueItemRequest> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            itemId: z.string(),
            queueRepeatItemInput: components.QueueRepeatItemInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                queueRepeatItemInput: "QueueRepeatItemInput",
            });
        });
}
