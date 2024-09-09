/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  TextAiExtractionModel,
  TextAiExtractionModel$inboundSchema,
  TextAiExtractionModel$outboundSchema,
} from "./textaiextractionmodel.js";

/**
 * The type of extraction to perform.
 */
export const ExtractStructuredDataMarkdownStrategyType = {
  Markdown: "MARKDOWN",
} as const;
/**
 * The type of extraction to perform.
 */
export type ExtractStructuredDataMarkdownStrategyType = ClosedEnum<
  typeof ExtractStructuredDataMarkdownStrategyType
>;

export type ExtractStructuredDataMarkdownStrategy = {
  /**
   * The type of extraction to perform.
   */
  type: ExtractStructuredDataMarkdownStrategyType;
  /**
   * AI model to use for extraction
   */
  model: TextAiExtractionModel;
};

/** @internal */
export const ExtractStructuredDataMarkdownStrategyType$inboundSchema:
  z.ZodNativeEnum<typeof ExtractStructuredDataMarkdownStrategyType> = z
    .nativeEnum(ExtractStructuredDataMarkdownStrategyType);

/** @internal */
export const ExtractStructuredDataMarkdownStrategyType$outboundSchema:
  z.ZodNativeEnum<typeof ExtractStructuredDataMarkdownStrategyType> =
    ExtractStructuredDataMarkdownStrategyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExtractStructuredDataMarkdownStrategyType$ {
  /** @deprecated use `ExtractStructuredDataMarkdownStrategyType$inboundSchema` instead. */
  export const inboundSchema =
    ExtractStructuredDataMarkdownStrategyType$inboundSchema;
  /** @deprecated use `ExtractStructuredDataMarkdownStrategyType$outboundSchema` instead. */
  export const outboundSchema =
    ExtractStructuredDataMarkdownStrategyType$outboundSchema;
}

/** @internal */
export const ExtractStructuredDataMarkdownStrategy$inboundSchema: z.ZodType<
  ExtractStructuredDataMarkdownStrategy,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ExtractStructuredDataMarkdownStrategyType$inboundSchema,
  model: TextAiExtractionModel$inboundSchema,
});

/** @internal */
export type ExtractStructuredDataMarkdownStrategy$Outbound = {
  type: string;
  model: string;
};

/** @internal */
export const ExtractStructuredDataMarkdownStrategy$outboundSchema: z.ZodType<
  ExtractStructuredDataMarkdownStrategy$Outbound,
  z.ZodTypeDef,
  ExtractStructuredDataMarkdownStrategy
> = z.object({
  type: ExtractStructuredDataMarkdownStrategyType$outboundSchema,
  model: TextAiExtractionModel$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExtractStructuredDataMarkdownStrategy$ {
  /** @deprecated use `ExtractStructuredDataMarkdownStrategy$inboundSchema` instead. */
  export const inboundSchema =
    ExtractStructuredDataMarkdownStrategy$inboundSchema;
  /** @deprecated use `ExtractStructuredDataMarkdownStrategy$outboundSchema` instead. */
  export const outboundSchema =
    ExtractStructuredDataMarkdownStrategy$outboundSchema;
  /** @deprecated use `ExtractStructuredDataMarkdownStrategy$Outbound` instead. */
  export type Outbound = ExtractStructuredDataMarkdownStrategy$Outbound;
}
