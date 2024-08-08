/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RunApiSyncGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type RunApiSyncRequest = {
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
export const RunApiSyncGlobals$inboundSchema: z.ZodType<RunApiSyncGlobals, z.ZodTypeDef, unknown> =
    z.object({
        workspaceId: z.string().optional(),
    });

/** @internal */
export type RunApiSyncGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const RunApiSyncGlobals$outboundSchema: z.ZodType<
    RunApiSyncGlobals$Outbound,
    z.ZodTypeDef,
    RunApiSyncGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunApiSyncGlobals$ {
    /** @deprecated use `RunApiSyncGlobals$inboundSchema` instead. */
    export const inboundSchema = RunApiSyncGlobals$inboundSchema;
    /** @deprecated use `RunApiSyncGlobals$outboundSchema` instead. */
    export const outboundSchema = RunApiSyncGlobals$outboundSchema;
    /** @deprecated use `RunApiSyncGlobals$Outbound` instead. */
    export type Outbound = RunApiSyncGlobals$Outbound;
}

/** @internal */
export const RunApiSyncRequest$inboundSchema: z.ZodType<RunApiSyncRequest, z.ZodTypeDef, unknown> =
    z
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
export type RunApiSyncRequest$Outbound = {
    projectName: string;
    RunProjectApiRequest: components.RunProjectApiRequest$Outbound;
};

/** @internal */
export const RunApiSyncRequest$outboundSchema: z.ZodType<
    RunApiSyncRequest$Outbound,
    z.ZodTypeDef,
    RunApiSyncRequest
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
export namespace RunApiSyncRequest$ {
    /** @deprecated use `RunApiSyncRequest$inboundSchema` instead. */
    export const inboundSchema = RunApiSyncRequest$inboundSchema;
    /** @deprecated use `RunApiSyncRequest$outboundSchema` instead. */
    export const outboundSchema = RunApiSyncRequest$outboundSchema;
    /** @deprecated use `RunApiSyncRequest$Outbound` instead. */
    export type Outbound = RunApiSyncRequest$Outbound;
}
