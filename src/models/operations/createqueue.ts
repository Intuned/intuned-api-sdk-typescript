/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateQueueGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

export type CreateQueueRequest = {
    /**
     * Your project name. It is the name you provide when creating a project.
     */
    projectName: string;
    /**
     * create queue request
     */
    queueInput: components.QueueInput;
};

/** @internal */
export const CreateQueueGlobals$inboundSchema: z.ZodType<
    CreateQueueGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceId: z.string().optional(),
});

/** @internal */
export type CreateQueueGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const CreateQueueGlobals$outboundSchema: z.ZodType<
    CreateQueueGlobals$Outbound,
    z.ZodTypeDef,
    CreateQueueGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateQueueGlobals$ {
    /** @deprecated use `CreateQueueGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateQueueGlobals$inboundSchema;
    /** @deprecated use `CreateQueueGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateQueueGlobals$outboundSchema;
    /** @deprecated use `CreateQueueGlobals$Outbound` instead. */
    export type Outbound = CreateQueueGlobals$Outbound;
}

/** @internal */
export const CreateQueueRequest$inboundSchema: z.ZodType<
    CreateQueueRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        projectName: z.string(),
        QueueInput: components.QueueInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            QueueInput: "queueInput",
        });
    });

/** @internal */
export type CreateQueueRequest$Outbound = {
    projectName: string;
    QueueInput: components.QueueInput$Outbound;
};

/** @internal */
export const CreateQueueRequest$outboundSchema: z.ZodType<
    CreateQueueRequest$Outbound,
    z.ZodTypeDef,
    CreateQueueRequest
> = z
    .object({
        projectName: z.string(),
        queueInput: components.QueueInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            queueInput: "QueueInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateQueueRequest$ {
    /** @deprecated use `CreateQueueRequest$inboundSchema` instead. */
    export const inboundSchema = CreateQueueRequest$inboundSchema;
    /** @deprecated use `CreateQueueRequest$outboundSchema` instead. */
    export const outboundSchema = CreateQueueRequest$outboundSchema;
    /** @deprecated use `CreateQueueRequest$Outbound` instead. */
    export type Outbound = CreateQueueRequest$Outbound;
}
