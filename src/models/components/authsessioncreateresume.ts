/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

/**
 * Auth session creation resume request.
 */
export type AuthSessionCreateResume = {
    /**
     * The input to the resume operation.
     */
    input: string;
    /**
     * The ID of the request info action.
     */
    infoRequestId: string;
};

/** @internal */
export namespace AuthSessionCreateResume$ {
    export const inboundSchema: z.ZodType<AuthSessionCreateResume, z.ZodTypeDef, unknown> = z
        .object({
            input: z.string(),
            info_request_id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                info_request_id: "infoRequestId",
            });
        });

    export type Outbound = {
        input: string;
        info_request_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthSessionCreateResume> = z
        .object({
            input: z.string(),
            infoRequestId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                infoRequestId: "info_request_id",
            });
        });
}
