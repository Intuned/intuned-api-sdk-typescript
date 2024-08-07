/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesExtractMarkdownResult } from "../funcs/filesExtractMarkdownResult.js";
import { filesExtractMarkdownStart } from "../funcs/filesExtractMarkdownStart.js";
import { filesExtractMarkdownSync } from "../funcs/filesExtractMarkdownSync.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ExtractMarkdown extends ClientSDK {
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
        return unwrapAsync(filesExtractMarkdownSync(this, file, options));
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
        return unwrapAsync(filesExtractMarkdownStart(this, file, options));
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
        return unwrapAsync(filesExtractMarkdownResult(this, operationId, options));
    }
}
