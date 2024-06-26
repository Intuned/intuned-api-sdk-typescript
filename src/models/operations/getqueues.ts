/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetQueuesGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type GetQueuesRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
};

/** @internal */
export namespace GetQueuesGlobals$ {
    export const inboundSchema: z.ZodType<GetQueuesGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueuesGlobals> = z.object({
        workspaceId: z.string().optional(),
    });
}

/** @internal */
export namespace GetQueuesRequest$ {
    export const inboundSchema: z.ZodType<GetQueuesRequest, z.ZodTypeDef, unknown> = z.object({
        projectName: z.string(),
    });

    export type Outbound = {
        projectName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueuesRequest> = z.object({
        projectName: z.string(),
    });
}
