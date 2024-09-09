/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetJobRunsGlobals = {
  /**
   * Your workspace ID. [How to find it](/docs/guides/general/how-to-get-a-workspace-id)?
   */
  workspaceId?: string | undefined;
};

export type GetJobRunsRequest = {
  /**
   * Your project name. It is the name you provide when creating a project.
   */
  projectName: string;
  /**
   * Your job ID. It is the ID of the job you provide when creating it.
   */
  jobId: string;
};

/** @internal */
export const GetJobRunsGlobals$inboundSchema: z.ZodType<
  GetJobRunsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspaceId: z.string().optional(),
});

/** @internal */
export type GetJobRunsGlobals$Outbound = {
  workspaceId?: string | undefined;
};

/** @internal */
export const GetJobRunsGlobals$outboundSchema: z.ZodType<
  GetJobRunsGlobals$Outbound,
  z.ZodTypeDef,
  GetJobRunsGlobals
> = z.object({
  workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobRunsGlobals$ {
  /** @deprecated use `GetJobRunsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetJobRunsGlobals$inboundSchema;
  /** @deprecated use `GetJobRunsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetJobRunsGlobals$outboundSchema;
  /** @deprecated use `GetJobRunsGlobals$Outbound` instead. */
  export type Outbound = GetJobRunsGlobals$Outbound;
}

/** @internal */
export const GetJobRunsRequest$inboundSchema: z.ZodType<
  GetJobRunsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectName: z.string(),
  jobId: z.string(),
});

/** @internal */
export type GetJobRunsRequest$Outbound = {
  projectName: string;
  jobId: string;
};

/** @internal */
export const GetJobRunsRequest$outboundSchema: z.ZodType<
  GetJobRunsRequest$Outbound,
  z.ZodTypeDef,
  GetJobRunsRequest
> = z.object({
  projectName: z.string(),
  jobId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobRunsRequest$ {
  /** @deprecated use `GetJobRunsRequest$inboundSchema` instead. */
  export const inboundSchema = GetJobRunsRequest$inboundSchema;
  /** @deprecated use `GetJobRunsRequest$outboundSchema` instead. */
  export const outboundSchema = GetJobRunsRequest$outboundSchema;
  /** @deprecated use `GetJobRunsRequest$Outbound` instead. */
  export type Outbound = GetJobRunsRequest$Outbound;
}
