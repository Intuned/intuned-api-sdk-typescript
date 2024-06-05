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
import { IntunedClient } from "@intuned/client";
import { FileUrlSourceType, PdfFileType } from "@intuned/client/models/components";

const intunedClient = new IntunedClient({
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
* [result](docs/sdks/run/README.md#result) - API Result

### [project.authSessions](docs/sdks/authsessions/README.md)

* [all](docs/sdks/authsessions/README.md#all) - Get Auth Sessions
* [one](docs/sdks/authsessions/README.md#one) - Get Auth Session
* [delete](docs/sdks/authsessions/README.md#delete) - Delete Auth Session

### [project.authSessions.create](docs/sdks/create/README.md)

* [start](docs/sdks/create/README.md#start) - Create Auth Session - Start
* [result](docs/sdks/create/README.md#result) - Create Auth Session - Result
* [resume](docs/sdks/create/README.md#resume) - Create Auth Session -  Resume
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

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { IntunedClient } from "@intuned/client";
import { FileUrlSourceType, PdfFileType } from "@intuned/client/models/components";

const intunedClient = new IntunedClient({
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
<!-- End Authentication [security] -->

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
