# Update
(*project.authSessions.update*)

## Overview

Update Auth Session

### Available Operations

* [start](#start) - Update Auth Session - Start
* [result](#result) - Update Auth Session - Result

## start

Starts an AuthSession:Update run to update an existing Auth Session.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateAuthSessionStart" method="post" path="/{workspaceId}/projects/{projectName}/auth-sessions/{authSessionId}/update" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedClient.project.authSessions.update.start("my-project", "<id>", {
    parameters: {
      "username": "john.doe",
      "password": "newPassword",
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
import { projectAuthSessionsUpdateStart } from "@intuned/client/funcs/projectAuthSessionsUpdateStart.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await projectAuthSessionsUpdateStart(intunedClient, "my-project", "<id>", {
    parameters: {
      "username": "john.doe",
      "password": "newPassword",
    },
    proxy: "http://proxy.example.com:8080",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectAuthSessionsUpdateStart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `authSessionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Authentication session ID. You can obtain it from the Auth Sessions tab in your project details.                                                                               |                                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.UpdateAuthSessionStartRequestBody](../../models/operations/updateauthsessionstartrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | Update auth session input schema                                                                                                                                               |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.UpdateAuthSessionStartResponseBody](../../models/operations/updateauthsessionstartresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## result

Gets Auth Session Update result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAuthSessionResult" method="get" path="/{workspaceId}/projects/{projectName}/auth-sessions/{authSessionId}/update/{operationId}/result" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedClient.project.authSessions.update.result("my-project", "<id>", "aaaabbbCCCCdddd");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectAuthSessionsUpdateResult } from "@intuned/client/funcs/projectAuthSessionsUpdateResult.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await projectAuthSessionsUpdateResult(intunedClient, "my-project", "<id>", "aaaabbbCCCCdddd");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectAuthSessionsUpdateResult failed:", res.error);
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

**Promise\<[operations.UpdateAuthSessionResultResponseBody](../../models/operations/updateauthsessionresultresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |