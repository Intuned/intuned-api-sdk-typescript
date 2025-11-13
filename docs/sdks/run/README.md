# Run
(*project.run*)

## Overview

Run APIs

### Available Operations

* [start](#start) - Run API - Start
* [result](#result) - Run API - Result

## start

Starts an API run for a project

### Example Usage

<!-- UsageSnippet language="typescript" operationID="runApiStart" method="post" path="/{workspaceId}/projects/{projectName}/run/start" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedClient.project.run.start("my-project", {
    parameters: {
      "param1": "value1",
      "param2": 42,
      "param3": true,
    },
    retry: {},
    api: "my-awesome-api",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectRunStart } from "@intuned/client/funcs/projectRunStart.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await projectRunStart(intunedClient, "my-project", {
    parameters: {
      "param1": "value1",
      "param2": 42,
      "param3": true,
    },
    retry: {},
    api: "my-awesome-api",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectRunStart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.RunApiStartRequestBody](../../models/operations/runapistartrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | Run API input schema                                                                                                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.RunApiStartResponseBody](../../models/operations/runapistartresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## result

Get Run API result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="runApiResult" method="get" path="/{workspaceId}/projects/{projectName}/run/{runId}/result" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedClient.project.run.result("my-project", "aabbccddeeffggh");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectRunResult } from "@intuned/client/funcs/projectRunResult.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await projectRunResult(intunedClient, "my-project", "aabbccddeeffggh");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectRunResult failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `runId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Run ID                                                                                                                                                                         | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.RunApiResultResponseBody](../../models/operations/runapiresultresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |