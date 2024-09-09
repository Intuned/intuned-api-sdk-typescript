/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateAuthSessionStartGlobals = {
  /**
   * Your workspace ID. [How to find it](/docs/guides/general/how-to-get-a-workspace-id)?
   */
  workspaceId?: string | undefined;
};

export type UpdateAuthSessionStartRequest = {
  /**
   * Your project name. It is the name you provide when creating a project.
   */
  projectName: string;
  /**
   * update authentication session request
   */
  updateAuthSessionRequest: components.UpdateAuthSessionRequest;
};

/** @internal */
export const UpdateAuthSessionStartGlobals$inboundSchema: z.ZodType<
  UpdateAuthSessionStartGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspaceId: z.string().optional(),
});

/** @internal */
export type UpdateAuthSessionStartGlobals$Outbound = {
  workspaceId?: string | undefined;
};

/** @internal */
export const UpdateAuthSessionStartGlobals$outboundSchema: z.ZodType<
  UpdateAuthSessionStartGlobals$Outbound,
  z.ZodTypeDef,
  UpdateAuthSessionStartGlobals
> = z.object({
  workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAuthSessionStartGlobals$ {
  /** @deprecated use `UpdateAuthSessionStartGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateAuthSessionStartGlobals$inboundSchema;
  /** @deprecated use `UpdateAuthSessionStartGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateAuthSessionStartGlobals$outboundSchema;
  /** @deprecated use `UpdateAuthSessionStartGlobals$Outbound` instead. */
  export type Outbound = UpdateAuthSessionStartGlobals$Outbound;
}

/** @internal */
export const UpdateAuthSessionStartRequest$inboundSchema: z.ZodType<
  UpdateAuthSessionStartRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectName: z.string(),
  UpdateAuthSessionRequest: components.UpdateAuthSessionRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateAuthSessionRequest": "updateAuthSessionRequest",
  });
});

/** @internal */
export type UpdateAuthSessionStartRequest$Outbound = {
  projectName: string;
  UpdateAuthSessionRequest: components.UpdateAuthSessionRequest$Outbound;
};

/** @internal */
export const UpdateAuthSessionStartRequest$outboundSchema: z.ZodType<
  UpdateAuthSessionStartRequest$Outbound,
  z.ZodTypeDef,
  UpdateAuthSessionStartRequest
> = z.object({
  projectName: z.string(),
  updateAuthSessionRequest: components.UpdateAuthSessionRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateAuthSessionRequest: "UpdateAuthSessionRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAuthSessionStartRequest$ {
  /** @deprecated use `UpdateAuthSessionStartRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAuthSessionStartRequest$inboundSchema;
  /** @deprecated use `UpdateAuthSessionStartRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAuthSessionStartRequest$outboundSchema;
  /** @deprecated use `UpdateAuthSessionStartRequest$Outbound` instead. */
  export type Outbound = UpdateAuthSessionStartRequest$Outbound;
}
