/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteQueueGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type DeleteQueueRequest = {
    /**
     * Your project name. It is the name you provide when creating a project. Keep in mind that if you change your project name, you have to change the URIs to match it.
     */
    projectName: string;
    /**
     * Your queue ID. It is the ID of the queue you provided when creating it.
     */
    queueId: string;
};

/** @internal */
export namespace DeleteQueueGlobals$ {
    export const inboundSchema: z.ZodType<DeleteQueueGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string(),
    });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteQueueGlobals> = z.object({
        workspaceId: z.string(),
    });
}

/** @internal */
export namespace DeleteQueueRequest$ {
    export const inboundSchema: z.ZodType<DeleteQueueRequest, z.ZodTypeDef, unknown> = z.object({
        projectName: z.string(),
        queueId: z.string(),
    });

    export type Outbound = {
        projectName: string;
        queueId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteQueueRequest> = z.object({
        projectName: z.string(),
        queueId: z.string(),
    });
}
