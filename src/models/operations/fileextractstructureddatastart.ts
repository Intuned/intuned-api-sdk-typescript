/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractStructuredDataStartGlobals = {
    /**
     * Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)?
     */
    workspaceId?: string | undefined;
};

/** @internal */
export namespace FileExtractStructuredDataStartGlobals$ {
    export const inboundSchema: z.ZodType<
        FileExtractStructuredDataStartGlobals,
        z.ZodTypeDef,
        unknown
    > = z.object({
        workspaceId: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        FileExtractStructuredDataStartGlobals
    > = z.object({
        workspaceId: z.string().optional(),
    });
}
