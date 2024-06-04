# ExtractStructuredData
(*files.extractStructuredData*)

## Overview

Extract structured data from files

### Available Operations

* [sync](#sync) - Extract Structured Data - Sync
* [start](#start) - Extract Structured Data - Async Start
* [result](#result) - Extract Structured Data - Async Result

## sync

Extracts structured data from a file. Supported file types are image, pdf (more coming soon!). 
It accepts the file and requested schema for the data to be extracted.

### Example Usage

```typescript
import { IntunedClient } from "@intuned/client";
import { FileUrlSourceType, PdfFileType } from "@intuned/client/models/components";

const intunedClient = new IntunedClient({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.files.extractStructuredData.sync({
      type: PdfFileType.Pdf,
    source:     {
          type: FileUrlSourceType.Url,
          data: "<value>",
        },
    }, {
    "key": "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file`                                                                                                                                                                         | *components.FileT*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `dataSchema`                                                                                                                                                                   | Record<string, *any*>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | JsonSchema described as a JSON Schema object.                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.FileExtractStructuredDataSyncResponse](../../models/operations/fileextractstructureddatasyncresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## start

Starts an asynchronous operation to extract structred data from a file. Supported file types are image, pdf (more coming soon!). 
It accepts the file and requested schema for the data to be extracted.
It responds with an ID to track the operation status and retrieve the result.

### Example Usage

```typescript
import { IntunedClient } from "@intuned/client";
import { FileBase64SourceType, Type } from "@intuned/client/models/components";

const intunedClient = new IntunedClient({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.files.extractStructuredData.start({
      type: Type.Image,
    source:     {
          type: FileBase64SourceType.Base64,
          data: "<value>",
        },
    }, {
    "key": "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file`                                                                                                                                                                         | *components.FileT*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `dataSchema`                                                                                                                                                                   | Record<string, *any*>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | JsonSchema described as a JSON Schema object.                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.FileExtractStructuredDataStartResponse](../../models/operations/fileextractstructureddatastartresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## result

Gets the result of the structured data extraction operation using the operation ID.

### Example Usage

```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.files.extractStructuredData.result("EVmDumBbkyhx3DU");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `operationId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Operation Id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[operations.FileExtractStructuredDataResultResponse](../../models/operations/fileextractstructureddataresultresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
