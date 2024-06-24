/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAuthSessionStartGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type CreateAuthSessionStartRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * create authentication session request
     */
    createAuthSessionRequest: components.CreateAuthSessionRequest;
};

/** @internal */
export namespace CreateAuthSessionStartGlobals$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionStartGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string().optional(),
        });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionStartGlobals> =
        z.object({
            workspaceId: z.string().optional(),
        });
}

/** @internal */
export namespace CreateAuthSessionStartRequest$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionStartRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            CreateAuthSessionRequest: components.CreateAuthSessionRequest$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                CreateAuthSessionRequest: "createAuthSessionRequest",
            });
        });

    export type Outbound = {
        projectName: string;
        CreateAuthSessionRequest: components.CreateAuthSessionRequest$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionStartRequest> =
        z
            .object({
                projectName: z.string(),
                createAuthSessionRequest: components.CreateAuthSessionRequest$.outboundSchema,
            })
            .transform((v) => {
                return remap$(v, {
                    createAuthSessionRequest: "CreateAuthSessionRequest",
                });
            });
}
