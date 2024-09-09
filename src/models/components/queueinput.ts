/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AuthSession,
  AuthSession$inboundSchema,
  AuthSession$Outbound,
  AuthSession$outboundSchema,
} from "./authsession.js";
import {
  QueueConfiguration,
  QueueConfiguration$inboundSchema,
  QueueConfiguration$Outbound,
  QueueConfiguration$outboundSchema,
} from "./queueconfiguration.js";
import {
  WebhookSink,
  WebhookSink$inboundSchema,
  WebhookSink$Outbound,
  WebhookSink$outboundSchema,
} from "./webhooksink.js";

export type QueueInput = {
  /**
   * The queue ID. Has to be a valid URL slug.
   */
  id?: string | undefined;
  /**
   * The queue name.
   */
  name?: string | undefined;
  configuration: QueueConfiguration | null;
  sink?: WebhookSink | null | undefined;
  authSession?: AuthSession | null | undefined;
  metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const QueueInput$inboundSchema: z.ZodType<
  QueueInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  configuration: z.nullable(QueueConfiguration$inboundSchema),
  sink: z.nullable(WebhookSink$inboundSchema).optional(),
  authSession: z.nullable(AuthSession$inboundSchema).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type QueueInput$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  configuration: QueueConfiguration$Outbound | null;
  sink?: WebhookSink$Outbound | null | undefined;
  authSession?: AuthSession$Outbound | null | undefined;
  metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const QueueInput$outboundSchema: z.ZodType<
  QueueInput$Outbound,
  z.ZodTypeDef,
  QueueInput
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  configuration: z.nullable(QueueConfiguration$outboundSchema),
  sink: z.nullable(WebhookSink$outboundSchema).optional(),
  authSession: z.nullable(AuthSession$outboundSchema).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueueInput$ {
  /** @deprecated use `QueueInput$inboundSchema` instead. */
  export const inboundSchema = QueueInput$inboundSchema;
  /** @deprecated use `QueueInput$outboundSchema` instead. */
  export const outboundSchema = QueueInput$outboundSchema;
  /** @deprecated use `QueueInput$Outbound` instead. */
  export type Outbound = QueueInput$Outbound;
}
