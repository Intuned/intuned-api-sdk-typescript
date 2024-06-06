/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { APIParameters, APIParameters$ } from "./apiparameters";
import * as z from "zod";

/**
 * Auth session create request
 */
export type CreateAuthSessionRequest = {
    /**
     * Auth session display name
     */
    authSessionDisplayName?: string | undefined;
    /**
     * The parameters to be passed to the API.
     */
    parameters?: APIParameters | undefined;
};

/** @internal */
export namespace CreateAuthSessionRequest$ {
    export const inboundSchema: z.ZodType<CreateAuthSessionRequest, z.ZodTypeDef, unknown> =
        z.object({
            authSessionDisplayName: z.string().optional(),
            parameters: APIParameters$.inboundSchema.optional(),
        });

    export type Outbound = {
        authSessionDisplayName?: string | undefined;
        parameters?: APIParameters$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthSessionRequest> =
        z.object({
            authSessionDisplayName: z.string().optional(),
            parameters: APIParameters$.outboundSchema.optional(),
        });
}
