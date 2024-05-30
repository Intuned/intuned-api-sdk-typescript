/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteQueueItemGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
    /**
     * Project name
     */
    projectName: string;
};

export type DeleteQueueItemRequest = {
    /**
     * Project name
     */
    projectName?: string | undefined;
    /**
     * Queue ID
     */
    queueId: string;
    /**
     * Queue item run ID
     */
    itemRunId: string;
};

export type DeleteQueueItemResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Queue item deleted
     */
    deleteQueueItem?: components.DeleteQueueItem | undefined;
};

/** @internal */
export namespace DeleteQueueItemGlobals$ {
    export const inboundSchema: z.ZodType<DeleteQueueItemGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string(),
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                projectName: v.projectName,
            };
        });

    export type Outbound = {
        workspaceId: string;
        projectName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteQueueItemGlobals> = z
        .object({
            workspaceId: z.string(),
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                projectName: v.projectName,
            };
        });
}

/** @internal */
export namespace DeleteQueueItemRequest$ {
    export const inboundSchema: z.ZodType<DeleteQueueItemRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string().optional(),
            queueId: z.string(),
            itemRunId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                queueId: v.queueId,
                itemRunId: v.itemRunId,
            };
        });

    export type Outbound = {
        projectName?: string | undefined;
        queueId: string;
        itemRunId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteQueueItemRequest> = z
        .object({
            projectName: z.string().optional(),
            queueId: z.string(),
            itemRunId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                queueId: v.queueId,
                itemRunId: v.itemRunId,
            };
        });
}

/** @internal */
export namespace DeleteQueueItemResponse$ {
    export const inboundSchema: z.ZodType<DeleteQueueItemResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            DeleteQueueItem: components.DeleteQueueItem$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.DeleteQueueItem === undefined
                    ? null
                    : { deleteQueueItem: v.DeleteQueueItem }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        DeleteQueueItem?: components.DeleteQueueItem$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteQueueItemResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            deleteQueueItem: components.DeleteQueueItem$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.deleteQueueItem === undefined
                    ? null
                    : { DeleteQueueItem: v.deleteQueueItem }),
            };
        });
}