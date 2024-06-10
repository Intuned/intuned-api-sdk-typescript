/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import { Retry, Retry$ } from "./retry";
import * as z from "zod";

/**
 * The run mode of the queue. Currently, only `Default` is supported, which is first in first out.
 */
export const QueueConfigurationRunMode = {
    Default: "Default",
} as const;
/**
 * The run mode of the queue. Currently, only `Default` is supported, which is first in first out.
 */
export type QueueConfigurationRunMode = ClosedEnum<typeof QueueConfigurationRunMode>;

/**
 * A rate limit. The queue will not exceed the amount of items defined in the limit in the provided duration.
 */
export type RateLimits = {
    /**
     * The maximum number of items to be executed within the duration.
     */
    limit: number;
    /**
     * The duration of the rate limit. ms-formatted string.
     */
    duration: string;
};

/**
 * Execution schedule for the queue.
 */
export type Schedule = {
    /**
     * Cron string representing the pause schedule. At this schedule, the queue will pause execution.
     */
    pause: string;
    /**
     * Cron string representing the resume schedule. At this schedule, the queue will resume execution.
     */
    resume: string;
};

export type MsFormattedRange = {
    /**
     * The minimum duration to wait. An ms-formatted string.
     */
    min: string;
    /**
     * The maximum duration to wait. An ms-formatted string.
     */
    max: string;
};

export type MillisecondsRange = {
    /**
     * The minimum duration to wait in milliseconds.
     */
    min: number;
    /**
     * The maximum duration to wait in milliseconds.
     */
    max: number;
};

/**
 * A random wait duration range added between executed items. The range can be in milliseconds or ms-formatted strings.
 */
export type RandomWait = MillisecondsRange | MsFormattedRange;

/**
 * The configuration of the queue. Configure retries, rate limits, execution schedules and waits between items.
 */
export type QueueConfiguration = {
    /**
     * The run mode of the queue. Currently, only `Default` is supported, which is first in first out.
     */
    runMode: QueueConfigurationRunMode;
    /**
     * Retry policy configurations
     */
    retry?: Retry | undefined;
    /**
     * An array of rate limits imposed on the queue. The limits are imposed at the same time (for example if you have a limit of 10 items per hour and 2 items per minute, 2 items will be executed in the first minute and 2 more in the following minute until the 10 per hour limit is reached)
     */
    rateLimits?: Array<RateLimits> | undefined;
    /**
     * Execution schedule for the queue.
     */
    schedule?: Schedule | undefined;
    /**
     * A random wait duration range added between executed items. The range can be in milliseconds or ms-formatted strings.
     */
    randomWait?: MillisecondsRange | MsFormattedRange | undefined;
};

/** @internal */
export namespace QueueConfigurationRunMode$ {
    export const inboundSchema = z.nativeEnum(QueueConfigurationRunMode);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RateLimits$ {
    export const inboundSchema: z.ZodType<RateLimits, z.ZodTypeDef, unknown> = z.object({
        limit: z.number(),
        duration: z.string(),
    });

    export type Outbound = {
        limit: number;
        duration: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RateLimits> = z.object({
        limit: z.number(),
        duration: z.string(),
    });
}

/** @internal */
export namespace Schedule$ {
    export const inboundSchema: z.ZodType<Schedule, z.ZodTypeDef, unknown> = z.object({
        pause: z.string(),
        resume: z.string(),
    });

    export type Outbound = {
        pause: string;
        resume: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Schedule> = z.object({
        pause: z.string(),
        resume: z.string(),
    });
}

/** @internal */
export namespace MsFormattedRange$ {
    export const inboundSchema: z.ZodType<MsFormattedRange, z.ZodTypeDef, unknown> = z.object({
        min: z.string(),
        max: z.string(),
    });

    export type Outbound = {
        min: string;
        max: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MsFormattedRange> = z.object({
        min: z.string(),
        max: z.string(),
    });
}

/** @internal */
export namespace MillisecondsRange$ {
    export const inboundSchema: z.ZodType<MillisecondsRange, z.ZodTypeDef, unknown> = z.object({
        min: z.number(),
        max: z.number(),
    });

    export type Outbound = {
        min: number;
        max: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MillisecondsRange> = z.object({
        min: z.number(),
        max: z.number(),
    });
}

/** @internal */
export namespace RandomWait$ {
    export const inboundSchema: z.ZodType<RandomWait, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => MillisecondsRange$.inboundSchema),
        z.lazy(() => MsFormattedRange$.inboundSchema),
    ]);

    export type Outbound = MillisecondsRange$.Outbound | MsFormattedRange$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RandomWait> = z.union([
        z.lazy(() => MillisecondsRange$.outboundSchema),
        z.lazy(() => MsFormattedRange$.outboundSchema),
    ]);
}

/** @internal */
export namespace QueueConfiguration$ {
    export const inboundSchema: z.ZodType<QueueConfiguration, z.ZodTypeDef, unknown> = z.object({
        runMode: QueueConfigurationRunMode$.inboundSchema,
        retry: Retry$.inboundSchema.optional(),
        rateLimits: z.array(z.lazy(() => RateLimits$.inboundSchema)).optional(),
        schedule: z.lazy(() => Schedule$.inboundSchema).optional(),
        randomWait: z
            .union([
                z.lazy(() => MillisecondsRange$.inboundSchema),
                z.lazy(() => MsFormattedRange$.inboundSchema),
            ])
            .optional(),
    });

    export type Outbound = {
        runMode: string;
        retry?: Retry$.Outbound | undefined;
        rateLimits?: Array<RateLimits$.Outbound> | undefined;
        schedule?: Schedule$.Outbound | undefined;
        randomWait?: MillisecondsRange$.Outbound | MsFormattedRange$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueueConfiguration> = z.object({
        runMode: QueueConfigurationRunMode$.outboundSchema,
        retry: Retry$.outboundSchema.optional(),
        rateLimits: z.array(z.lazy(() => RateLimits$.outboundSchema)).optional(),
        schedule: z.lazy(() => Schedule$.outboundSchema).optional(),
        randomWait: z
            .union([
                z.lazy(() => MillisecondsRange$.outboundSchema),
                z.lazy(() => MsFormattedRange$.outboundSchema),
            ])
            .optional(),
    });
}
