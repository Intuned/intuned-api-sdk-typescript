# Recorder
(*project.authSessions.recorder*)

### Available Operations

* [createAuthSession](#createauthsession) - Create Recorder Auth Session Instance
* [start](#start) - Create Recorder Auth Session Instance

## createAuthSession

create a new auth session instance to be used later for recording

### Example Usage

```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  apiKey: process.env.API_KEY,
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.project.authSessions.recorder.createAuthSession("my-project", {
    name: "my-auth-session",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `createRecorderAuthSessionRequest`                                                                                                                                             | [components.CreateRecorderAuthSessionRequest](../../models/components/createrecorderauthsessionrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | create recorder authentication session instance request                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise\<[components.CreateRecorderAuthSessionInstance](../../models/components/createrecorderauthsessioninstance.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## start

create a recording session for a specific auth session

### Example Usage

```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  apiKey: process.env.API_KEY,
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
