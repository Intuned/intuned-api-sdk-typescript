/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  JobCalendarValue,
  JobCalendarValue$inboundSchema,
  JobCalendarValue$Outbound,
  JobCalendarValue$outboundSchema,
} from "./jobcalendarvalue.js";

export type Every = number | string;

/**
 * An interval object, which represents a period to trigger the job. The interval is relative to the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).
 */
export type Intervals = {
  every: number | string;
};

/**
 * A calendar object. It is similar to a cron string, but more verbose.
 */
export type Calendars = {
  second?: JobCalendarValue | undefined;
  minute?: JobCalendarValue | undefined;
  hour?: JobCalendarValue | undefined;
  dayOfMonth?: JobCalendarValue | undefined;
  dayOfWeek?: JobCalendarValue | undefined;
  month?: JobCalendarValue | undefined;
  year?: JobCalendarValue | undefined;
  /**
   * A comment to describe what the calendar is supposed to represent
   */
  comment?: string | undefined;
};

/**
 * Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time.
 */
export type JobSchedule = {
  /**
   * An array of interval objects
   */
  intervals?: Array<Intervals> | undefined;
  /**
   * An array of calendar objects
   */
  calendars?: Array<Calendars> | undefined;
};

/** @internal */
export const Every$inboundSchema: z.ZodType<Every, z.ZodTypeDef, unknown> = z
  .union([z.number(), z.string()]);

/** @internal */
export type Every$Outbound = number | string;

/** @internal */
export const Every$outboundSchema: z.ZodType<
  Every$Outbound,
  z.ZodTypeDef,
  Every
> = z.union([z.number(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Every$ {
  /** @deprecated use `Every$inboundSchema` instead. */
  export const inboundSchema = Every$inboundSchema;
  /** @deprecated use `Every$outboundSchema` instead. */
  export const outboundSchema = Every$outboundSchema;
  /** @deprecated use `Every$Outbound` instead. */
  export type Outbound = Every$Outbound;
}

/** @internal */
export const Intervals$inboundSchema: z.ZodType<
  Intervals,
  z.ZodTypeDef,
  unknown
> = z.object({
  every: z.union([z.number(), z.string()]),
});

/** @internal */
export type Intervals$Outbound = {
  every: number | string;
};

/** @internal */
export const Intervals$outboundSchema: z.ZodType<
  Intervals$Outbound,
  z.ZodTypeDef,
  Intervals
> = z.object({
  every: z.union([z.number(), z.string()]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Intervals$ {
  /** @deprecated use `Intervals$inboundSchema` instead. */
  export const inboundSchema = Intervals$inboundSchema;
  /** @deprecated use `Intervals$outboundSchema` instead. */
  export const outboundSchema = Intervals$outboundSchema;
  /** @deprecated use `Intervals$Outbound` instead. */
  export type Outbound = Intervals$Outbound;
}

/** @internal */
export const Calendars$inboundSchema: z.ZodType<
  Calendars,
  z.ZodTypeDef,
  unknown
> = z.object({
  second: JobCalendarValue$inboundSchema.optional(),
  minute: JobCalendarValue$inboundSchema.optional(),
  hour: JobCalendarValue$inboundSchema.optional(),
  dayOfMonth: JobCalendarValue$inboundSchema.optional(),
  dayOfWeek: JobCalendarValue$inboundSchema.optional(),
  month: JobCalendarValue$inboundSchema.optional(),
  year: JobCalendarValue$inboundSchema.optional(),
  comment: z.string().optional(),
});

/** @internal */
export type Calendars$Outbound = {
  second?: JobCalendarValue$Outbound | undefined;
  minute?: JobCalendarValue$Outbound | undefined;
  hour?: JobCalendarValue$Outbound | undefined;
  dayOfMonth?: JobCalendarValue$Outbound | undefined;
  dayOfWeek?: JobCalendarValue$Outbound | undefined;
  month?: JobCalendarValue$Outbound | undefined;
  year?: JobCalendarValue$Outbound | undefined;
  comment?: string | undefined;
};

/** @internal */
export const Calendars$outboundSchema: z.ZodType<
  Calendars$Outbound,
  z.ZodTypeDef,
  Calendars
> = z.object({
  second: JobCalendarValue$outboundSchema.optional(),
  minute: JobCalendarValue$outboundSchema.optional(),
  hour: JobCalendarValue$outboundSchema.optional(),
  dayOfMonth: JobCalendarValue$outboundSchema.optional(),
  dayOfWeek: JobCalendarValue$outboundSchema.optional(),
  month: JobCalendarValue$outboundSchema.optional(),
  year: JobCalendarValue$outboundSchema.optional(),
  comment: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Calendars$ {
  /** @deprecated use `Calendars$inboundSchema` instead. */
  export const inboundSchema = Calendars$inboundSchema;
  /** @deprecated use `Calendars$outboundSchema` instead. */
  export const outboundSchema = Calendars$outboundSchema;
  /** @deprecated use `Calendars$Outbound` instead. */
  export type Outbound = Calendars$Outbound;
}

/** @internal */
export const JobSchedule$inboundSchema: z.ZodType<
  JobSchedule,
  z.ZodTypeDef,
  unknown
> = z.object({
  intervals: z.array(z.lazy(() => Intervals$inboundSchema)).optional(),
  calendars: z.array(z.lazy(() => Calendars$inboundSchema)).optional(),
});

/** @internal */
export type JobSchedule$Outbound = {
  intervals?: Array<Intervals$Outbound> | undefined;
  calendars?: Array<Calendars$Outbound> | undefined;
};

/** @internal */
export const JobSchedule$outboundSchema: z.ZodType<
  JobSchedule$Outbound,
  z.ZodTypeDef,
  JobSchedule
> = z.object({
  intervals: z.array(z.lazy(() => Intervals$outboundSchema)).optional(),
  calendars: z.array(z.lazy(() => Calendars$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobSchedule$ {
  /** @deprecated use `JobSchedule$inboundSchema` instead. */
  export const inboundSchema = JobSchedule$inboundSchema;
  /** @deprecated use `JobSchedule$outboundSchema` instead. */
  export const outboundSchema = JobSchedule$outboundSchema;
  /** @deprecated use `JobSchedule$Outbound` instead. */
  export type Outbound = JobSchedule$Outbound;
}
