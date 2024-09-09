/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const AddQueueItemStatus = {
  Queued: "queued",
} as const;
export type AddQueueItemStatus = ClosedEnum<typeof AddQueueItemStatus>;

export type AddQueueItem = {
  runId: string;
  status: AddQueueItemStatus;
};

/** @internal */
export const AddQueueItemStatus$inboundSchema: z.ZodNativeEnum<
  typeof AddQueueItemStatus
> = z.nativeEnum(AddQueueItemStatus);

/** @internal */
export const AddQueueItemStatus$outboundSchema: z.ZodNativeEnum<
  typeof AddQueueItemStatus
> = AddQueueItemStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddQueueItemStatus$ {
  /** @deprecated use `AddQueueItemStatus$inboundSchema` instead. */
  export const inboundSchema = AddQueueItemStatus$inboundSchema;
  /** @deprecated use `AddQueueItemStatus$outboundSchema` instead. */
  export const outboundSchema = AddQueueItemStatus$outboundSchema;
}

/** @internal */
export const AddQueueItem$inboundSchema: z.ZodType<
  AddQueueItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  runId: z.string(),
  status: AddQueueItemStatus$inboundSchema,
});

/** @internal */
export type AddQueueItem$Outbound = {
  runId: string;
  status: string;
};

/** @internal */
export const AddQueueItem$outboundSchema: z.ZodType<
  AddQueueItem$Outbound,
  z.ZodTypeDef,
  AddQueueItem
> = z.object({
  runId: z.string(),
  status: AddQueueItemStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddQueueItem$ {
  /** @deprecated use `AddQueueItem$inboundSchema` instead. */
  export const inboundSchema = AddQueueItem$inboundSchema;
  /** @deprecated use `AddQueueItem$outboundSchema` instead. */
  export const outboundSchema = AddQueueItem$outboundSchema;
  /** @deprecated use `AddQueueItem$Outbound` instead. */
  export type Outbound = AddQueueItem$Outbound;
}
