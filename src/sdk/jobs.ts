/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import { Runs } from "./runs";
import * as z from "zod";

export class Jobs extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _runs?: Runs;
    get runs(): Runs {
        return (this._runs ??= new Runs(this.options$));
    }

    /**
     * Get Jobs
     *
     * @remarks
     * Gets all jobs in a project.
     */
    async all(projectName: string, options?: RequestOptions): Promise<Array<components.Job>> {
        const input$: operations.GetJobsRequest = {
            projectName: projectName,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetJobsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/{workspaceId}/projects/{projectName}/jobs")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getJobs",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.Job>>()
            .json(200, z.array(components.Job$.inboundSchema))
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create Job
     *
     * @remarks
     * Creates a new job for a project.
     */
    async create(
        projectName: string,
        jobInput: components.JobInput,
        options?: RequestOptions
    ): Promise<components.CreateJob> {
        const input$: operations.CreateJobRequest = {
            projectName: projectName,
            jobInput: jobInput,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateJobRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.JobInput, { explode: true });

        const pathParams$ = {
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/{workspaceId}/projects/{projectName}/jobs")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createJob",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.CreateJob>()
            .json(201, components.CreateJob$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Job
     *
     * @remarks
     * Gets a job in a project by ID.
     */
    async one(
        projectName: string,
        jobId: string,
        options?: RequestOptions
    ): Promise<components.Job> {
        const input$: operations.GetJobRequest = {
            projectName: projectName,
            jobId: jobId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetJobRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            jobId: encodeSimple$("jobId", payload$.jobId, {
                explode: false,
                charEncoding: "percent",
            }),
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/projects/{projectName}/jobs/{jobId}"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getJob",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Job>()
            .json(200, components.Job$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete Job
     *
     * @remarks
     * Deletes a job by ID.
     */
    async delete(projectName: string, jobId: string, options?: RequestOptions): Promise<void> {
        const input$: operations.DeleteJobRequest = {
            projectName: projectName,
            jobId: jobId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteJobRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            jobId: encodeSimple$("jobId", payload$.jobId, {
                explode: false,
                charEncoding: "percent",
            }),
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/projects/{projectName}/jobs/{jobId}"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "deleteJob",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Pause Job
     *
     * @remarks
     * Pauses a job. Will pause any job runs and the job schedule if applicable.
     */
    async pause(
        projectName: string,
        jobId: string,
        options?: RequestOptions
    ): Promise<components.PauseJob> {
        const input$: operations.PauseJobRequest = {
            projectName: projectName,
            jobId: jobId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PauseJobRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            jobId: encodeSimple$("jobId", payload$.jobId, {
                explode: false,
                charEncoding: "percent",
            }),
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/projects/{projectName}/jobs/{jobId}/pause"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "pauseJob",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.PauseJob>()
            .json(200, components.PauseJob$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Resume Job
     *
     * @remarks
     * Resumes a paused job. Will resume any paused job runs and the job schedule if applicable.
     */
    async resume(
        projectName: string,
        jobId: string,
        options?: RequestOptions
    ): Promise<components.ResumeJob> {
        const input$: operations.ResumeJobRequest = {
            projectName: projectName,
            jobId: jobId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ResumeJobRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            jobId: encodeSimple$("jobId", payload$.jobId, {
                explode: false,
                charEncoding: "percent",
            }),
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/projects/{projectName}/jobs/{jobId}/resume"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "resumeJob",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.ResumeJob>()
            .json(200, components.ResumeJob$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Trigger Job
     *
     * @remarks
     * Manually triggers a job run for a job. If the job is paused, the trigger fails.
     */
    async trigger(
        projectName: string,
        jobId: string,
        options?: RequestOptions
    ): Promise<components.TriggerJob> {
        const input$: operations.TriggerJobRequest = {
            projectName: projectName,
            jobId: jobId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TriggerJobRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            jobId: encodeSimple$("jobId", payload$.jobId, {
                explode: false,
                charEncoding: "percent",
            }),
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/projects/{projectName}/jobs/{jobId}/trigger"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "triggerJob",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.TriggerJob>()
            .json(200, components.TriggerJob$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
