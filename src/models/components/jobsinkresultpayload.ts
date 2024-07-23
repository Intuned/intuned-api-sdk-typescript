/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    WebhookAPIInfo,
    WebhookAPIInfo$inboundSchema,
    WebhookAPIInfo$Outbound,
    WebhookAPIInfo$outboundSchema,
} from "./webhookapiinfo.js";
import * as z from "zod";

/**
 * The project details of the API
 */
export type Project = {
    /**
     * The project ID
     */
    id: string;
    /**
     * The project name
     */
    name: string;
};

/**
 * The auth session used in the run
 */
export type JobSinkResultPayloadAuthSession = {
    /**
     * The ID of the auth session
     */
    id: string;
};

/**
 * The job details of the run
 */
export type ProjectJob = {
    /**
     * The job ID
     */
    id: string;
};

/**
 * The job run details
 */
export type ProjectJobRun = {
    /**
     * The job run ID
     */
    id: string;
};

/**
 * Webhook payload of job run result
 */
export type JobSinkResultPayload = {
    /**
     * Webhook API info
     */
    apiInfo: WebhookAPIInfo;
    /**
     * The workspace ID of the API
     */
    workspaceId: string;
    /**
     * The project details of the API
     */
    project: Project;
    /**
     * The auth session used in the run
     */
    authSession?: JobSinkResultPayloadAuthSession | undefined;
    /**
     * The job details of the run
     */
    projectJob: ProjectJob;
    /**
     * The job run details
     */
    projectJobRun: ProjectJobRun;
};

/** @internal */
export const Project$inboundSchema: z.ZodType<Project, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    name: z.string(),
});

/** @internal */
export type Project$Outbound = {
    id: string;
    name: string;
};

/** @internal */
export const Project$outboundSchema: z.ZodType<Project$Outbound, z.ZodTypeDef, Project> = z.object({
    id: z.string(),
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Project$ {
    /** @deprecated use `Project$inboundSchema` instead. */
    export const inboundSchema = Project$inboundSchema;
    /** @deprecated use `Project$outboundSchema` instead. */
    export const outboundSchema = Project$outboundSchema;
    /** @deprecated use `Project$Outbound` instead. */
    export type Outbound = Project$Outbound;
}

/** @internal */
export const JobSinkResultPayloadAuthSession$inboundSchema: z.ZodType<
    JobSinkResultPayloadAuthSession,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type JobSinkResultPayloadAuthSession$Outbound = {
    id: string;
};

/** @internal */
export const JobSinkResultPayloadAuthSession$outboundSchema: z.ZodType<
    JobSinkResultPayloadAuthSession$Outbound,
    z.ZodTypeDef,
    JobSinkResultPayloadAuthSession
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobSinkResultPayloadAuthSession$ {
    /** @deprecated use `JobSinkResultPayloadAuthSession$inboundSchema` instead. */
    export const inboundSchema = JobSinkResultPayloadAuthSession$inboundSchema;
    /** @deprecated use `JobSinkResultPayloadAuthSession$outboundSchema` instead. */
    export const outboundSchema = JobSinkResultPayloadAuthSession$outboundSchema;
    /** @deprecated use `JobSinkResultPayloadAuthSession$Outbound` instead. */
    export type Outbound = JobSinkResultPayloadAuthSession$Outbound;
}

/** @internal */
export const ProjectJob$inboundSchema: z.ZodType<ProjectJob, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
});

/** @internal */
export type ProjectJob$Outbound = {
    id: string;
};

/** @internal */
export const ProjectJob$outboundSchema: z.ZodType<ProjectJob$Outbound, z.ZodTypeDef, ProjectJob> =
    z.object({
        id: z.string(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectJob$ {
    /** @deprecated use `ProjectJob$inboundSchema` instead. */
    export const inboundSchema = ProjectJob$inboundSchema;
    /** @deprecated use `ProjectJob$outboundSchema` instead. */
    export const outboundSchema = ProjectJob$outboundSchema;
    /** @deprecated use `ProjectJob$Outbound` instead. */
    export type Outbound = ProjectJob$Outbound;
}

/** @internal */
export const ProjectJobRun$inboundSchema: z.ZodType<ProjectJobRun, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
    });

/** @internal */
export type ProjectJobRun$Outbound = {
    id: string;
};

/** @internal */
export const ProjectJobRun$outboundSchema: z.ZodType<
    ProjectJobRun$Outbound,
    z.ZodTypeDef,
    ProjectJobRun
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectJobRun$ {
    /** @deprecated use `ProjectJobRun$inboundSchema` instead. */
    export const inboundSchema = ProjectJobRun$inboundSchema;
    /** @deprecated use `ProjectJobRun$outboundSchema` instead. */
    export const outboundSchema = ProjectJobRun$outboundSchema;
    /** @deprecated use `ProjectJobRun$Outbound` instead. */
    export type Outbound = ProjectJobRun$Outbound;
}

/** @internal */
export const JobSinkResultPayload$inboundSchema: z.ZodType<
    JobSinkResultPayload,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiInfo: WebhookAPIInfo$inboundSchema,
    workspaceId: z.string(),
    project: z.lazy(() => Project$inboundSchema),
    authSession: z.lazy(() => JobSinkResultPayloadAuthSession$inboundSchema).optional(),
    projectJob: z.lazy(() => ProjectJob$inboundSchema),
    projectJobRun: z.lazy(() => ProjectJobRun$inboundSchema),
});

/** @internal */
export type JobSinkResultPayload$Outbound = {
    apiInfo: WebhookAPIInfo$Outbound;
    workspaceId: string;
    project: Project$Outbound;
    authSession?: JobSinkResultPayloadAuthSession$Outbound | undefined;
    projectJob: ProjectJob$Outbound;
    projectJobRun: ProjectJobRun$Outbound;
};

/** @internal */
export const JobSinkResultPayload$outboundSchema: z.ZodType<
    JobSinkResultPayload$Outbound,
    z.ZodTypeDef,
    JobSinkResultPayload
> = z.object({
    apiInfo: WebhookAPIInfo$outboundSchema,
    workspaceId: z.string(),
    project: z.lazy(() => Project$outboundSchema),
    authSession: z.lazy(() => JobSinkResultPayloadAuthSession$outboundSchema).optional(),
    projectJob: z.lazy(() => ProjectJob$outboundSchema),
    projectJobRun: z.lazy(() => ProjectJobRun$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobSinkResultPayload$ {
    /** @deprecated use `JobSinkResultPayload$inboundSchema` instead. */
    export const inboundSchema = JobSinkResultPayload$inboundSchema;
    /** @deprecated use `JobSinkResultPayload$outboundSchema` instead. */
    export const outboundSchema = JobSinkResultPayload$outboundSchema;
    /** @deprecated use `JobSinkResultPayload$Outbound` instead. */
    export type Outbound = JobSinkResultPayload$Outbound;
}