/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The parameters to be passed to the API.
 */
export type APIParameters = { [k: string]: any } | Array<any>;

/** @internal */
export namespace APIParameters$ {
    export const inboundSchema: z.ZodType<APIParameters, z.ZodTypeDef, unknown> = z.union([
        z.record(z.any()),
        z.array(z.any()),
    ]);

    export type Outbound = { [k: string]: any } | Array<any>;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, APIParameters> = z.union([
        z.record(z.any()),
        z.array(z.any()),
    ]);
}