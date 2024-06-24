/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import { FileSource, FileSource$ } from "./filesource.js";
import * as z from "zod";

/**
 * The file type
 */
export const Type = {
    Image: "image",
} as const;
/**
 * The file type
 */
export type Type = ClosedEnum<typeof Type>;

/**
 * Image file data to extract from
 */
export type ImageFile = {
    /**
     * The file type
     */
    type: Type;
    source: FileSource;
};

/** @internal */
export namespace Type$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);
    export const outboundSchema: z.ZodNativeEnum<typeof Type> = inboundSchema;
}

/** @internal */
export namespace ImageFile$ {
    export const inboundSchema: z.ZodType<ImageFile, z.ZodTypeDef, unknown> = z.object({
        type: Type$.inboundSchema,
        source: FileSource$.inboundSchema,
    });

    export type Outbound = {
        type: string;
        source: FileSource$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImageFile> = z.object({
        type: Type$.outboundSchema,
        source: FileSource$.outboundSchema,
    });
}
