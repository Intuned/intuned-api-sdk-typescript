/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RunApiResultGlobals = {
  /**
   * Your workspace ID. [How to find it](/docs/guides/general/how-to-get-a-workspace-id)?
   */
  workspaceId?: string | undefined;
};

export type RunApiResultRequest = {
  /**
   * Your project name. It is the name you provide when creating a project.
   */
  projectName: string;
  /**
   * Run ID
   */
  runId: string;
};

/** @internal */
export const RunApiResultGlobals$inboundSchema: z.ZodType<
  RunApiResultGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspaceId: z.string().optional(),
});

/** @internal */
export type RunApiResultGlobals$Outbound = {
  workspaceId?: string | undefined;
};

/** @internal */
export const RunApiResultGlobals$outboundSchema: z.ZodType<
  RunApiResultGlobals$Outbound,
  z.ZodTypeDef,
  RunApiResultGlobals
> = z.object({
  workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunApiResultGlobals$ {
  /** @deprecated use `RunApiResultGlobals$inboundSchema` instead. */
  export const inboundSchema = RunApiResultGlobals$inboundSchema;
  /** @deprecated use `RunApiResultGlobals$outboundSchema` instead. */
  export const outboundSchema = RunApiResultGlobals$outboundSchema;
  /** @deprecated use `RunApiResultGlobals$Outbound` instead. */
  export type Outbound = RunApiResultGlobals$Outbound;
}

/** @internal */
export const RunApiResultRequest$inboundSchema: z.ZodType<
  RunApiResultRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectName: z.string(),
  runId: z.string(),
});

/** @internal */
export type RunApiResultRequest$Outbound = {
  projectName: string;
  runId: string;
};

/** @internal */
export const RunApiResultRequest$outboundSchema: z.ZodType<
  RunApiResultRequest$Outbound,
  z.ZodTypeDef,
  RunApiResultRequest
> = z.object({
  projectName: z.string(),
  runId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunApiResultRequest$ {
  /** @deprecated use `RunApiResultRequest$inboundSchema` instead. */
  export const inboundSchema = RunApiResultRequest$inboundSchema;
  /** @deprecated use `RunApiResultRequest$outboundSchema` instead. */
  export const outboundSchema = RunApiResultRequest$outboundSchema;
  /** @deprecated use `RunApiResultRequest$Outbound` instead. */
  export type Outbound = RunApiResultRequest$Outbound;
}
