<!-- TODO: add logo -->

# Intuned Client SDK

Consume your browser automation projects and perform file operations with the Intuned API using this TypeScript SDK.

<!-- Start Summary [summary] -->
## Summary

Intuned Client: Intuned API Client to call APIs exposed by the Intuned Platform (https://docs.intunedhq.com/).

For more information about the API: [Find out more about Intuned](https://docs.intunedhq.com/)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Intuned Client SDK](#intuned-client-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [Getting Started](#getting-started)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Retries](#retries)
  * [Global Parameters](#global-parameters)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @intuned/client
```

### PNPM

```bash
pnpm add @intuned/client
```

### Bun

```bash
bun add @intuned/client
```

### Yarn

```bash
yarn add @intuned/client
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

## Getting Started

To get started, please refer to the [client API overview](https://docs.intunedhq.com/client-apis/overview) section in our docs.

### Authentication

To authenticate with the API, you will need an API key. [How to create an API key](https://docs.intunedhq.com/docs/guides/platform/how-to-create-api-keys).

### Workspace ID

The SDK runs within the context of a workspace. You will need to provide the workspace ID when initializing the SDK client instance. [How to get your workspace ID](https://docs.intunedhq.com/docs/guides/platform/how-to-get-a-workspace-id).


<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

#### [project.authSessions](docs/sdks/authsessions/README.md)

* [all](docs/sdks/authsessions/README.md#all) - Get Auth Sessions
* [one](docs/sdks/authsessions/README.md#one) - Get Auth Session
* [delete](docs/sdks/authsessions/README.md#delete) - Delete Auth Session

#### [project.authSessions.create](docs/sdks/create/README.md)

* [start](docs/sdks/create/README.md#start) - Create Auth Session - Start
* [result](docs/sdks/create/README.md#result) - Create Auth Session - Result

#### [project.authSessions.recorder](docs/sdks/recorder/README.md)

* [start](docs/sdks/recorder/README.md#start) - Start recorder session for an auth session

#### [project.authSessions.update](docs/sdks/update/README.md)

* [start](docs/sdks/update/README.md#start) - Update Auth Session - Start
* [result](docs/sdks/update/README.md#result) - Update Auth Session - Result

#### [project.jobs](docs/sdks/jobs/README.md)

* [all](docs/sdks/jobs/README.md#all) - Get Jobs
* [create](docs/sdks/jobs/README.md#create) - Create Job
* [one](docs/sdks/jobs/README.md#one) - Get Job
* [delete](docs/sdks/jobs/README.md#delete) - Delete Job
* [pause](docs/sdks/jobs/README.md#pause) - Pause Job
* [resume](docs/sdks/jobs/README.md#resume) - Resume Job
* [trigger](docs/sdks/jobs/README.md#trigger) - Trigger Job

#### [project.jobs.runs](docs/sdks/runs/README.md)

* [all](docs/sdks/runs/README.md#all) - Get Job Runs
* [one](docs/sdks/runs/README.md#one) - Get Job Run
* [terminate](docs/sdks/runs/README.md#terminate) - Terminate Job Run

#### [project.run](docs/sdks/run/README.md)

* [start](docs/sdks/run/README.md#start) - Run API - Async Start
* [result](docs/sdks/run/README.md#result) - Run API - Async Result

</details>
<!-- End Available Resources and Operations [operations] -->

## Error Handling

Successful operations will return a response object. If an error occurs, the SDK will throw an error that can be caught and handled by the calling code. The error object will contain information about the error that occurred.

```typescript
import { IntunedClient } from "@intuned/client";
import { FileUrlSourceType, PdfFileType } from "@intuned/client/models/components";
import * as errors from "@intuned/client/models/errors";

const intunedClient = new IntunedClient({
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    let result;
    try {
        result = await intunedClient.files.extractStructuredData.sync(
            {
                type: PdfFileType.Pdf,
                source: {
                    type: FileUrlSourceType.Url,
                    data: "http://unconscious-margin.name",
                },
            },
            {
                key: "<value>",
            }
        );
    } catch (err) {
        switch (true) {
            case err instanceof errors.ApiErrorInvalidInput: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.ApiErrorUnauthorized: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```

If you encounter a validation error, please [contact us](https://docs.intunedhq.com/docs/support/contact-us).
<!-- No Error Handling [errors] -->

<!-- ## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://app.intuned.io/api/v1/workspace` | None |

```typescript
import { IntunedClient } from "@intuned/client";
import { FileUrlSourceType, PdfFileType } from "@intuned/client/models/components";

const intunedClient = new IntunedClient({
    serverIdx: 0,
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    const result = await intunedClient.files.extractStructuredData.sync(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileUrlSourceType.Url,
                data: "http://unconscious-margin.name",
            },
        },
        {
            key: "<value>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { IntunedClient } from "@intuned/client";
import { FileUrlSourceType, PdfFileType } from "@intuned/client/models/components";

const intunedClient = new IntunedClient({
    serverURL: "https://app.intuned.io/api/v1/workspace",
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    const result = await intunedClient.files.extractStructuredData.sync(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileUrlSourceType.Url,
                data: "http://unconscious-margin.name",
            },
        },
        {
            key: "<value>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

``` -->
<!-- No Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { IntunedClient } from "@intuned/client";
import { HTTPClient } from "@intuned/client/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new IntunedClient({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- No Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspaceId` to `"123e4567-e89b-12d3-a456-426614174000"` at SDK initialization and then you do not have to pass the same value on calls to operations like `start`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name        | Type   | Description                                                                          |
| ----------- | ------ | ------------------------------------------------------------------------------------ |
| workspaceId | string | Your workspace ID. [How to find it](/docs/guides/general/how-to-get-a-workspace-id)? |

### Example

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
<!-- End Global Parameters [global-parameters] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`projectAuthSessionsAll`](docs/sdks/authsessions/README.md#all) - Get Auth Sessions
- [`projectAuthSessionsCreateResult`](docs/sdks/create/README.md#result) - Create Auth Session - Result
- [`projectAuthSessionsCreateStart`](docs/sdks/create/README.md#start) - Create Auth Session - Start
- [`projectAuthSessionsDelete`](docs/sdks/authsessions/README.md#delete) - Delete Auth Session
- [`projectAuthSessionsOne`](docs/sdks/authsessions/README.md#one) - Get Auth Session
- [`projectAuthSessionsRecorderStart`](docs/sdks/recorder/README.md#start) - Start recorder session for an auth session
- [`projectAuthSessionsUpdateResult`](docs/sdks/update/README.md#result) - Update Auth Session - Result
- [`projectAuthSessionsUpdateStart`](docs/sdks/update/README.md#start) - Update Auth Session - Start
- [`projectJobsAll`](docs/sdks/jobs/README.md#all) - Get Jobs
- [`projectJobsCreate`](docs/sdks/jobs/README.md#create) - Create Job
- [`projectJobsDelete`](docs/sdks/jobs/README.md#delete) - Delete Job
- [`projectJobsOne`](docs/sdks/jobs/README.md#one) - Get Job
- [`projectJobsPause`](docs/sdks/jobs/README.md#pause) - Pause Job
- [`projectJobsResume`](docs/sdks/jobs/README.md#resume) - Resume Job
- [`projectJobsRunsAll`](docs/sdks/runs/README.md#all) - Get Job Runs
- [`projectJobsRunsOne`](docs/sdks/runs/README.md#one) - Get Job Run
- [`projectJobsRunsTerminate`](docs/sdks/runs/README.md#terminate) - Terminate Job Run
- [`projectJobsTrigger`](docs/sdks/jobs/README.md#trigger) - Trigger Job
- [`projectRunResult`](docs/sdks/run/README.md#result) - Run API - Async Result
- [`projectRunStart`](docs/sdks/run/README.md#start) - Run API - Async Start

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { IntunedClient } from "@intuned/client";

const sdk = new IntunedClient({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
