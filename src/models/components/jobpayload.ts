/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { APIParameters, APIParameters$ } from "./apiparameters.js";
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
     * The parameters to be passed to the API.
     */
    parameters?: APIParameters | undefined;
};

/** @internal */
export namespace JobPayload$ {
    export const inboundSchema: z.ZodType<JobPayload, z.ZodTypeDef, unknown> = z.object({
        apiName: z.string(),
        parameters: APIParameters$.inboundSchema.optional(),
    });

    export type Outbound = {
        apiName: string;
        parameters?: APIParameters$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPayload> = z.object({
        apiName: z.string(),
        parameters: APIParameters$.outboundSchema.optional(),
    });
}
