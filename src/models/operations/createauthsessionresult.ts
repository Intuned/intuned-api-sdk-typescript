/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateAuthSessionResultGlobals = {
    /**
     * Workspace ID
     */
    workspaceId: string;
};

export type CreateAuthSessionResultRequest = {
    /**
     * Project name
     */
    projectName: string;
    /**
     * Authentication session ID
     */
    authSessionId: string;
};

export type CreateAuthSessionResultResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * result of creation. can be pending, completed, failed or requested_more_info
     */
    authSessionCreateResult?: components.AuthSessionCreateResult | undefined;
};

/** @internal */
export namespace CreateAuthSessionResultGlobals$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionResultGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
            };
        });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionResultGlobals> =
        z
            .object({
                workspaceId: z.string(),
            })
            .transform((v) => {
                return {
                    workspaceId: v.workspaceId,
                };
            });
}

/** @internal */
export namespace CreateAuthSessionResultRequest$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionResultRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            authSessionId: z.string(),
        })
        .transform((v) => {
            return {
                projectName: v.projectName,
                authSessionId: v.authSessionId,
            };
        });

    export type Outbound = {
        projectName: string;
        authSessionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionResultRequest> =
        z
            .object({
                projectName: z.string(),
                authSessionId: z.string(),
            })
            .transform((v) => {
                return {
                    projectName: v.projectName,
                    authSessionId: v.authSessionId,
                };
            });
}

/** @internal */
export namespace CreateAuthSessionResultResponse$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionResultResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                AuthSessionCreateResult:
                    components.AuthSessionCreateResult$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.AuthSessionCreateResult === undefined
                        ? null
                        : { authSessionCreateResult: v.AuthSessionCreateResult }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AuthSessionCreateResult?: components.AuthSessionCreateResult$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateAuthSessionResultResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            authSessionCreateResult: components.AuthSessionCreateResult$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.authSessionCreateResult === undefined
                    ? null
                    : { AuthSessionCreateResult: v.authSessionCreateResult }),
            };
        });
}
