/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type FileExtractMarkdownResultGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type FileExtractMarkdownResultRequest = {
    /**
     * The ID for the requested file operation. This is obtained from the start request.
     */
    operationId: string;
};

export type FileExtractMarkdownResultResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Result of the operation. Can be pending, completed or failed.
     */
    markdownExtractionAsyncResponse?: components.MarkdownExtractionAsyncResponse | undefined;
};

/** @internal */
export namespace FileExtractMarkdownResultGlobals$ {
    export const inboundSchema: z.ZodType<FileExtractMarkdownResultGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string(),
        });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        FileExtractMarkdownResultGlobals
    > = z.object({
        workspaceId: z.string(),
    });
}

/** @internal */
export namespace FileExtractMarkdownResultRequest$ {
    export const inboundSchema: z.ZodType<FileExtractMarkdownResultRequest, z.ZodTypeDef, unknown> =
        z.object({
            operationId: z.string(),
        });

    export type Outbound = {
        operationId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        FileExtractMarkdownResultRequest
    > = z.object({
        operationId: z.string(),
    });
}

/** @internal */
export namespace FileExtractMarkdownResultResponse$ {
    export const inboundSchema: z.ZodType<
        FileExtractMarkdownResultResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            MarkdownExtractionAsyncResponse:
                components.MarkdownExtractionAsyncResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                MarkdownExtractionAsyncResponse: "markdownExtractionAsyncResponse",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        MarkdownExtractionAsyncResponse?:
            | components.MarkdownExtractionAsyncResponse$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        FileExtractMarkdownResultResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            markdownExtractionAsyncResponse:
                components.MarkdownExtractionAsyncResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                markdownExtractionAsyncResponse: "MarkdownExtractionAsyncResponse",
            });
        });
}
