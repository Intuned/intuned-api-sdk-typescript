# @intuned/client

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await intunedApiSDK.project.jobs.getJobs("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [project.jobs](docs/sdks/jobs/README.md)

* [getJobs](docs/sdks/jobs/README.md#getjobs) - Get all jobs in a project.
* [createJob](docs/sdks/jobs/README.md#createjob) - Create a new job for a project.
* [getJob](docs/sdks/jobs/README.md#getjob) - Get a job in a project by ID.
* [deleteJob](docs/sdks/jobs/README.md#deletejob) - Delete a job of a project by ID.
* [pauseJob](docs/sdks/jobs/README.md#pausejob) - Pause a job.
* [resumeJob](docs/sdks/jobs/README.md#resumejob) - Resume a paused job.
* [triggerJob](docs/sdks/jobs/README.md#triggerjob) - Manually triggers a job run for a job.
* [getJobRuns](docs/sdks/jobs/README.md#getjobruns) - Get all job runs of a job.
* [terminateJobRun](docs/sdks/jobs/README.md#terminatejobrun) - Terminate a job run.

### [project.queues](docs/sdks/queues/README.md)

* [getQueues](docs/sdks/queues/README.md#getqueues) - Get all queues in a project.
* [createQueue](docs/sdks/queues/README.md#createqueue) - Create a new queue for a project.
* [getQueue](docs/sdks/queues/README.md#getqueue) - Get a queue in a project by ID.
* [deleteQueue](docs/sdks/queues/README.md#deletequeue) - Delete a queue of a project by ID.
* [addItem](docs/sdks/queues/README.md#additem) - Append an item to the queue.
* [getQueueItemResult](docs/sdks/queues/README.md#getqueueitemresult) - Get queue item result.
* [deleteQueueItem](docs/sdks/queues/README.md#deletequeueitem) - Delete queued item
* [getRepeatItems](docs/sdks/queues/README.md#getrepeatitems) - Get repeat items for the queue.
* [addRepeatItem](docs/sdks/queues/README.md#addrepeatitem) - Create a repeat item for the queue.
* [getRepeatQueueItem](docs/sdks/queues/README.md#getrepeatqueueitem) - Get repeat queue item with last result.
* [updateRepeatQueueItem](docs/sdks/queues/README.md#updaterepeatqueueitem) - Update queue repeatable item
* [deleteRepeatQueueItem](docs/sdks/queues/README.md#deleterepeatqueueitem) - Delete queued item

### [project.run](docs/sdks/run/README.md)

* [runSync](docs/sdks/run/README.md#runsync) - Run a project API synchronously
* [runStart](docs/sdks/run/README.md#runstart) - Start a project API run operation
* [runResult](docs/sdks/run/README.md#runresult) - Retrieve the result of a started project API run operation

### [files](docs/sdks/files/README.md)

* [extractStructuredData](docs/sdks/files/README.md#extractstructureddata) - Extract structured data from a file - supports image, pdf (more coming soon!)
* [extractMarkdown](docs/sdks/files/README.md#extractmarkdown) - Extract markdown from a file - supports image, pdf (more coming soon!)
* [extractTables](docs/sdks/files/README.md#extracttables) - Extract tables from a file - supports image, pdf (more coming soon!)
* [extractStructuredDataStart](docs/sdks/files/README.md#extractstructureddatastart) - Asynchronously extract structured data from a file - supports image, pdf (more coming soon!)
* [extractStructuredDataResult](docs/sdks/files/README.md#extractstructureddataresult) - Get result of extract structured data from a file
* [extractMarkdownStart](docs/sdks/files/README.md#extractmarkdownstart) - Asynchronously extract markdown from a file - supports image, pdf (more coming soon!)
* [extractMarkdownResult](docs/sdks/files/README.md#extractmarkdownresult) - Get result of extract markdown from a file
* [extractTablesStart](docs/sdks/files/README.md#extracttablesstart) - Asynchronously extract tables from a file - supports image, pdf (more coming soon!)
* [extractTablesResult](docs/sdks/files/README.md#extracttablesresult) - Get result of extract tables from a file
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { IntunedApiSDK } from "@intuned/client";
import * as errors from "@intuned/client/models/errors";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    let result;
    try {
        result = await intunedApiSDK.project.jobs.getJobs("<value>");
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
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
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://app.intuned.io/api/v1/workspace` | None |

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
    serverIdx: 0,
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await intunedApiSDK.project.jobs.getJobs("<value>");

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
    serverURL: "https://app.intuned.io/api/v1/workspace",
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await intunedApiSDK.project.jobs.getJobs("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

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
import { IntunedApiSDK } from "@intuned/client";
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

const sdk = new IntunedApiSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await intunedApiSDK.project.jobs.getJobs("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspaceId` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getJobs`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| workspaceId | string |  | Workspace Id. |
| projectName | string |  | Project Name. |


### Example

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await intunedApiSDK.project.jobs.getJobs("<value>");

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
