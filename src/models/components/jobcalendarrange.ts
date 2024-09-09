/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Start = number | string;

export type End = number | string;

/**
 * A range of values for a calendar property. The type depends on the property.
 */
export type JobCalendarRange = {
  /**
   * Start of the range
   */
  start: number | string;
  /**
   * End of the range. defaults to `start`.
   */
  end?: number | string | undefined;
  /**
   * Step of the range
   */
  step?: number | undefined;
};

/** @internal */
export const Start$inboundSchema: z.ZodType<Start, z.ZodTypeDef, unknown> = z
  .union([z.number(), z.string()]);

/** @internal */
export type Start$Outbound = number | string;

/** @internal */
export const Start$outboundSchema: z.ZodType<
  Start$Outbound,
  z.ZodTypeDef,
  Start
> = z.union([z.number(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Start$ {
  /** @deprecated use `Start$inboundSchema` instead. */
  export const inboundSchema = Start$inboundSchema;
  /** @deprecated use `Start$outboundSchema` instead. */
  export const outboundSchema = Start$outboundSchema;
  /** @deprecated use `Start$Outbound` instead. */
  export type Outbound = Start$Outbound;
}

/** @internal */
export const End$inboundSchema: z.ZodType<End, z.ZodTypeDef, unknown> = z.union(
  [z.number(), z.string()],
);

/** @internal */
export type End$Outbound = number | string;

/** @internal */
export const End$outboundSchema: z.ZodType<End$Outbound, z.ZodTypeDef, End> = z
  .union([z.number(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace End$ {
  /** @deprecated use `End$inboundSchema` instead. */
  export const inboundSchema = End$inboundSchema;
  /** @deprecated use `End$outboundSchema` instead. */
  export const outboundSchema = End$outboundSchema;
  /** @deprecated use `End$Outbound` instead. */
  export type Outbound = End$Outbound;
}

/** @internal */
export const JobCalendarRange$inboundSchema: z.ZodType<
  JobCalendarRange,
  z.ZodTypeDef,
  unknown
> = z.object({
  start: z.union([z.number(), z.string()]),
  end: z.union([z.number(), z.string()]).optional(),
  step: z.number().default(1),
});

/** @internal */
export type JobCalendarRange$Outbound = {
  start: number | string;
  end?: number | string | undefined;
  step: number;
};

/** @internal */
export const JobCalendarRange$outboundSchema: z.ZodType<
  JobCalendarRange$Outbound,
  z.ZodTypeDef,
  JobCalendarRange
> = z.object({
  start: z.union([z.number(), z.string()]),
  end: z.union([z.number(), z.string()]).optional(),
  step: z.number().default(1),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobCalendarRange$ {
  /** @deprecated use `JobCalendarRange$inboundSchema` instead. */
  export const inboundSchema = JobCalendarRange$inboundSchema;
  /** @deprecated use `JobCalendarRange$outboundSchema` instead. */
  export const outboundSchema = JobCalendarRange$outboundSchema;
  /** @deprecated use `JobCalendarRange$Outbound` instead. */
  export type Outbound = JobCalendarRange$Outbound;
}
