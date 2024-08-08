/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteAuthSessionGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
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

/** @internal */
export const DeleteAuthSessionGlobals$inboundSchema: z.ZodType<
    DeleteAuthSessionGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type DeleteAuthSessionGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const DeleteAuthSessionGlobals$outboundSchema: z.ZodType<
    DeleteAuthSessionGlobals$Outbound,
    z.ZodTypeDef,
    DeleteAuthSessionGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAuthSessionGlobals$ {
    /** @deprecated use `DeleteAuthSessionGlobals$inboundSchema` instead. */
    export const inboundSchema = DeleteAuthSessionGlobals$inboundSchema;
    /** @deprecated use `DeleteAuthSessionGlobals$outboundSchema` instead. */
    export const outboundSchema = DeleteAuthSessionGlobals$outboundSchema;
    /** @deprecated use `DeleteAuthSessionGlobals$Outbound` instead. */
    export type Outbound = DeleteAuthSessionGlobals$Outbound;
}

/** @internal */
export const DeleteAuthSessionRequest$inboundSchema: z.ZodType<
    DeleteAuthSessionRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectName: z.string(),
    authSessionId: z.string(),
});

/** @internal */
export type DeleteAuthSessionRequest$Outbound = {
    projectName: string;
    authSessionId: string;
};

/** @internal */
export const DeleteAuthSessionRequest$outboundSchema: z.ZodType<
    DeleteAuthSessionRequest$Outbound,
    z.ZodTypeDef,
    DeleteAuthSessionRequest
> = z.object({
    projectName: z.string(),
    authSessionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAuthSessionRequest$ {
    /** @deprecated use `DeleteAuthSessionRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteAuthSessionRequest$inboundSchema;
    /** @deprecated use `DeleteAuthSessionRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteAuthSessionRequest$outboundSchema;
    /** @deprecated use `DeleteAuthSessionRequest$Outbound` instead. */
    export type Outbound = DeleteAuthSessionRequest$Outbound;
}
