# Create
(*project.authSessions.create*)

## Overview

Create Auth Session

### Available Operations

* [start](#start) - Create Auth Session - Start
* [result](#result) - Create Auth Session - Result

## start

Start an AuthSession:Create run to create an Auth Session.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateOrUpdateAuthSessionStart" method="post" path="/{workspaceId}/projects/{projectName}/auth-sessions/create" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.authSessions.create.start("my-project", {
    parameters: {
      "username": "john.doe",
      "password": "password",
    },
    proxy: "http://proxy.example.com:8080",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectAuthSessionsCreateStart } from "@intuned/client/funcs/projectAuthSessionsCreateStart.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectAuthSessionsCreateStart(intunedClient, "my-project", {
    parameters: {
      "username": "john.doe",
      "password": "password",
    },
    proxy: "http://proxy.example.com:8080",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectAuthSessionsCreateStart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.CreateOrUpdateAuthSessionStartRequestBody](../../models/operations/createorupdateauthsessionstartrequestbody.md)                                                   | :heavy_check_mark:                                                                                                                                                             | Create auth session input schema                                                                                                                                               |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.CreateOrUpdateAuthSessionStartResponseBody](../../models/operations/createorupdateauthsessionstartresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## result

Get Auth Session Create result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAuthSessionResult" method="get" path="/{workspaceId}/projects/{projectName}/auth-sessions/create/{operationId}/result" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.authSessions.create.result("my-project", "aaaabbbCCCCdddd");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectAuthSessionsCreateResult } from "@intuned/client/funcs/projectAuthSessionsCreateResult.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectAuthSessionsCreateResult(intunedClient, "my-project", "aaaabbbCCCCdddd");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectAuthSessionsCreateResult failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `operationId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the operation. This is obtained from the start request.                                                                                                             | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.CreateAuthSessionResultResponseBody](../../models/operations/createauthsessionresultresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |