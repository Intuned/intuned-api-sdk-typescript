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
import { FileBase64SourceType, PdfFileType } from "@intuned/client/models/components";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    projectName: "my-project",
});

async function run() {
    const result = await intunedApiSDK.files.extractStructuredData(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileBase64SourceType.Base64,
                data: "<value>",
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

### [files](docs/sdks/files/README.md)

* [extractStructuredData](docs/sdks/files/README.md#extractstructureddata) - Extract structured data
* [extractMarkdown](docs/sdks/files/README.md#extractmarkdown) - Extract markdown
* [extractTables](docs/sdks/files/README.md#extracttables) - Extract tables
* [extractStructuredDataStart](docs/sdks/files/README.md#extractstructureddatastart) - Extract structured data - Async start
* [extractStructuredDataResult](docs/sdks/files/README.md#extractstructureddataresult) - Extract structured data - Async result
* [extractMarkdownStart](docs/sdks/files/README.md#extractmarkdownstart) - Extract markdown - Async start
* [extractMarkdownResult](docs/sdks/files/README.md#extractmarkdownresult) - Extract markdown - Async result
* [extractTablesStart](docs/sdks/files/README.md#extracttablesstart) - Extract tables - Async start
* [extractTablesResult](docs/sdks/files/README.md#extracttablesresult) - Extract tables - Async result


### [project.jobs](docs/sdks/jobs/README.md)

* [getJobs](docs/sdks/jobs/README.md#getjobs) - Get Jobs
* [createJob](docs/sdks/jobs/README.md#createjob) - Create Job
* [getJob](docs/sdks/jobs/README.md#getjob) - Get Job
* [deleteJob](docs/sdks/jobs/README.md#deletejob) - Delete Job
* [pauseJob](docs/sdks/jobs/README.md#pausejob) - Pause Job
* [resumeJob](docs/sdks/jobs/README.md#resumejob) - Resume Job
* [triggerJob](docs/sdks/jobs/README.md#triggerjob) - Trigger Job
* [getJobRuns](docs/sdks/jobs/README.md#getjobruns) - Get Job Runs
* [terminateJobRun](docs/sdks/jobs/README.md#terminatejobrun) - Terminate Job Run

### [project.queues](docs/sdks/queues/README.md)

* [getQueues](docs/sdks/queues/README.md#getqueues) - Get Queues
* [createQueue](docs/sdks/queues/README.md#createqueue) - Create Queue
* [getQueue](docs/sdks/queues/README.md#getqueue) - Get Queue
* [deleteQueue](docs/sdks/queues/README.md#deletequeue) - Delete Queue
* [addItem](docs/sdks/queues/README.md#additem) - Append item to Queue
* [getQueueItemResult](docs/sdks/queues/README.md#getqueueitemresult) - Get Queue item result
* [deleteQueueItem](docs/sdks/queues/README.md#deletequeueitem) - Delete Queue item
* [getRepeatItems](docs/sdks/queues/README.md#getrepeatitems) - Get Queue repeat item
* [addRepeatItem](docs/sdks/queues/README.md#addrepeatitem) - Create Queue repeat item
* [getRepeatQueueItem](docs/sdks/queues/README.md#getrepeatqueueitem) - Get Queue repeat item
* [updateRepeatQueueItem](docs/sdks/queues/README.md#updaterepeatqueueitem) - Update Queue repeat item
* [deleteRepeatQueueItem](docs/sdks/queues/README.md#deleterepeatqueueitem) - Delete Queue repeat item

### [project.run](docs/sdks/run/README.md)

* [runSync](docs/sdks/run/README.md#runsync) - Run API
* [runStart](docs/sdks/run/README.md#runstart) - Run API - Async start
* [runResult](docs/sdks/run/README.md#runresult) - API Async result

### [authSessions](docs/sdks/authsessions/README.md)

* [getAuthSessions](docs/sdks/authsessions/README.md#getauthsessions) - Get Auth Sessions
* [getAuthSession](docs/sdks/authsessions/README.md#getauthsession) - Get Auth Session
* [deleteAuthSession](docs/sdks/authsessions/README.md#deleteauthsession) - Delete Auth Session
* [createAuthSession](docs/sdks/authsessions/README.md#createauthsession) - Start create Auth Session
* [getCreateAuthSessionResult](docs/sdks/authsessions/README.md#getcreateauthsessionresult) - Get create Auth Session result
* [resumeCreateAuthSession](docs/sdks/authsessions/README.md#resumecreateauthsession) - Resume create Auth Session
* [refreshAuthSession](docs/sdks/authsessions/README.md#refreshauthsession) - Refresh Auth Session
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
import { FileBase64SourceType, PdfFileType } from "@intuned/client/models/components";
import * as errors from "@intuned/client/models/errors";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    projectName: "my-project",
});

async function run() {
    let result;
    try {
        result = await intunedApiSDK.files.extractStructuredData(
            {
                type: PdfFileType.Pdf,
                source: {
                    type: FileBase64SourceType.Base64,
                    data: "<value>",
                },
            },
            {
                key: "<value>",
            }
        );
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
import { FileBase64SourceType, PdfFileType } from "@intuned/client/models/components";

const intunedApiSDK = new IntunedApiSDK({
    serverIdx: 0,
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    projectName: "my-project",
});

async function run() {
    const result = await intunedApiSDK.files.extractStructuredData(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileBase64SourceType.Base64,
                data: "<value>",
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
import { IntunedApiSDK } from "@intuned/client";
import { FileBase64SourceType, PdfFileType } from "@intuned/client/models/components";

const intunedApiSDK = new IntunedApiSDK({
    serverURL: "https://app.intuned.io/api/v1/workspace",
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    projectName: "my-project",
});

async function run() {
    const result = await intunedApiSDK.files.extractStructuredData(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileBase64SourceType.Base64,
                data: "<value>",
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
import { FileBase64SourceType, PdfFileType } from "@intuned/client/models/components";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    projectName: "my-project",
});

async function run() {
    const result = await intunedApiSDK.files.extractStructuredData(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileBase64SourceType.Base64,
                data: "<value>",
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
<!-- End Authentication [security] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters must be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspaceId` to `"aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getJobs`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available. The required parameters must be set when you initialize the SDK client.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| workspaceId | string | ✔️ | Workspace ID |
| projectName | string | ✔️ | Project name |


### Example

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    projectName: "my-project",
});

async function run() {
    const result = await intunedApiSDK.project.jobs.getJobs("my-project");

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
