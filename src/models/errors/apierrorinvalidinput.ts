/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { collectExtraKeys as collectExtraKeys$ } from "../../lib/schemas.js";
import * as z from "zod";

/**
 * Invalid input error
 */
export type ApiErrorInvalidInputData = {
    message?: string | undefined;
    /**
     * error details
     */
    details?: any | undefined;

    additionalProperties: { [k: string]: any };
};

/**
 * Invalid input error
 */
export class ApiErrorInvalidInput extends Error {
    /**
     * error details
     */
    details?: any | undefined;
    additionalProperties: { [k: string]: any } = {};

    /** The original data that was passed to this error instance. */
    data$: ApiErrorInvalidInputData;

    constructor(err: ApiErrorInvalidInputData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.details != null) {
            this.details = err.details;
        }
        if (err.additionalProperties != null) {
            this.additionalProperties = err.additionalProperties;
        }

        this.name = "ApiErrorInvalidInput";
    }
}

/** @internal */
export const ApiErrorInvalidInput$inboundSchema: z.ZodType<
    ApiErrorInvalidInput,
    z.ZodTypeDef,
    unknown
> = collectExtraKeys$(
    z
        .object({
            message: z.string().optional(),
            details: z.any().optional(),
        })
        .catchall(z.any()),
    "additionalProperties"
).transform((v) => {
    return new ApiErrorInvalidInput(v);
});

/** @internal */
export type ApiErrorInvalidInput$Outbound = {
    message?: string | undefined;
    details?: any | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const ApiErrorInvalidInput$outboundSchema: z.ZodType<
    ApiErrorInvalidInput$Outbound,
    z.ZodTypeDef,
    ApiErrorInvalidInput
> = z
    .instanceof(ApiErrorInvalidInput)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                message: z.string().optional(),
                details: z.any().optional(),
                additionalProperties: z.record(z.any()),
            })
            .transform((v) => {
                return {
                    ...v.additionalProperties,
                    ...remap$(v, {
                        additionalProperties: null,
                    }),
                };
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiErrorInvalidInput$ {
    /** @deprecated use `ApiErrorInvalidInput$inboundSchema` instead. */
    export const inboundSchema = ApiErrorInvalidInput$inboundSchema;
    /** @deprecated use `ApiErrorInvalidInput$outboundSchema` instead. */
    export const outboundSchema = ApiErrorInvalidInput$outboundSchema;
    /** @deprecated use `ApiErrorInvalidInput$Outbound` instead. */
    export type Outbound = ApiErrorInvalidInput$Outbound;
}
