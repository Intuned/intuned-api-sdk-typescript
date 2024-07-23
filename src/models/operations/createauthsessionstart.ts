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
export const CreateAuthSessionStartGlobals$inboundSchema: z.ZodType<
    CreateAuthSessionStartGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type CreateAuthSessionStartGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const CreateAuthSessionStartGlobals$outboundSchema: z.ZodType<
    CreateAuthSessionStartGlobals$Outbound,
    z.ZodTypeDef,
    CreateAuthSessionStartGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthSessionStartGlobals$ {
    /** @deprecated use `CreateAuthSessionStartGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateAuthSessionStartGlobals$inboundSchema;
    /** @deprecated use `CreateAuthSessionStartGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateAuthSessionStartGlobals$outboundSchema;
    /** @deprecated use `CreateAuthSessionStartGlobals$Outbound` instead. */
    export type Outbound = CreateAuthSessionStartGlobals$Outbound;
}

/** @internal */
export const CreateAuthSessionStartRequest$inboundSchema: z.ZodType<
    CreateAuthSessionStartRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        projectName: z.string(),
        CreateAuthSessionRequest: components.CreateAuthSessionRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            CreateAuthSessionRequest: "createAuthSessionRequest",
        });
    });

/** @internal */
export type CreateAuthSessionStartRequest$Outbound = {
    projectName: string;
    CreateAuthSessionRequest: components.CreateAuthSessionRequest$Outbound;
};

/** @internal */
export const CreateAuthSessionStartRequest$outboundSchema: z.ZodType<
    CreateAuthSessionStartRequest$Outbound,
    z.ZodTypeDef,
    CreateAuthSessionStartRequest
> = z
    .object({
        projectName: z.string(),
        createAuthSessionRequest: components.CreateAuthSessionRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            createAuthSessionRequest: "CreateAuthSessionRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthSessionStartRequest$ {
    /** @deprecated use `CreateAuthSessionStartRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAuthSessionStartRequest$inboundSchema;
    /** @deprecated use `CreateAuthSessionStartRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAuthSessionStartRequest$outboundSchema;
    /** @deprecated use `CreateAuthSessionStartRequest$Outbound` instead. */
    export type Outbound = CreateAuthSessionStartRequest$Outbound;
}
