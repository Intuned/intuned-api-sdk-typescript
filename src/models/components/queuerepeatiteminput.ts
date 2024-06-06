/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { APIParameters, APIParameters$ } from "./apiparameters";
import { AuthSession, AuthSession$ } from "./authsession";
import { Retry, Retry$ } from "./retry";
import * as z from "zod";

/**
 * An item that will be repeatably appended to the queue.
 */
export type QueueRepeatItemInput = {
    /**
     * The name of the API to be executed. This is the file path relative to the `api` folder inside your project.
     */
    apiName: string;
    /**
     * The parameters to be passed to the API.
     */
    parameters?: APIParameters | undefined;
    /**
     * Retry policy configurations
     */
    retry?: Retry | undefined;
    /**
     * Auth session configurations
     */
    authSession?: AuthSession | undefined;
    /**
     * Repeat period, minimum of 10 minutes. On every period, this item will be appended to the queue.
     */
    repeat: string;
};

/** @internal */
export namespace QueueRepeatItemInput$ {
    export const inboundSchema: z.ZodType<QueueRepeatItemInput, z.ZodTypeDef, unknown> = z.object({
        apiName: z.string(),
        parameters: APIParameters$.inboundSchema.optional(),
        retry: Retry$.inboundSchema.optional(),
        authSession: AuthSession$.inboundSchema.optional(),
        repeat: z.string(),
    });

    export type Outbound = {
        apiName: string;
        parameters?: APIParameters$.Outbound | undefined;
        retry?: Retry$.Outbound | undefined;
        authSession?: AuthSession$.Outbound | undefined;
        repeat: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueueRepeatItemInput> = z.object(
        {
            apiName: z.string(),
            parameters: APIParameters$.outboundSchema.optional(),
            retry: Retry$.outboundSchema.optional(),
            authSession: AuthSession$.outboundSchema.optional(),
            repeat: z.string(),
        }
    );
}
