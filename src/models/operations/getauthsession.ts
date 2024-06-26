/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAuthSessionGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type GetAuthSessionRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Authentication session ID. You can obtain it from the Auth Sessions tab in your project details.
     */
    authSessionId: string;
};

/** @internal */
export namespace GetAuthSessionGlobals$ {
    export const inboundSchema: z.ZodType<GetAuthSessionGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthSessionGlobals> =
        z.object({
            workspaceId: z.string().optional(),
        });
}

/** @internal */
export namespace GetAuthSessionRequest$ {
    export const inboundSchema: z.ZodType<GetAuthSessionRequest, z.ZodTypeDef, unknown> = z.object({
        projectName: z.string(),
        authSessionId: z.string(),
    });

    export type Outbound = {
        projectName: string;
        authSessionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthSessionRequest> =
        z.object({
            projectName: z.string(),
            authSessionId: z.string(),
        });
}
