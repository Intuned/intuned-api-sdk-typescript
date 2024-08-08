/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    FileSource,
    FileSource$inboundSchema,
    FileSource$Outbound,
    FileSource$outboundSchema,
} from "./filesource.js";
import * as z from "zod";

/**
 * The file type
 */
export const PdfFileType = {
    Pdf: "pdf",
} as const;
/**
 * The file type
 */
export type PdfFileType = ClosedEnum<typeof PdfFileType>;

/**
 * PDF file data to extract from
 */
export type PdfFile = {
    /**
     * The file type
     */
    type: PdfFileType;
    /**
     * The pages to extract from. If not provided, all pages will be extracted (this will affect the cost).
     */
    pages?: Array<number> | undefined;
    source: FileSource;
};

/** @internal */
export const PdfFileType$inboundSchema: z.ZodNativeEnum<typeof PdfFileType> =
    z.nativeEnum(PdfFileType);

/** @internal */
export const PdfFileType$outboundSchema: z.ZodNativeEnum<typeof PdfFileType> =
    PdfFileType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PdfFileType$ {
    /** @deprecated use `PdfFileType$inboundSchema` instead. */
    export const inboundSchema = PdfFileType$inboundSchema;
    /** @deprecated use `PdfFileType$outboundSchema` instead. */
    export const outboundSchema = PdfFileType$outboundSchema;
}

/** @internal */
export const PdfFile$inboundSchema: z.ZodType<PdfFile, z.ZodTypeDef, unknown> = z.object({
    type: PdfFileType$inboundSchema,
    pages: z.array(z.number().int()).optional(),
    source: FileSource$inboundSchema,
});

/** @internal */
export type PdfFile$Outbound = {
    type: string;
    pages?: Array<number> | undefined;
    source: FileSource$Outbound;
};

/** @internal */
export const PdfFile$outboundSchema: z.ZodType<PdfFile$Outbound, z.ZodTypeDef, PdfFile> = z.object({
    type: PdfFileType$outboundSchema,
    pages: z.array(z.number().int()).optional(),
    source: FileSource$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PdfFile$ {
    /** @deprecated use `PdfFile$inboundSchema` instead. */
    export const inboundSchema = PdfFile$inboundSchema;
    /** @deprecated use `PdfFile$outboundSchema` instead. */
    export const outboundSchema = PdfFile$outboundSchema;
    /** @deprecated use `PdfFile$Outbound` instead. */
    export type Outbound = PdfFile$Outbound;
}
