/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class ExtractMarkdown extends ClientSDK {
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
     * Extract Markdown - Sync
     *
     * @remarks
     * Extracts markdown from a file. Supported file types are image, pdf (more coming soon!).
     * It accepts the file.
     */
    async sync(
        file: components.FileT,
        options?: RequestOptions
    ): Promise<components.MarkdownExtractionSyncResponse> {
        const input$: components.GeneralExtractRequest = {
            file: file,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.GeneralExtractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const pathParams$ = {
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/{workspaceId}/files/extract/markdown")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "fileExtractMarkdownSync",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.MarkdownExtractionSyncResponse>()
            .json(200, components.MarkdownExtractionSyncResponse$inboundSchema)
            .json(400, errors.ApiErrorInvalidInput$inboundSchema, { err: true })
            .json(401, errors.ApiErrorUnauthorized$inboundSchema, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Extract Markdown - Async Start
     *
     * @remarks
     * Starts an asynchronous operation to extract markdown from a file. Supported file types are image, pdf (more coming soon!).
     * This methods accepts the file.
     * The API responds with an ID to track the operation status and retrieve the result.
     */
    async start(
        file: components.FileT,
        options?: RequestOptions
    ): Promise<components.AsyncFilePendingResponse> {
        const input$: components.GeneralExtractRequest = {
            file: file,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.GeneralExtractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const pathParams$ = {
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/{workspaceId}/files/extract/markdown/start")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "fileExtractMarkdownStart",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.AsyncFilePendingResponse>()
            .json(201, components.AsyncFilePendingResponse$inboundSchema)
            .json(400, errors.ApiErrorInvalidInput$inboundSchema, { err: true })
            .json(401, errors.ApiErrorUnauthorized$inboundSchema, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Extract Markdown - Async Result
     *
     * @remarks
     * Gets the result of the markdown extraction operation using the operation ID.
     */
    async result(
        operationId: string,
        options?: RequestOptions
    ): Promise<components.MarkdownExtractionAsyncResponse> {
        const input$: operations.FileExtractMarkdownResultRequest = {
            operationId: operationId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.FileExtractMarkdownResultRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            operationId: encodeSimple$("operationId", payload$.operationId, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: encodeSimple$("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/files/extract/markdown/{operationId}/result"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "fileExtractMarkdownResult",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.MarkdownExtractionAsyncResponse>()
            .json(200, components.MarkdownExtractionAsyncResponse$inboundSchema)
            .json(400, errors.ApiErrorInvalidInput$inboundSchema, { err: true })
            .json(401, errors.ApiErrorUnauthorized$inboundSchema, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
