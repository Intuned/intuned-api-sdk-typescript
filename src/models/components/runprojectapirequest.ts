/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AuthSession,
    AuthSession$inboundSchema,
    AuthSession$Outbound,
    AuthSession$outboundSchema,
} from "./authsession.js";
import {
    ParametersT,
    ParametersT$inboundSchema,
    ParametersT$Outbound,
    ParametersT$outboundSchema,
} from "./parameters.js";
import { Retry, Retry$inboundSchema, Retry$Outbound, Retry$outboundSchema } from "./retry.js";
import * as z from "zod";

/**
 * Run API request
 */
export type RunProjectApiRequest = {
    /**
     * The name of the API to be executed. This is the file path relative to the `api` folder inside your project.
     */
    api: string;
    /**
     * The parameters to be passed to the API.
     */
    parameters: ParametersT;
    /**
     * Retry policy configurations
     */
    retry?: Retry | undefined;
    /**
     * Auth session configurations
     */
    authSession?: AuthSession | undefined;
    /**
     * Proxy URL following this format:
     *
     * @remarks
     * `http://username@password:domain:port`
     *
     */
    proxy?: string | undefined;
};

/** @internal */
export const RunProjectApiRequest$inboundSchema: z.ZodType<
    RunProjectApiRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    api: z.string(),
    parameters: ParametersT$inboundSchema,
    retry: Retry$inboundSchema.optional(),
    authSession: AuthSession$inboundSchema.optional(),
    proxy: z.string().optional(),
});

/** @internal */
export type RunProjectApiRequest$Outbound = {
    api: string;
    parameters: ParametersT$Outbound;
    retry?: Retry$Outbound | undefined;
    authSession?: AuthSession$Outbound | undefined;
    proxy?: string | undefined;
};

/** @internal */
export const RunProjectApiRequest$outboundSchema: z.ZodType<
    RunProjectApiRequest$Outbound,
    z.ZodTypeDef,
    RunProjectApiRequest
> = z.object({
    api: z.string(),
    parameters: ParametersT$outboundSchema,
    retry: Retry$outboundSchema.optional(),
    authSession: AuthSession$outboundSchema.optional(),
    proxy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunProjectApiRequest$ {
    /** @deprecated use `RunProjectApiRequest$inboundSchema` instead. */
    export const inboundSchema = RunProjectApiRequest$inboundSchema;
    /** @deprecated use `RunProjectApiRequest$outboundSchema` instead. */
    export const outboundSchema = RunProjectApiRequest$outboundSchema;
    /** @deprecated use `RunProjectApiRequest$Outbound` instead. */
    export type Outbound = RunProjectApiRequest$Outbound;
}
