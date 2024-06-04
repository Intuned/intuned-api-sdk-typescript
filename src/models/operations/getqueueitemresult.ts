/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetQueueItemResultGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
};

export type GetQueueItemResultRequest = {
    /**
     * Project name
     */
    projectName: string;
    /**
     * Queue ID
     */
    queueId: string;
    /**
     * Queue item run ID
     */
    itemRunId: string;
};

export type GetQueueItemResultResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Queue item result
     */
    queueItemResult?: components.QueueItemResult | undefined;
};

/** @internal */
export namespace GetQueueItemResultGlobals$ {
    export const inboundSchema: z.ZodType<GetQueueItemResultGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueueItemResultGlobals> = z
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
export namespace GetQueueItemResultRequest$ {
    export const inboundSchema: z.ZodType<GetQueueItemResultRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            itemRunId: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
                queueId: v.queueId,
                itemRunId: v.itemRunId,
            };
        });

    export type Outbound = {
        projectName: string;
        queueId: string;
        itemRunId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueueItemResultRequest> = z
        .object({
            projectName: z.string(),
            queueId: z.string(),
            itemRunId: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
                queueId: v.queueId,
                itemRunId: v.itemRunId,
            };
        });
}

/** @internal */
export namespace GetQueueItemResultResponse$ {
    export const inboundSchema: z.ZodType<GetQueueItemResultResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            QueueItemResult: components.QueueItemResult$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.QueueItemResult === undefined
                    ? null
                    : { queueItemResult: v.QueueItemResult }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        QueueItemResult?: components.QueueItemResult$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueueItemResultResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            queueItemResult: components.QueueItemResult$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.queueItemResult === undefined
                    ? null
                    : { QueueItemResult: v.queueItemResult }),
            };
        });
}
