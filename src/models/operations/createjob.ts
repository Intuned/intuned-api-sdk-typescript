/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateJobGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type CreateJobRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * create job request
     */
    jobInput: components.JobInput;
};

/** @internal */
export namespace CreateJobGlobals$ {
    export const inboundSchema: z.ZodType<CreateJobGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJobGlobals> = z.object({
        workspaceId: z.string().optional(),
    });
}

/** @internal */
export namespace CreateJobRequest$ {
    export const inboundSchema: z.ZodType<CreateJobRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectName: z.string(),
            JobInput: components.JobInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                JobInput: "jobInput",
            });
        });

    export type Outbound = {
        projectName: string;
        JobInput: components.JobInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJobRequest> = z
        .object({
            projectName: z.string(),
            jobInput: components.JobInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                jobInput: "JobInput",
            });
        });
}
