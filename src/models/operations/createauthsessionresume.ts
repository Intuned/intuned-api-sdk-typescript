/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAuthSessionResumeGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type CreateAuthSessionResumeRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * The ID for the requested auth session creation operation. This is obtained from the start request.
     */
    operationId: string;
    /**
     * resume authentication session creation request
     */
    authSessionCreateResume: components.AuthSessionCreateResume;
};

/** @internal */
export namespace CreateAuthSessionResumeGlobals$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionResumeGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string().optional(),
        });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionResumeGlobals> =
        z.object({
            workspaceId: z.string().optional(),
        });
}

/** @internal */
export namespace CreateAuthSessionResumeRequest$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionResumeRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            operationId: z.string(),
            AuthSessionCreateResume: components.AuthSessionCreateResume$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                AuthSessionCreateResume: "authSessionCreateResume",
            });
        });

    export type Outbound = {
        projectName: string;
        operationId: string;
        AuthSessionCreateResume: components.AuthSessionCreateResume$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionResumeRequest> =
        z
            .object({
                projectName: z.string(),
                operationId: z.string(),
                authSessionCreateResume: components.AuthSessionCreateResume$.outboundSchema,
            })
            .transform((v) => {
                return remap$(v, {
                    authSessionCreateResume: "AuthSessionCreateResume",
                });
            });
}
