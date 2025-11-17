# Validate
(*project.authSessions.validate*)

## Overview

Validate Auth Session

### Available Operations

* [start](#start) - Validate AuthSession - Start
* [result](#result) - Validate AuthSession - Result

## start

Starts an AuthSession:Validate run to validate an AuthSession.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ValidateAuthSessionStart" method="post" path="/{workspaceId}/projects/{projectName}/auth-sessions/{authSessionId}/validate/start" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.authSessions.validate.start("my-project", "<id>", {
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
import { projectAuthSessionsValidateStart } from "@intuned/client/funcs/projectAuthSessionsValidateStart.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectAuthSessionsValidateStart(intunedClient, "my-project", "<id>", {
    proxy: "http://proxy.example.com:8080",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectAuthSessionsValidateStart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `authSessionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Authentication session ID. You can obtain it from the Auth Sessions tab in your project details.                                                                               |                                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.ValidateAuthSessionStartRequestBody](../../models/operations/validateauthsessionstartrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | Validate AuthSession input schema                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.ValidateAuthSessionStartResponseBody](../../models/operations/validateauthsessionstartresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## result

Get AuthSession:Validate run result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validateAuthSessionResult" method="get" path="/{workspaceId}/projects/{projectName}/auth-sessions/{authSessionId}/validate/{operationId}/result" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.authSessions.validate.result("my-project", "<id>", "aaaabbbCCCCdddd");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectAuthSessionsValidateResult } from "@intuned/client/funcs/projectAuthSessionsValidateResult.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectAuthSessionsValidateResult(intunedClient, "my-project", "<id>", "aaaabbbCCCCdddd");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectAuthSessionsValidateResult failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `authSessionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Authentication session ID. You can obtain it from the Auth Sessions tab in your project details.                                                                               |                                                                                                                                                                                |
| `operationId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the operation. This is obtained from the start request.                                                                                                             | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.ValidateAuthSessionResultResponseBody](../../models/operations/validateauthsessionresultresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |