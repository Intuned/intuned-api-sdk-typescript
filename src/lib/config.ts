/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Base url for intuned api.
     */
    "https://app.intuned.io/api/v1/workspace",
] as const;

export type SDKOptions = {
    apiKey?: string | (() => Promise<string>);

    /**
     * Allows setting the workspaceId parameter for all supported operations
     */
    workspaceId?: string | undefined;

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Params = {};

    if (!serverURL) {
        const serverIdx = options.serverIdx ?? 0;
        if (serverIdx < 0 || serverIdx >= ServerList.length) {
            throw new Error(`Invalid server index ${serverIdx}`);
        }
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "0.0.1",
    sdkVersion: "0.3.9",
    genVersion: "2.390.0",
    userAgent: "speakeasy-sdk/typescript 0.3.9 2.390.0 0.0.1 @intuned/client",
} as const;
