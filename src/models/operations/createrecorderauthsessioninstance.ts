/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateRecorderAuthSessionInstanceGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type CreateRecorderAuthSessionInstanceRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * create recorder authentication session instance request
     */
    createRecorderAuthSessionRequest: components.CreateRecorderAuthSessionRequest;
};

/** @internal */
export const CreateRecorderAuthSessionInstanceGlobals$inboundSchema: z.ZodType<
    CreateRecorderAuthSessionInstanceGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type CreateRecorderAuthSessionInstanceGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const CreateRecorderAuthSessionInstanceGlobals$outboundSchema: z.ZodType<
    CreateRecorderAuthSessionInstanceGlobals$Outbound,
    z.ZodTypeDef,
    CreateRecorderAuthSessionInstanceGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRecorderAuthSessionInstanceGlobals$ {
    /** @deprecated use `CreateRecorderAuthSessionInstanceGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateRecorderAuthSessionInstanceGlobals$inboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionInstanceGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateRecorderAuthSessionInstanceGlobals$outboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionInstanceGlobals$Outbound` instead. */
    export type Outbound = CreateRecorderAuthSessionInstanceGlobals$Outbound;
}

/** @internal */
export const CreateRecorderAuthSessionInstanceRequest$inboundSchema: z.ZodType<
    CreateRecorderAuthSessionInstanceRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        projectName: z.string(),
        CreateRecorderAuthSessionRequest: components.CreateRecorderAuthSessionRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            CreateRecorderAuthSessionRequest: "createRecorderAuthSessionRequest",
        });
    });

/** @internal */
export type CreateRecorderAuthSessionInstanceRequest$Outbound = {
    projectName: string;
    CreateRecorderAuthSessionRequest: components.CreateRecorderAuthSessionRequest$Outbound;
};

/** @internal */
export const CreateRecorderAuthSessionInstanceRequest$outboundSchema: z.ZodType<
    CreateRecorderAuthSessionInstanceRequest$Outbound,
    z.ZodTypeDef,
    CreateRecorderAuthSessionInstanceRequest
> = z
    .object({
        projectName: z.string(),
        createRecorderAuthSessionRequest:
            components.CreateRecorderAuthSessionRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            createRecorderAuthSessionRequest: "CreateRecorderAuthSessionRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRecorderAuthSessionInstanceRequest$ {
    /** @deprecated use `CreateRecorderAuthSessionInstanceRequest$inboundSchema` instead. */
    export const inboundSchema = CreateRecorderAuthSessionInstanceRequest$inboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionInstanceRequest$outboundSchema` instead. */
    export const outboundSchema = CreateRecorderAuthSessionInstanceRequest$outboundSchema;
    /** @deprecated use `CreateRecorderAuthSessionInstanceRequest$Outbound` instead. */
    export type Outbound = CreateRecorderAuthSessionInstanceRequest$Outbound;
}
