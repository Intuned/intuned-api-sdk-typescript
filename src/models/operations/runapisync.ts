/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type RunApiSyncGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
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

export type RunApiSyncResponse = components.CompletedRunResult | components.FailedRunResult;

/** @internal */
export namespace RunApiSyncGlobals$ {
    export const inboundSchema: z.ZodType<RunApiSyncGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string(),
    });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunApiSyncGlobals> = z.object({
        workspaceId: z.string(),
    });
}

/** @internal */
export namespace RunApiSyncRequest$ {
    export const inboundSchema: z.ZodType<RunApiSyncRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            RunProjectApiRequest: components.RunProjectApiRequest$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                RunProjectApiRequest: "runProjectApiRequest",
            });
        });

    export type Outbound = {
        projectName: string;
        RunProjectApiRequest: components.RunProjectApiRequest$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunApiSyncRequest> = z
        .object({
            projectName: z.string(),
            runProjectApiRequest: components.RunProjectApiRequest$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                runProjectApiRequest: "RunProjectApiRequest",
            });
        });
}

/** @internal */
export namespace RunApiSyncResponse$ {
    export const inboundSchema: z.ZodType<RunApiSyncResponse, z.ZodTypeDef, unknown> = z.union([
        components.CompletedRunResult$.inboundSchema,
        components.FailedRunResult$.inboundSchema,
    ]);

    export type Outbound =
        | components.CompletedRunResult$.Outbound
        | components.FailedRunResult$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunApiSyncResponse> = z.union([
        components.CompletedRunResult$.outboundSchema,
        components.FailedRunResult$.outboundSchema,
    ]);
}
