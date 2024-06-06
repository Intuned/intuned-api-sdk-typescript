/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

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
    ): Promise<operations.FileExtractMarkdownSyncResponse> {
        const input$: components.GeneralExtractRequest = {
            file: file,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.GeneralExtractRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const pathParams$ = {
            workspaceId: enc$.encodeSimple("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/{workspaceId}/files/extract/markdown")(
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
            operationID: "fileExtractMarkdownSync",
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

        const [result$] = await this.matcher<operations.FileExtractMarkdownSyncResponse>()
            .json(200, operations.FileExtractMarkdownSyncResponse$, {
                key: "MarkdownExtractionResponse",
            })
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

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
    ): Promise<operations.FileExtractMarkdownStartResponse> {
        const input$: components.GeneralExtractRequest = {
            file: file,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.GeneralExtractRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const pathParams$ = {
            workspaceId: enc$.encodeSimple("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/{workspaceId}/files/extract/markdown/start")(
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
            operationID: "fileExtractMarkdownStart",
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

        const [result$] = await this.matcher<operations.FileExtractMarkdownStartResponse>()
            .json(201, operations.FileExtractMarkdownStartResponse$, {
                key: "AsyncFilePendingResponse",
            })
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

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
    ): Promise<operations.FileExtractMarkdownResultResponse> {
        const input$: operations.FileExtractMarkdownResultRequest = {
            operationId: operationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.FileExtractMarkdownResultRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            operationId: enc$.encodeSimple("operationId", payload$.operationId, {
                explode: false,
                charEncoding: "percent",
            }),
            workspaceId: enc$.encodeSimple("workspaceId", this.options$.workspaceId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/{workspaceId}/files/extract/markdown/{operationId}/result"
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
            operationID: "fileExtractMarkdownResult",
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

        const [result$] = await this.matcher<operations.FileExtractMarkdownResultResponse>()
            .json(200, operations.FileExtractMarkdownResultResponse$, {
                key: "MarkdownExtractionAsyncResponse",
            })
            .json(400, errors.ApiErrorInvalidInput$, { err: true })
            .json(401, errors.ApiErrorUnauthorized$, { err: true })
            .fail([404, "4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
