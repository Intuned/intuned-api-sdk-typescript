/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthSession, AuthSession$ } from "./authsession";
import { ParametersT, ParametersT$ } from "./parameters";
import { Retry, Retry$ } from "./retry";
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
     * `http://host:port:username:password`
     *
     */
    proxy?: string | undefined;
};

/** @internal */
export namespace RunProjectApiRequest$ {
    export const inboundSchema: z.ZodType<RunProjectApiRequest, z.ZodTypeDef, unknown> = z.object({
        api: z.string(),
        parameters: ParametersT$.inboundSchema,
        retry: Retry$.inboundSchema.optional(),
        authSession: AuthSession$.inboundSchema.optional(),
        proxy: z.string().optional(),
    });

    export type Outbound = {
        api: string;
        parameters: ParametersT$.Outbound;
        retry?: Retry$.Outbound | undefined;
        authSession?: AuthSession$.Outbound | undefined;
        proxy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunProjectApiRequest> = z.object(
        {
            api: z.string(),
            parameters: ParametersT$.outboundSchema,
            retry: Retry$.outboundSchema.optional(),
            authSession: AuthSession$.outboundSchema.optional(),
            proxy: z.string().optional(),
        }
    );
}
