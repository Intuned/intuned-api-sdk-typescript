/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AuthSessionCreateDoneResult,
    AuthSessionCreateDoneResult$inboundSchema,
    AuthSessionCreateDoneResult$Outbound,
    AuthSessionCreateDoneResult$outboundSchema,
} from "./authsessioncreatedoneresult.js";
import {
    AuthSessionCreateFailedResult,
    AuthSessionCreateFailedResult$inboundSchema,
    AuthSessionCreateFailedResult$Outbound,
    AuthSessionCreateFailedResult$outboundSchema,
} from "./authsessioncreatefailedresult.js";
import {
    AuthSessionCreatePendingResult,
    AuthSessionCreatePendingResult$inboundSchema,
    AuthSessionCreatePendingResult$Outbound,
    AuthSessionCreatePendingResult$outboundSchema,
} from "./authsessioncreatependingresult.js";
import {
    AuthSessionCreateRequestedMoreInfoResult,
    AuthSessionCreateRequestedMoreInfoResult$inboundSchema,
    AuthSessionCreateRequestedMoreInfoResult$Outbound,
    AuthSessionCreateRequestedMoreInfoResult$outboundSchema,
} from "./authsessioncreaterequestedmoreinforesult.js";
import * as z from "zod";

export type AuthSessionCreateResult =
    | AuthSessionCreatePendingResult
    | AuthSessionCreateDoneResult
    | AuthSessionCreateRequestedMoreInfoResult
    | AuthSessionCreateFailedResult;

/** @internal */
export const AuthSessionCreateResult$inboundSchema: z.ZodType<
    AuthSessionCreateResult,
    z.ZodTypeDef,
    unknown
> = z.union([
    AuthSessionCreatePendingResult$inboundSchema,
    AuthSessionCreateDoneResult$inboundSchema,
    AuthSessionCreateRequestedMoreInfoResult$inboundSchema,
    AuthSessionCreateFailedResult$inboundSchema,
]);

/** @internal */
export type AuthSessionCreateResult$Outbound =
    | AuthSessionCreatePendingResult$Outbound
    | AuthSessionCreateDoneResult$Outbound
    | AuthSessionCreateRequestedMoreInfoResult$Outbound
    | AuthSessionCreateFailedResult$Outbound;

/** @internal */
export const AuthSessionCreateResult$outboundSchema: z.ZodType<
    AuthSessionCreateResult$Outbound,
    z.ZodTypeDef,
    AuthSessionCreateResult
> = z.union([
    AuthSessionCreatePendingResult$outboundSchema,
    AuthSessionCreateDoneResult$outboundSchema,
    AuthSessionCreateRequestedMoreInfoResult$outboundSchema,
    AuthSessionCreateFailedResult$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthSessionCreateResult$ {
    /** @deprecated use `AuthSessionCreateResult$inboundSchema` instead. */
    export const inboundSchema = AuthSessionCreateResult$inboundSchema;
    /** @deprecated use `AuthSessionCreateResult$outboundSchema` instead. */
    export const outboundSchema = AuthSessionCreateResult$outboundSchema;
    /** @deprecated use `AuthSessionCreateResult$Outbound` instead. */
    export type Outbound = AuthSessionCreateResult$Outbound;
}
