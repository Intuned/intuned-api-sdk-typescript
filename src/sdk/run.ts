/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class Run extends ClientSDK {
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

    /**
     * Run API - Sync
     *
     * @remarks
     * Runs a project API synchronously.
     */
    async sync(
        projectName: string,
        runProjectApiRequest: components.RunProjectApiRequest,
        options?: RequestOptions
    ): Promise<operations.RunApiSyncResponse> {
        const input$: operations.RunApiSyncRequest = {
            projectName: projectName,
            runProjectApiRequest: runProjectApiRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RunApiSyncRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RunProjectApiRequest, { explode: true });

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
        const path$ = this.templateURLComponent("/{workspaceId}/projects/{projectName}/run")(
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
            operationID: "runApiSync",
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

        const [result$] = await this.matcher<operations.RunApiSyncResponse>()
            .json(200, operations.RunApiSyncResponse$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .json("default", operations.RunApiSyncResponse$)
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Run API - Async Start
     *
     * @remarks
     * Starts a project API run operation
     */
    async start(
        projectName: string,
        runProjectApiRequest: components.RunProjectApiRequest,
        options?: RequestOptions
    ): Promise<components.AsyncRunPendingResponse> {
        const input$: operations.RunApiStartRequest = {
            projectName: projectName,
            runProjectApiRequest: runProjectApiRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RunApiStartRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RunProjectApiRequest, { explode: true });

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
        const path$ = this.templateURLComponent("/{workspaceId}/projects/{projectName}/run/start")(
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
            operationID: "runApiStart",
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

        const [result$] = await this.matcher<components.AsyncRunPendingResponse>()
            .json(201, components.AsyncRunPendingResponse$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Run API - Async Result
     *
     * @remarks
     * Retrieves the result of a started project API run operation.
     */
    async result(
        projectName: string,
        runId: string,
        options?: RequestOptions
    ): Promise<components.AsyncResultResponse> {
        const input$: operations.RunApiResultRequest = {
            projectName: projectName,
            runId: runId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RunApiResultRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            projectName: encodeSimple$("projectName", payload$.projectName, {
                explode: false,
                charEncoding: "percent",
            }),
            runId: encodeSimple$("runId", payload$.runId, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/projects/{projectName}/run/{runId}/result"
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
            operationID: "runApiResult",
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

        const [result$] = await this.matcher<components.AsyncResultResponse>()
            .json(200, components.AsyncResultResponse$)
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
