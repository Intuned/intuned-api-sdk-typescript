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

const intunedClient = new IntunedClient({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.files.extractStructuredData.sync({
      type: "pdf",
    source:     {
          type: "url",
          data: "http://unconscious-margin.name",
        },
    }, {
    "key": "<value>",
  }, {
    type: "MARKDOWN",
    model: "gpt4-turbo",
  }, "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                                                                                                                  | *components.FileT*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |
| `dataSchema`                                                                                                                                                                                                                            | Record<string, *any*>                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                      | The schema (in JSONSchema) to which the extracted data should conform to. [More about JSONSchema](https://json-schema.org/learn/getting-started-step-by-step)<br/><br/>[JSONSchema](https://json-schema.org/learn/getting-started-step-by-step) |
| `strategy`                                                                                                                                                                                                                              | [components.ExtractStructuredDataStrategy](../../models/components/extractstructureddatastrategy.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                      | The strategy to extract structured data from a file. Includes the model and type of extraction.                                                                                                                                         |
| `prompt`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | Prompt given to the AI model to help with extraction.                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                          |


### Response

**Promise\<[components.StructuredDataExtractionSyncResponse](../../models/components/structureddataextractionsyncresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## start

Starts an asynchronous operation to extract structured data from a file. Supported file types are image, pdf (more coming soon!). 
It accepts the file and requested schema for the data to be extracted.
It responds with an ID to track the operation status and retrieve the result.

### Example Usage

```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.files.extractStructuredData.start({
      type: "image",
    source:     {
          type: "base64",
          data: "<value>",
        },
    }, {
    "key": "<value>",
  }, {
    type: "MARKDOWN",
    model: "gpt-4o",
  }, "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                                                                                                                  | *components.FileT*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |
| `dataSchema`                                                                                                                                                                                                                            | Record<string, *any*>                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                      | The schema (in JSONSchema) to which the extracted data should conform to. [More about JSONSchema](https://json-schema.org/learn/getting-started-step-by-step)<br/><br/>[JSONSchema](https://json-schema.org/learn/getting-started-step-by-step) |
| `strategy`                                                                                                                                                                                                                              | [components.ExtractStructuredDataStrategy](../../models/components/extractstructureddatastrategy.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                      | The strategy to extract structured data from a file. Includes the model and type of extraction.                                                                                                                                         |
| `prompt`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | Prompt given to the AI model to help with extraction.                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                          |


### Response

**Promise\<[components.AsyncFilePendingResponse](../../models/components/asyncfilependingresponse.md)\>**
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
  const result = await intunedClient.files.extractStructuredData.result("aaaabbbCCCCdddd");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `operationId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the requested file operation. This is obtained from the start request.                                                                                              | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[components.StructuredDataExtractionAsyncResponse](../../models/components/structureddataextractionasyncresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
