/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAuthSessionGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
    /**
     * Project name
     */
    projectName: string;
};

export type GetAuthSessionRequest = {
    /**
     * Project name
     */
    projectName?: string | undefined;
    /**
     * Authentication session ID
     */
    authSessionId: string;
};

export type GetAuthSessionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful result
     */
    authSessionInfo?: components.AuthSessionInfo | undefined;
};

/** @internal */
export namespace GetAuthSessionGlobals$ {
    export const inboundSchema: z.ZodType<GetAuthSessionGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string(),
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                projectName: v.projectName,
            };
        });

    export type Outbound = {
        workspaceId: string;
        projectName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthSessionGlobals> = z
        .object({
            workspaceId: z.string(),
            projectName: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                projectName: v.projectName,
            };
        });
}

/** @internal */
export namespace GetAuthSessionRequest$ {
    export const inboundSchema: z.ZodType<GetAuthSessionRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string().optional(),
            authSessionId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                authSessionId: v.authSessionId,
            };
        });

    export type Outbound = {
        projectName?: string | undefined;
        authSessionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthSessionRequest> = z
        .object({
            projectName: z.string().optional(),
            authSessionId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                authSessionId: v.authSessionId,
            };
        });
}

/** @internal */
export namespace GetAuthSessionResponse$ {
    export const inboundSchema: z.ZodType<GetAuthSessionResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AuthSessionInfo: components.AuthSessionInfo$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.AuthSessionInfo === undefined
                    ? null
                    : { authSessionInfo: v.AuthSessionInfo }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AuthSessionInfo?: components.AuthSessionInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthSessionResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            authSessionInfo: components.AuthSessionInfo$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.authSessionInfo === undefined
                    ? null
                    : { AuthSessionInfo: v.authSessionInfo }),
            };
        });
}
