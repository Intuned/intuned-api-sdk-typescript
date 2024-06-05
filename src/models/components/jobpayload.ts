/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A payload to be executed by the job
 */
export type JobPayload = {
    /**
     * The name of the API to be executed. This is the file path relative to the `api` folder inside your project.
     */
    apiName: string;
    /**
     * The parameters to the API to be executed.
     */
    parameters?: { [k: string]: any } | undefined;
};

/** @internal */
export namespace JobPayload$ {
    export const inboundSchema: z.ZodType<JobPayload, z.ZodTypeDef, unknown> = z.object({
        apiName: z.string(),
        parameters: z.record(z.any()).optional(),
    });

    export type Outbound = {
        apiName: string;
        parameters?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPayload> = z.object({
        apiName: z.string(),
        parameters: z.record(z.any()).optional(),
    });
}
