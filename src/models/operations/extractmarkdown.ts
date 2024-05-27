/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ExtractMarkdownGlobals = {
    /**
     * Workspace Id.
     */
    workspaceId?: string | undefined;
};

export type ExtractMarkdownResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The extracted markdown
     */
    markdownExtractionResponse?: components.MarkdownExtractionResponse | undefined;
};

/** @internal */
export namespace ExtractMarkdownGlobals$ {
    export const inboundSchema: z.ZodType<ExtractMarkdownGlobals, z.ZodTypeDef, unknown> = z
        .object({
            workspaceId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.workspaceId === undefined ? null : { workspaceId: v.workspaceId }),
            };
        });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExtractMarkdownGlobals> = z
        .object({
            workspaceId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.workspaceId === undefined ? null : { workspaceId: v.workspaceId }),
            };
        });
}

/** @internal */
export namespace ExtractMarkdownResponse$ {
    export const inboundSchema: z.ZodType<ExtractMarkdownResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            MarkdownExtractionResponse:
                components.MarkdownExtractionResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.MarkdownExtractionResponse === undefined
                    ? null
                    : { markdownExtractionResponse: v.MarkdownExtractionResponse }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        MarkdownExtractionResponse?: components.MarkdownExtractionResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExtractMarkdownResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            markdownExtractionResponse:
                components.MarkdownExtractionResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.markdownExtractionResponse === undefined
                    ? null
                    : { MarkdownExtractionResponse: v.markdownExtractionResponse }),
            };
        });
}
