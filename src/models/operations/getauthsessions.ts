/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAuthSessionsGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type GetAuthSessionsRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
};

/** @internal */
export namespace GetAuthSessionsGlobals$ {
    export const inboundSchema: z.ZodType<GetAuthSessionsGlobals, z.ZodTypeDef, unknown> = z.object(
        {
            workspaceId: z.string().optional(),
        }
    );

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthSessionsGlobals> =
        z.object({
            workspaceId: z.string().optional(),
        });
}

/** @internal */
export namespace GetAuthSessionsRequest$ {
    export const inboundSchema: z.ZodType<GetAuthSessionsRequest, z.ZodTypeDef, unknown> = z.object(
        {
            projectName: z.string(),
        }
    );

    export type Outbound = {
        projectName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthSessionsRequest> =
        z.object({
            projectName: z.string(),
        });
}
