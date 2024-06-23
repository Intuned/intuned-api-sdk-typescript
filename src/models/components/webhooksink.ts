/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const WebhookSinkType = {
    Webhook: "webhook",
} as const;
export type WebhookSinkType = ClosedEnum<typeof WebhookSinkType>;

/**
 * Webhook sink configuration
 */
export type WebhookSink = {
    type: WebhookSinkType;
    /**
     * The webhook URL.
     */
    url: string;
    /**
     * Additional headers to be sent with the webhook request.
     */
    headers?: { [k: string]: any } | undefined;
};

/** @internal */
export namespace WebhookSinkType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof WebhookSinkType> =
        z.nativeEnum(WebhookSinkType);
    export const outboundSchema: z.ZodNativeEnum<typeof WebhookSinkType> = inboundSchema;
}

/** @internal */
export namespace WebhookSink$ {
    export const inboundSchema: z.ZodType<WebhookSink, z.ZodTypeDef, unknown> = z.object({
        type: WebhookSinkType$.inboundSchema,
        url: z.string(),
        headers: z.record(z.any()).optional(),
    });

    export type Outbound = {
        type: string;
        url: string;
        headers?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WebhookSink> = z.object({
        type: WebhookSinkType$.outboundSchema,
        url: z.string(),
        headers: z.record(z.any()).optional(),
    });
}
