/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesExtractTablesResult } from "../funcs/filesExtractTablesResult.js";
import { filesExtractTablesStart } from "../funcs/filesExtractTablesStart.js";
import { filesExtractTablesSync } from "../funcs/filesExtractTablesSync.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ExtractTables extends ClientSDK {
  /**
   * Extract Tables - Sync
   *
   * @remarks
   * Extracts tables from a file. Supported file types are image, pdf (more coming soon!).
   * It accepts the file.
   */
  async sync(
    file: components.FileT,
    options?: RequestOptions,
  ): Promise<components.TableExtractionSyncResponse> {
    return unwrapAsync(filesExtractTablesSync(
      this,
      file,
      options,
    ));
  }

  /**
   * Extract Tables - Async Start
   *
   * @remarks
   * Starts an asynchronous operation to extract tables from a file. Supported file types are image, pdf (more coming soon!).
   * This methods accepts the file.
   * The API responds with an ID to track the operation status and retrieve the result.
   */
  async start(
    file: components.FileT,
    options?: RequestOptions,
  ): Promise<components.AsyncFilePendingResponse> {
    return unwrapAsync(filesExtractTablesStart(
      this,
      file,
      options,
    ));
  }

  /**
   * Extract Tables - Async Result
   *
   * @remarks
   * Gets the result of the tables extraction operation using the operation ID.
   */
  async result(
    operationId: string,
    options?: RequestOptions,
  ): Promise<components.TableExtractionAsyncResponse> {
    return unwrapAsync(filesExtractTablesResult(
      this,
      operationId,
      options,
    ));
  }
}
