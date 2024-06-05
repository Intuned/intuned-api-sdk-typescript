/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetQueuesGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type GetQueuesRequest = {
    /**
     * Your project name. It is the name you provide when creating a project. Keep in mind that if you change your project name, you have to change the URIs to match it.
     */
    projectName: string;
};

/** @internal */
export namespace GetQueuesGlobals$ {
    export const inboundSchema: z.ZodType<GetQueuesGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string(),
    });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQueuesGlobals> = z.object({
        workspaceId: z.string(),
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
