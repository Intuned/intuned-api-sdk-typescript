# Project.Jobs

## Overview

Project Jobs API

### Available Operations

* [all](#all) - Get Jobs
* [create](#create) - Create Job
* [one](#one) - Get Job
* [update](#update) - Update Job
* [delete](#delete) - Delete Job
* [pause](#pause) - Pause Job
* [resume](#resume) - Resume Job
* [trigger](#trigger) - Trigger Job

## all

Get all Jobs in a Project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJobs" method="get" path="/{workspaceId}/projects/{projectName}/jobs" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.jobs.all("my-project");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsAll } from "@intuned/client/funcs/projectJobsAll.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsAll(intunedClient, "my-project");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.JobDBObjectSchema[]](../../models/.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetJobsResponseBody                    | 400                                           | application/json                              |
| errors.GetJobsProjectJobsResponseBody         | 401                                           | application/json                              |
| errors.GetJobsProjectJobsResponseResponseBody | 404                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## create

Create a new Job for a Project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createJob" method="post" path="/{workspaceId}/projects/{projectName}/jobs" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.jobs.create("my-project", {
    id: "my-awesome-job",
    payload: [
      {
        parameters: {
          "param1": "value1",
          "param2": 42,
          "param3": true,
        },
        apiName: "my-awesome-api",
      },
    ],
    configuration: {
      retry: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsCreate } from "@intuned/client/funcs/projectJobsCreate.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsCreate(intunedClient, "my-project", {
    id: "my-awesome-job",
    payload: [
      {
        parameters: {
          "param1": "value1",
          "param2": 42,
          "param3": true,
        },
        apiName: "my-awesome-api",
      },
    ],
    configuration: {
      retry: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.CreateJobRequestBody](../../models/operations/createjobrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | Job creation input schema                                                                                                                                                      |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.CreateJobResponseBody](../../models/operations/createjobresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.CreateJobResponseBody                    | 400                                             | application/json                                |
| errors.CreateJobProjectJobsResponseBody         | 401                                             | application/json                                |
| errors.CreateJobProjectJobsResponseResponseBody | 404                                             | application/json                                |
| errors.SDKError                                 | 4XX, 5XX                                        | \*/\*                                           |

## one

Get a Job by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJob" method="get" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.jobs.one("my-project", "my-sample-job");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsOne } from "@intuned/client/funcs/projectJobsOne.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsOne(intunedClient, "my-project", "my-sample-job");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsOne failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID you assigned when creating the Job.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.GetJobJobDetailsResponse](../../models/operations/getjobjobdetailsresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetJobResponseBody                    | 400                                          | application/json                             |
| errors.GetJobProjectJobsResponseBody         | 401                                          | application/json                             |
| errors.GetJobProjectJobsResponseResponseBody | 404                                          | application/json                             |
| errors.SDKError                              | 4XX, 5XX                                     | \*/\*                                        |

## update

Update a Job by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateJob" method="put" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.jobs.update("my-project", "my-sample-job", {
    payload: [
      {
        parameters: {
          "param1": "value1",
          "param2": 42,
          "param3": true,
        },
        apiName: "my-awesome-api",
      },
    ],
    configuration: {
      retry: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsUpdate } from "@intuned/client/funcs/projectJobsUpdate.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsUpdate(intunedClient, "my-project", "my-sample-job", {
    payload: [
      {
        parameters: {
          "param1": "value1",
          "param2": 42,
          "param3": true,
        },
        apiName: "my-awesome-api",
      },
    ],
    configuration: {
      retry: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID you assigned when creating the Job.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.UpdateJobUpdateJobInputSchema](../../models/operations/updatejobupdatejobinputschema.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | Job update input schema                                                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.UpdateJobResponseBody](../../models/operations/updatejobresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.UpdateJobResponseBody                    | 400                                             | application/json                                |
| errors.UpdateJobProjectJobsResponseBody         | 401                                             | application/json                                |
| errors.UpdateJobProjectJobsResponseResponseBody | 404                                             | application/json                                |
| errors.SDKError                                 | 4XX, 5XX                                        | \*/\*                                           |

## delete

Delete a Job by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteJob" method="delete" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  await intunedClient.project.jobs.delete("my-project", "my-sample-job");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsDelete } from "@intuned/client/funcs/projectJobsDelete.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsDelete(intunedClient, "my-project", "my-sample-job");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("projectJobsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID you assigned when creating the Job.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.DeleteJobResponseBody            | 401                                     | application/json                        |
| errors.DeleteJobProjectJobsResponseBody | 404                                     | application/json                        |
| errors.SDKError                         | 4XX, 5XX                                | \*/\*                                   |

## pause

Pause a Job. Pauses any JobRuns and the Job schedule if applicable.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="pauseJob" method="post" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}/pause" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.jobs.pause("my-project", "my-sample-job");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsPause } from "@intuned/client/funcs/projectJobsPause.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsPause(intunedClient, "my-project", "my-sample-job");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsPause failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID you assigned when creating the Job.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.PauseJobResponseBody](../../models/operations/pausejobresponsebody.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.PauseJobResponseBody                    | 400                                            | application/json                               |
| errors.PauseJobProjectJobsResponseBody         | 401                                            | application/json                               |
| errors.PauseJobProjectJobsResponseResponseBody | 404                                            | application/json                               |
| errors.SDKError                                | 4XX, 5XX                                       | \*/\*                                          |

## resume

Resume a paused Job. Resumes any paused JobRuns and the Job schedule if applicable.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="resumeJob" method="post" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}/resume" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.jobs.resume("my-project", "my-sample-job");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsResume } from "@intuned/client/funcs/projectJobsResume.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsResume(intunedClient, "my-project", "my-sample-job");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsResume failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID you assigned when creating the Job.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.ResumeJobResponseBody](../../models/operations/resumejobresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.ResumeJobResponseBody                    | 400                                             | application/json                                |
| errors.ResumeJobProjectJobsResponseBody         | 401                                             | application/json                                |
| errors.ResumeJobProjectJobsResponseResponseBody | 404                                             | application/json                                |
| errors.SDKError                                 | 4XX, 5XX                                        | \*/\*                                           |

## trigger

Manually trigger a JobRun. Fails if the Job is paused.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="triggerJob" method="post" path="/{workspaceId}/projects/{projectName}/jobs/{jobId}/trigger" -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.jobs.trigger("my-project", "my-sample-job");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IntunedClientCore } from "@intuned/client/core.js";
import { projectJobsTrigger } from "@intuned/client/funcs/projectJobsTrigger.js";

// Use `IntunedClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const intunedClient = new IntunedClientCore({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const res = await projectJobsTrigger(intunedClient, "my-project", "my-sample-job");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectJobsTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name you assigned when creating the Project.                                                                                                                               | [object Object]                                                                                                                                                                |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID you assigned when creating the Job.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.TriggerJobResponseBody](../../models/operations/triggerjobresponsebody.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.TriggerJobResponseBody                    | 400                                              | application/json                                 |
| errors.TriggerJobProjectJobsResponseBody         | 401                                              | application/json                                 |
| errors.TriggerJobProjectJobsResponseResponseBody | 404                                              | application/json                                 |
| errors.SDKError                                  | 4XX, 5XX                                         | \*/\*                                            |