# Runs
(*project.jobs.runs*)

## Overview

Project Jobs Runs API

### Available Operations

* [all](#all) - Get Job Runs
* [one](#one) - Get Job Run
* [terminate](#terminate) - Terminate Job Run

## all

Get all job runs of a job.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJobRuns" method="get" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}/runs" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedClient.project.jobs.runs.all({
    projectName: "my-project",
    jobId: "my-sample-job",
    pageSize: "10",
    pageNumber: "0",
    sortBy: "start_time,desc/status,asc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsRunsAll } from "@intuned/client/funcs/projectJobsRunsAll.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await projectJobsRunsAll(intunedClient, {
    projectName: "my-project",
    jobId: "my-sample-job",
    pageSize: "10",
    pageNumber: "0",
    sortBy: "start_time,desc/status,asc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsRunsAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobRunsRequest](../../models/operations/getjobrunsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetJobRunsResponseBody](../../models/operations/getjobrunsresponsebody.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.GetJobRunsResponseBody                        | 400                                                  | application/json                                     |
| errors.GetJobRunsProjectJobsRunsResponseBody         | 401                                                  | application/json                                     |
| errors.GetJobRunsProjectJobsRunsResponseResponseBody | 404                                                  | application/json                                     |
| errors.SDKError                                      | 4XX, 5XX                                             | \*/\*                                                |

## one

Get information and results for a specific job run.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJobRun" method="get" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}/runs/{jobRunId}" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedClient.project.jobs.runs.one("my-project", "my-sample-job", "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsRunsOne } from "@intuned/client/funcs/projectJobsRunsOne.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await projectJobsRunsOne(intunedClient, "my-project", "my-sample-job", "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsRunsOne failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your job ID. It is the ID of the job you provide when creating it.                                                                                                             | [object Object]                                                                                                                                                                |
| `jobRunId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The job run ID. This can be obtained from the get job runs endpoint or from the result of the trigger endpoint for a job.                                                      | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.GetJobRunResponseBody](../../models/operations/getjobrunresponsebody.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.GetJobRunResponseBody                        | 400                                                 | application/json                                    |
| errors.GetJobRunProjectJobsRunsResponseBody         | 401                                                 | application/json                                    |
| errors.GetJobRunProjectJobsRunsResponseResponseBody | 404                                                 | application/json                                    |
| errors.SDKError                                     | 4XX, 5XX                                            | \*/\*                                               |

## terminate

Terminate a job run by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="terminateJobRun" method="post" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}/runs/{jobRunId}/terminate" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedClient.project.jobs.runs.terminate("my-project", "my-sample-job", "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsRunsTerminate } from "@intuned/client/funcs/projectJobsRunsTerminate.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await projectJobsRunsTerminate(intunedClient, "my-project", "my-sample-job", "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsRunsTerminate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your project name. It is the name you provide when creating a project.                                                                                                         | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Your job ID. It is the ID of the job you provide when creating it.                                                                                                             | [object Object]                                                                                                                                                                |
| `jobRunId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The job run ID. This can be obtained from the get job runs endpoint or from the result of the trigger endpoint for a job.                                                      | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.TerminateJobRunResponseBody](../../models/operations/terminatejobrunresponsebody.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.TerminateJobRunResponseBody                | 401                                               | application/json                                  |
| errors.TerminateJobRunProjectJobsRunsResponseBody | 404                                               | application/json                                  |
| errors.SDKError                                   | 4XX, 5XX                                          | \*/\*                                             |