/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AuthSession = {
    id?: string | undefined;
};

/** @internal */
export namespace AuthSession$ {
    export const inboundSchema: z.ZodType<AuthSession, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthSession> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}