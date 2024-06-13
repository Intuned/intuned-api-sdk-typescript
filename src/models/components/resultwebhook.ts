/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { JobResultWebhookPayload, JobResultWebhookPayload$ } from "./jobresultwebhookpayload";
import { QueueResultWebhookPayload, QueueResultWebhookPayload$ } from "./queueresultwebhookpayload";
import * as z from "zod";

export type ResultWebhook = QueueResultWebhookPayload | JobResultWebhookPayload;

/** @internal */
export namespace ResultWebhook$ {
    export const inboundSchema: z.ZodType<ResultWebhook, z.ZodTypeDef, unknown> = z.union([
        QueueResultWebhookPayload$.inboundSchema,
        JobResultWebhookPayload$.inboundSchema,
    ]);

    export type Outbound = QueueResultWebhookPayload$.Outbound | JobResultWebhookPayload$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResultWebhook> = z.union([
        QueueResultWebhookPayload$.outboundSchema,
        JobResultWebhookPayload$.outboundSchema,
    ]);
}
