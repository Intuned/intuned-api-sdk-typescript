/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RunApiStartGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type RunApiStartRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * run project api request
     */
    runProjectApiRequest: components.RunProjectApiRequest;
};

/** @internal */
export const RunApiStartGlobals$inboundSchema: z.ZodType<
    RunApiStartGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type RunApiStartGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const RunApiStartGlobals$outboundSchema: z.ZodType<
    RunApiStartGlobals$Outbound,
    z.ZodTypeDef,
    RunApiStartGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunApiStartGlobals$ {
    /** @deprecated use `RunApiStartGlobals$inboundSchema` instead. */
    export const inboundSchema = RunApiStartGlobals$inboundSchema;
    /** @deprecated use `RunApiStartGlobals$outboundSchema` instead. */
    export const outboundSchema = RunApiStartGlobals$outboundSchema;
    /** @deprecated use `RunApiStartGlobals$Outbound` instead. */
    export type Outbound = RunApiStartGlobals$Outbound;
}

/** @internal */
export const RunApiStartRequest$inboundSchema: z.ZodType<
    RunApiStartRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        projectName: z.string(),
        RunProjectApiRequest: components.RunProjectApiRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            RunProjectApiRequest: "runProjectApiRequest",
        });
    });

/** @internal */
export type RunApiStartRequest$Outbound = {
    projectName: string;
    RunProjectApiRequest: components.RunProjectApiRequest$Outbound;
};

/** @internal */
export const RunApiStartRequest$outboundSchema: z.ZodType<
    RunApiStartRequest$Outbound,
    z.ZodTypeDef,
    RunApiStartRequest
> = z
    .object({
        projectName: z.string(),
        runProjectApiRequest: components.RunProjectApiRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            runProjectApiRequest: "RunProjectApiRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunApiStartRequest$ {
    /** @deprecated use `RunApiStartRequest$inboundSchema` instead. */
    export const inboundSchema = RunApiStartRequest$inboundSchema;
    /** @deprecated use `RunApiStartRequest$outboundSchema` instead. */
    export const outboundSchema = RunApiStartRequest$outboundSchema;
    /** @deprecated use `RunApiStartRequest$Outbound` instead. */
    export type Outbound = RunApiStartRequest$Outbound;
}
