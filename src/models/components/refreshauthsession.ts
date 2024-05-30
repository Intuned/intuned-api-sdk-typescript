/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum RefreshAuthSessionStatus {
    Started = "started",
}

export type RefreshAuthSession = {
    status?: RefreshAuthSessionStatus | undefined;
};

/** @internal */
export namespace RefreshAuthSessionStatus$ {
    export const inboundSchema = z.nativeEnum(RefreshAuthSessionStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RefreshAuthSession$ {
    export const inboundSchema: z.ZodType<RefreshAuthSession, z.ZodTypeDef, unknown> = z
        .object({
            status: RefreshAuthSessionStatus$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        status?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefreshAuthSession> = z
        .object({
            status: RefreshAuthSessionStatus$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}