/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateAuthSessionResultGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type CreateAuthSessionResultRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * The ID for the requested auth session creation operation. This is obtained from the start request.
     */
    operationId: string;
};

/** @internal */
export namespace CreateAuthSessionResultGlobals$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionResultGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string().optional(),
        });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionResultGlobals> =
        z.object({
            workspaceId: z.string().optional(),
        });
}

/** @internal */
export namespace CreateAuthSessionResultRequest$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionResultRequest, z.ZodTypeDef, unknown> =
        z.object({
            projectName: z.string(),
            operationId: z.string(),
        });

    export type Outbound = {
        projectName: string;
        operationId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionResultRequest> =
        z.object({
            projectName: z.string(),
            operationId: z.string(),
        });
}
