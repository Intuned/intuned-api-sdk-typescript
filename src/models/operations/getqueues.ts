/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetQueuesGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
};

export type GetQueuesRequest = {
    /**
     * Project name
     */
    projectName: string;
};

export type GetQueuesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * List of queues
     */
    getQueues?: Array<components.QueueInput> | undefined;
};

/** @internal */
export namespace GetQueuesGlobals$ {
    export const inboundSchema: z.ZodType<GetQueuesGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueuesGlobals> = z
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
export namespace GetQueuesRequest$ {
    export const inboundSchema: z.ZodType<GetQueuesRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
            };
        });

    export type Outbound = {
        projectName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueuesRequest> = z
        .object({
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
            };
        });
}

/** @internal */
export namespace GetQueuesResponse$ {
    export const inboundSchema: z.ZodType<GetQueuesResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            GetQueues: z.array(components.QueueInput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.GetQueues === undefined ? null : { getQueues: v.GetQueues }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        GetQueues?: Array<components.QueueInput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueuesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            getQueues: z.array(components.QueueInput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.getQueues === undefined ? null : { GetQueues: v.getQueues }),
            };
        });
}
