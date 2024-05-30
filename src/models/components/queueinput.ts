/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthSession, AuthSession$ } from "./authsession";
import { Proxy, Proxy$ } from "./proxy";
import { QueueConfiguration, QueueConfiguration$ } from "./queueconfiguration";
import { QueueSink, QueueSink$ } from "./queuesink";
import * as z from "zod";

export type QueueInput = {
    id?: string | undefined;
    name?: string | undefined;
    configuration: QueueConfiguration;
    sink?: QueueSink | undefined;
    authSession?: AuthSession | undefined;
    proxy?: Proxy | undefined;
    metadata?: { [k: string]: any } | undefined;
};

/** @internal */
export namespace QueueInput$ {
    export const inboundSchema: z.ZodType<QueueInput, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            configuration: QueueConfiguration$.inboundSchema,
            sink: QueueSink$.inboundSchema.optional(),
            authSession: AuthSession$.inboundSchema.optional(),
            proxy: Proxy$.inboundSchema.optional(),
            metadata: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                configuration: v.configuration,
                ...(v.sink === undefined ? null : { sink: v.sink }),
                ...(v.authSession === undefined ? null : { authSession: v.authSession }),
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        name?: string | undefined;
        configuration: QueueConfiguration$.Outbound;
        sink?: QueueSink$.Outbound | undefined;
        authSession?: AuthSession$.Outbound | undefined;
        proxy?: Proxy$.Outbound | undefined;
        metadata?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueueInput> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            configuration: QueueConfiguration$.outboundSchema,
            sink: QueueSink$.outboundSchema.optional(),
            authSession: AuthSession$.outboundSchema.optional(),
            proxy: Proxy$.outboundSchema.optional(),
            metadata: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                configuration: v.configuration,
                ...(v.sink === undefined ? null : { sink: v.sink }),
                ...(v.authSession === undefined ? null : { authSession: v.authSession }),
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });
}
