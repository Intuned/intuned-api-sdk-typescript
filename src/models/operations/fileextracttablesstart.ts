/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type FileExtractTablesStartGlobals = {
    /**
     * Your workspace ID. [How to find it](https://docs.intunedhq.com/docs/management/workspace#finding-your-workspace-id)?
     */
    workspaceId: string;
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
