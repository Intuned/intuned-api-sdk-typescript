/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { IntunedClientCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Extract Structured Data - Async Start
 *
 * @remarks
 * Starts an asynchronous operation to extract structured data from a file. Supported file types are image, pdf (more coming soon!).
 * It accepts the file and requested schema for the data to be extracted.
 * It responds with an ID to track the operation status and retrieve the result.
 */
export async function filesExtractStructuredDataStart(
    client$: IntunedClientCore,
    file: components.FileT,
    dataSchema: { [k: string]: any },
    strategy?: components.ExtractStructuredDataStrategy | undefined,
    prompt?: string | undefined,
    options?: RequestOptions
): Promise<
    Result<
        components.AsyncFilePendingResponse,
        | errors.ApiErrorInvalidInput
        | errors.ApiErrorUnauthorized
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: components.ExtractStructuredDataRequest = {
        file: file,
        dataSchema: dataSchema,
        strategy: strategy,
        prompt: prompt,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => components.ExtractStructuredDataRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$, { explode: true });

    const pathParams$ = {
        workspaceId: encodeSimple$("workspaceId", client$.options$.workspaceId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/{workspaceId}/files/extract/structuredData/start")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const apiKey$ = await extractSecurity(client$.options$.apiKey);
    const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
    const context = {
        operationID: "fileExtractStructuredDataStart",
        oAuth2Scopes: [],
        securitySource: client$.options$.apiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "404", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        components.AsyncFilePendingResponse,
        | errors.ApiErrorInvalidInput
        | errors.ApiErrorUnauthorized
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(201, components.AsyncFilePendingResponse$inboundSchema),
        m$.jsonErr(400, errors.ApiErrorInvalidInput$inboundSchema),
        m$.jsonErr(401, errors.ApiErrorUnauthorized$inboundSchema),
        m$.fail([404, "4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
