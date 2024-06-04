/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteRepeatQueueItemGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
};

export type DeleteRepeatQueueItemRequest = {
    /**
     * Project name
     */
    projectName: string;
    /**
     * Queue ID
     */
    queueId: string;
    /**
     * Repeat Item ID
     */
    itemId: string;
};

export type DeleteRepeatQueueItemResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Queue repeatable item deleted
     */
    deleteQueueRepeatItem?: components.DeleteQueueRepeatItem | undefined;
};

/** @internal */
export namespace DeleteRepeatQueueItemGlobals$ {
    export const inboundSchema: z.ZodType<DeleteRepeatQueueItemGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
            };
        });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteRepeatQueueItemGlobals> = z
        .object({
            workspaceId: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
            };
        });
}

/** @internal */
export namespace DeleteRepeatQueueItemRequest$ {
    export const inboundSchema: z.ZodType<DeleteRepeatQueueItemRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            itemId: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
                queueId: v.queueId,
                itemId: v.itemId,
            };
        });

    export type Outbound = {
        projectName: string;
        queueId: string;
        itemId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteRepeatQueueItemRequest> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            itemId: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
                queueId: v.queueId,
                itemId: v.itemId,
            };
        });
}

/** @internal */
export namespace DeleteRepeatQueueItemResponse$ {
    export const inboundSchema: z.ZodType<DeleteRepeatQueueItemResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            DeleteQueueRepeatItem: components.DeleteQueueRepeatItem$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.DeleteQueueRepeatItem === undefined
                    ? null
                    : { deleteQueueRepeatItem: v.DeleteQueueRepeatItem }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        DeleteQueueRepeatItem?: components.DeleteQueueRepeatItem$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteRepeatQueueItemResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
                deleteQueueRepeatItem: components.DeleteQueueRepeatItem$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    HttpMeta: v.httpMeta,
                    ...(v.deleteQueueRepeatItem === undefined
                        ? null
                        : { DeleteQueueRepeatItem: v.deleteQueueRepeatItem }),
                };
            });
}
