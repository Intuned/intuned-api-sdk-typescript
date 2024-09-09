/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  ImageAiExtractionModel,
  ImageAiExtractionModel$inboundSchema,
  ImageAiExtractionModel$outboundSchema,
} from "./imageaiextractionmodel.js";

/**
 * The type of extraction to perform.
 */
export const ExtractStructuredDataImageStrategyType = {
  Image: "IMAGE",
} as const;
/**
 * The type of extraction to perform.
 */
export type ExtractStructuredDataImageStrategyType = ClosedEnum<
  typeof ExtractStructuredDataImageStrategyType
>;

export type ExtractStructuredDataImageStrategy = {
  /**
   * The type of extraction to perform.
   */
  type: ExtractStructuredDataImageStrategyType;
  /**
   * AI model to use for extraction
   */
  model: ImageAiExtractionModel;
};

/** @internal */
export const ExtractStructuredDataImageStrategyType$inboundSchema:
  z.ZodNativeEnum<typeof ExtractStructuredDataImageStrategyType> = z.nativeEnum(
    ExtractStructuredDataImageStrategyType,
  );

/** @internal */
export const ExtractStructuredDataImageStrategyType$outboundSchema:
  z.ZodNativeEnum<typeof ExtractStructuredDataImageStrategyType> =
    ExtractStructuredDataImageStrategyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExtractStructuredDataImageStrategyType$ {
  /** @deprecated use `ExtractStructuredDataImageStrategyType$inboundSchema` instead. */
  export const inboundSchema =
    ExtractStructuredDataImageStrategyType$inboundSchema;
  /** @deprecated use `ExtractStructuredDataImageStrategyType$outboundSchema` instead. */
  export const outboundSchema =
    ExtractStructuredDataImageStrategyType$outboundSchema;
}

/** @internal */
export const ExtractStructuredDataImageStrategy$inboundSchema: z.ZodType<
  ExtractStructuredDataImageStrategy,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ExtractStructuredDataImageStrategyType$inboundSchema,
  model: ImageAiExtractionModel$inboundSchema,
});

/** @internal */
export type ExtractStructuredDataImageStrategy$Outbound = {
  type: string;
  model: string;
};

/** @internal */
export const ExtractStructuredDataImageStrategy$outboundSchema: z.ZodType<
  ExtractStructuredDataImageStrategy$Outbound,
  z.ZodTypeDef,
  ExtractStructuredDataImageStrategy
> = z.object({
  type: ExtractStructuredDataImageStrategyType$outboundSchema,
  model: ImageAiExtractionModel$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExtractStructuredDataImageStrategy$ {
  /** @deprecated use `ExtractStructuredDataImageStrategy$inboundSchema` instead. */
  export const inboundSchema = ExtractStructuredDataImageStrategy$inboundSchema;
  /** @deprecated use `ExtractStructuredDataImageStrategy$outboundSchema` instead. */
  export const outboundSchema =
    ExtractStructuredDataImageStrategy$outboundSchema;
  /** @deprecated use `ExtractStructuredDataImageStrategy$Outbound` instead. */
  export type Outbound = ExtractStructuredDataImageStrategy$Outbound;
}
