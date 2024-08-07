/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type StartAuthSessionRecorderGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type StartAuthSessionRecorderRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * start auth session recorder request
     */
    startAuthSessionRecorderRequest: components.StartAuthSessionRecorderRequest;
};

/** @internal */
export const StartAuthSessionRecorderGlobals$inboundSchema: z.ZodType<
    StartAuthSessionRecorderGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type StartAuthSessionRecorderGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const StartAuthSessionRecorderGlobals$outboundSchema: z.ZodType<
    StartAuthSessionRecorderGlobals$Outbound,
    z.ZodTypeDef,
    StartAuthSessionRecorderGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartAuthSessionRecorderGlobals$ {
    /** @deprecated use `StartAuthSessionRecorderGlobals$inboundSchema` instead. */
    export const inboundSchema = StartAuthSessionRecorderGlobals$inboundSchema;
    /** @deprecated use `StartAuthSessionRecorderGlobals$outboundSchema` instead. */
    export const outboundSchema = StartAuthSessionRecorderGlobals$outboundSchema;
    /** @deprecated use `StartAuthSessionRecorderGlobals$Outbound` instead. */
    export type Outbound = StartAuthSessionRecorderGlobals$Outbound;
}

/** @internal */
export const StartAuthSessionRecorderRequest$inboundSchema: z.ZodType<
    StartAuthSessionRecorderRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        projectName: z.string(),
        StartAuthSessionRecorderRequest: components.StartAuthSessionRecorderRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            StartAuthSessionRecorderRequest: "startAuthSessionRecorderRequest",
        });
    });

/** @internal */
export type StartAuthSessionRecorderRequest$Outbound = {
    projectName: string;
    StartAuthSessionRecorderRequest: components.StartAuthSessionRecorderRequest$Outbound;
};

/** @internal */
export const StartAuthSessionRecorderRequest$outboundSchema: z.ZodType<
    StartAuthSessionRecorderRequest$Outbound,
    z.ZodTypeDef,
    StartAuthSessionRecorderRequest
> = z
    .object({
        projectName: z.string(),
        startAuthSessionRecorderRequest: components.StartAuthSessionRecorderRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            startAuthSessionRecorderRequest: "StartAuthSessionRecorderRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartAuthSessionRecorderRequest$ {
    /** @deprecated use `StartAuthSessionRecorderRequest$inboundSchema` instead. */
    export const inboundSchema = StartAuthSessionRecorderRequest$inboundSchema;
    /** @deprecated use `StartAuthSessionRecorderRequest$outboundSchema` instead. */
    export const outboundSchema = StartAuthSessionRecorderRequest$outboundSchema;
    /** @deprecated use `StartAuthSessionRecorderRequest$Outbound` instead. */
    export type Outbound = StartAuthSessionRecorderRequest$Outbound;
}
