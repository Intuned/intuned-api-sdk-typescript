/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type DeleteAuthSessionGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type DeleteAuthSessionRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * Authentication session ID. You can obtain it from the Auth Sessions tab in your project details.
     */
    authSessionId: string;
};

export type DeleteAuthSessionResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace DeleteAuthSessionGlobals$ {
    export const inboundSchema: z.ZodType<DeleteAuthSessionGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string(),
        });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAuthSessionGlobals> =
        z.object({
            workspaceId: z.string(),
        });
}

/** @internal */
export namespace DeleteAuthSessionRequest$ {
    export const inboundSchema: z.ZodType<DeleteAuthSessionRequest, z.ZodTypeDef, unknown> =
        z.object({
            projectName: z.string(),
            authSessionId: z.string(),
        });

    export type Outbound = {
        projectName: string;
        authSessionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAuthSessionRequest> =
        z.object({
            projectName: z.string(),
            authSessionId: z.string(),
        });
}

/** @internal */
export namespace DeleteAuthSessionResponse$ {
    export const inboundSchema: z.ZodType<DeleteAuthSessionResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAuthSessionResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
