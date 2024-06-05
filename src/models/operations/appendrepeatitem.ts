/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AppendRepeatItemGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type AppendRepeatItemRequest = {
    /**
     * Your project name. It is the name you provide when creating a project. Keep in mind that if you change your project name, you have to change the URIs to match it.
     */
    projectName: string;
    /**
     * Your queue ID. It is the ID of the queue you provided when creating it.
     */
    queueId: string;
    /**
     * queue repeat item
     */
    queueRepeatItemInput?: components.QueueRepeatItemInput | undefined;
};

/** @internal */
export namespace AppendRepeatItemGlobals$ {
    export const inboundSchema: z.ZodType<AppendRepeatItemGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string(),
        });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppendRepeatItemGlobals> =
        z.object({
            workspaceId: z.string(),
        });
}

/** @internal */
export namespace AppendRepeatItemRequest$ {
    export const inboundSchema: z.ZodType<AppendRepeatItemRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            QueueRepeatItemInput: components.QueueRepeatItemInput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                QueueRepeatItemInput: "queueRepeatItemInput",
            });
        });

    export type Outbound = {
        projectName: string;
        queueId: string;
        QueueRepeatItemInput?: components.QueueRepeatItemInput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppendRepeatItemRequest> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            queueRepeatItemInput: components.QueueRepeatItemInput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                queueRepeatItemInput: "QueueRepeatItemInput",
            });
        });
}