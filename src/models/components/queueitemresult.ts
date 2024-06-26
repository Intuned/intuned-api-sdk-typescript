/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CompletedQueueItemResult, CompletedQueueItemResult$ } from "./completedqueueitemresult.js";
import { FailedQueueItemResult, FailedQueueItemResult$ } from "./failedqueueitemresult.js";
import { PendingQueueItemResult, PendingQueueItemResult$ } from "./pendingqueueitemresult.js";
import { QueuedQueueItemResult, QueuedQueueItemResult$ } from "./queuedqueueitemresult.js";
import * as z from "zod";

/**
 * The result of an item execution. Can be queued, pending, completed or failed. Queued means the item has not been processed yet. Pending means the item is currently being processed, and thus cannot be deleted.
 */
export type QueueItemResult =
    | QueuedQueueItemResult
    | PendingQueueItemResult
    | CompletedQueueItemResult
    | FailedQueueItemResult;

/** @internal */
export namespace QueueItemResult$ {
    export const inboundSchema: z.ZodType<QueueItemResult, z.ZodTypeDef, unknown> = z.union([
        QueuedQueueItemResult$.inboundSchema,
        PendingQueueItemResult$.inboundSchema,
        CompletedQueueItemResult$.inboundSchema,
        FailedQueueItemResult$.inboundSchema,
    ]);

    export type Outbound =
        | QueuedQueueItemResult$.Outbound
        | PendingQueueItemResult$.Outbound
        | CompletedQueueItemResult$.Outbound
        | FailedQueueItemResult$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueueItemResult> = z.union([
        QueuedQueueItemResult$.outboundSchema,
        PendingQueueItemResult$.outboundSchema,
        CompletedQueueItemResult$.outboundSchema,
        FailedQueueItemResult$.outboundSchema,
    ]);
}
