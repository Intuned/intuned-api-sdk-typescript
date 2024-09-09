# Recorder
(*project.authSessions.recorder*)

## Overview

auth sessions recorder API

### Available Operations

* [start](#start) - Start recorder session for an auth session

## start

create a recording session for a specific auth session

### Example Usage

```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.project.authSessions.recorder.start("my-project", {
    authSessionId: "1a1a1a1a-1a1a-1a1a-1a1a-1a1a1a1a1a1a",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectAuthSessionsRecorderStart } from "@intuned/client/funcs/projectAuthSessionsRecorderStart.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const res = await projectAuthSessionsRecorderStart(intunedClient, "my-project", {
    authSessionId: "1a1a1a1a-1a1a-1a1a-1a1a-1a1a1a1a1a1a",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `startAuthSessionRecorderRequest`                                                                                                                                              | [components.StartAuthSessionRecorderRequest](../../models/components/startauthsessionrecorderrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | start auth session recorder request                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.StartAuthSessionRecorder](../../models/components/startauthsessionrecorder.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
