/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import { AiExtractionModel, AiExtractionModel$ } from "./aiextractionmodel.js";
import * as z from "zod";

/**
 * The type of extraction to perform.
 */
export const ExtractStructuredDataStrategyType = {
    Markdown: "MARKDOWN",
} as const;
/**
 * The type of extraction to perform.
 */
export type ExtractStructuredDataStrategyType = ClosedEnum<
    typeof ExtractStructuredDataStrategyType
>;

/**
 * The strategy to extract structured data from a file. Includes the model and type of extraction.
 */
export type ExtractStructuredDataStrategy = {
    /**
     * The type of extraction to perform.
     */
    type: ExtractStructuredDataStrategyType;
    /**
     * AI model to use for extraction
     */
    model: AiExtractionModel;
};

/** @internal */
export namespace ExtractStructuredDataStrategyType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ExtractStructuredDataStrategyType> =
        z.nativeEnum(ExtractStructuredDataStrategyType);
    export const outboundSchema: z.ZodNativeEnum<typeof ExtractStructuredDataStrategyType> =
        inboundSchema;
}

/** @internal */
export namespace ExtractStructuredDataStrategy$ {
    export const inboundSchema: z.ZodType<ExtractStructuredDataStrategy, z.ZodTypeDef, unknown> =
        z.object({
            type: ExtractStructuredDataStrategyType$.inboundSchema,
            model: AiExtractionModel$.inboundSchema,
        });

    export type Outbound = {
        type: string;
        model: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExtractStructuredDataStrategy> =
        z.object({
            type: ExtractStructuredDataStrategyType$.outboundSchema,
            model: AiExtractionModel$.outboundSchema,
        });
}
