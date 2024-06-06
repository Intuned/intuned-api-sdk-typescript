/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type FileExtractTablesStartGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
};

export type FileExtractTablesStartResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Operation started successfully
     */
    asyncFilePendingResponse?: components.AsyncFilePendingResponse | undefined;
};

/** @internal */
export namespace FileExtractTablesStartGlobals$ {
    export const inboundSchema: z.ZodType<FileExtractTablesStartGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string(),
        });

    export type Outbound = {
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileExtractTablesStartGlobals> =
        z.object({
            workspaceId: z.string(),
        });
}

/** @internal */
export namespace FileExtractTablesStartResponse$ {
    export const inboundSchema: z.ZodType<FileExtractTablesStartResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AsyncFilePendingResponse: components.AsyncFilePendingResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                AsyncFilePendingResponse: "asyncFilePendingResponse",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AsyncFilePendingResponse?: components.AsyncFilePendingResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileExtractTablesStartResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
                asyncFilePendingResponse:
                    components.AsyncFilePendingResponse$.outboundSchema.optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    httpMeta: "HttpMeta",
                    asyncFilePendingResponse: "AsyncFilePendingResponse",
                });
            });
}
