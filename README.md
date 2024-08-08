<!-- TODO: add logo -->

# Intuned Client SDK

Consume your browser automation projects and perform file operations with the Intuned API using this TypeScript SDK.

<!-- Start SDK Installation [installation] -->
## SDK Installation

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
yarn add @intuned/client zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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
    apiKey: process.env.API_KEY,
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    const result = await intunedClient.files.extractStructuredData.sync(
        {
            type: "pdf",
            source: {
                type: "url",
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [files.extractStructuredData](docs/sdks/extractstructureddata/README.md)

* [sync](docs/sdks/extractstructureddata/README.md#sync) - Extract Structured Data - Sync
* [start](docs/sdks/extractstructureddata/README.md#start) - Extract Structured Data - Async Start
* [result](docs/sdks/extractstructureddata/README.md#result) - Extract Structured Data - Async Result

### [files.extractMarkdown](docs/sdks/extractmarkdown/README.md)

* [sync](docs/sdks/extractmarkdown/README.md#sync) - Extract Markdown - Sync
* [start](docs/sdks/extractmarkdown/README.md#start) - Extract Markdown - Async Start
* [result](docs/sdks/extractmarkdown/README.md#result) - Extract Markdown - Async Result

### [files.extractTables](docs/sdks/extracttables/README.md)

* [sync](docs/sdks/extracttables/README.md#sync) - Extract Tables - Sync
* [start](docs/sdks/extracttables/README.md#start) - Extract Tables - Async Start
* [result](docs/sdks/extracttables/README.md#result) - Extract Tables - Async Result


### [project.jobs](docs/sdks/jobs/README.md)

* [all](docs/sdks/jobs/README.md#all) - Get Jobs
* [create](docs/sdks/jobs/README.md#create) - Create Job
* [one](docs/sdks/jobs/README.md#one) - Get Job
* [delete](docs/sdks/jobs/README.md#delete) - Delete Job
* [pause](docs/sdks/jobs/README.md#pause) - Pause Job
* [resume](docs/sdks/jobs/README.md#resume) - Resume Job
* [trigger](docs/sdks/jobs/README.md#trigger) - Trigger Job

### [project.jobs.runs](docs/sdks/runs/README.md)

* [all](docs/sdks/runs/README.md#all) - Get Job Runs
* [terminate](docs/sdks/runs/README.md#terminate) - Terminate Job Run

### [project.queues](docs/sdks/queues/README.md)

* [all](docs/sdks/queues/README.md#all) - Get Queues
* [create](docs/sdks/queues/README.md#create) - Create Queue
* [one](docs/sdks/queues/README.md#one) - Get Queue
* [delete](docs/sdks/queues/README.md#delete) - Delete Queue

### [project.queues.items](docs/sdks/items/README.md)

* [append](docs/sdks/items/README.md#append) - Append Queue Item
* [result](docs/sdks/items/README.md#result) - Get Queue Item result
* [delete](docs/sdks/items/README.md#delete) - Delete Queue item

### [project.queues.repeatItems](docs/sdks/repeatitems/README.md)

* [all](docs/sdks/repeatitems/README.md#all) - Get Queue Repeat Items
* [append](docs/sdks/repeatitems/README.md#append) - Append Queue Repeat Item
* [one](docs/sdks/repeatitems/README.md#one) - Get Queue Repeat Item
* [update](docs/sdks/repeatitems/README.md#update) - Update Queue Repeat Item
* [delete](docs/sdks/repeatitems/README.md#delete) - Delete Queue Repeat Item

### [project.run](docs/sdks/run/README.md)

* [sync](docs/sdks/run/README.md#sync) - Run API - Sync
* [start](docs/sdks/run/README.md#start) - Run API - Async Start
* [result](docs/sdks/run/README.md#result) - Run API - Async Result

### [project.authSessions](docs/sdks/authsessions/README.md)

* [all](docs/sdks/authsessions/README.md#all) - Get Auth Sessions
* [one](docs/sdks/authsessions/README.md#one) - Get Auth Session
* [delete](docs/sdks/authsessions/README.md#delete) - Delete Auth Session

### [project.authSessions.create](docs/sdks/create/README.md)

* [start](docs/sdks/create/README.md#start) - Create Auth Session - Start
* [result](docs/sdks/create/README.md#result) - Create Auth Session - Result
* [resume](docs/sdks/create/README.md#resume) - Create Auth Session -  Resume

### [project.authSessions.recorder](docs/sdks/recorder/README.md)

* [createAuthSession](docs/sdks/recorder/README.md#createauthsession) - Create Recorder Auth Session Instance
* [start](docs/sdks/recorder/README.md#start) - Create Recorder Auth Session Instance
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

const sdk = new IntunedClient({ httpClient });
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
    apiKey: process.env.API_KEY,
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    const result = await intunedClient.files.extractStructuredData.sync(
        {
            type: "pdf",
            source: {
                type: "url",
                data: "http://unconscious-margin.name",
            },
        },
        {
            key: "<value>",
        },
        {
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
        }
    );

    // Handle the result
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
    apiKey: process.env.API_KEY,
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    const result = await intunedClient.files.extractStructuredData.sync(
        {
            type: "pdf",
            source: {
                type: "url",
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
<!-- End Retries [retries] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspaceId` to `"aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"` at SDK initialization and then you do not have to pass the same value on calls to operations like `sync`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| workspaceId | string |  | Your workspace ID. [How to find it](/docs/guides/platform/how-to-get-a-workspace-id)? |


### Example

```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
    apiKey: process.env.API_KEY,
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    const result = await intunedClient.files.extractStructuredData.sync(
        {
            type: "pdf",
            source: {
                type: "url",
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
<!-- End Global Parameters [global-parameters] -->

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
