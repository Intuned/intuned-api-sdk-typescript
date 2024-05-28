# Queues
(*project.queues*)

## Overview

Project Queues API

### Available Operations

* [getQueues](#getqueues) - Get all queues in a project.
* [createQueue](#createqueue) - Create a new queue for a project.
* [getQueue](#getqueue) - Get a queue in a project by ID.
* [deleteQueue](#deletequeue) - Delete a queue of a project by ID.
* [addItem](#additem) - Append an item to the queue.
* [getQueueItemResult](#getqueueitemresult) - Get queue item result.
* [deleteQueueItem](#deletequeueitem) - Delete queued item
* [getRepeatItems](#getrepeatitems) - Get repeat items for the queue.
* [addRepeatItem](#addrepeatitem) - Create a repeat item for the queue.
* [getRepeatQueueItem](#getrepeatqueueitem) - Get repeat queue item with last result.
* [updateRepeatQueueItem](#updaterepeatqueueitem) - Update queue repeatable item
* [deleteRepeatQueueItem](#deleterepeatqueueitem) - Delete queued item

## getQueues

Gets all queues in a project.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.getQueues("<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetQueuesResponse](../../models/operations/getqueuesresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## createQueue

Creates a new queue.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";
import { QueueConfigurationRunMode } from "@intuned/client/models/components";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.createQueue("<value>", {
    configuration: {
      runMode: QueueConfigurationRunMode.Default,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `queueInput`                                                                                                                                                                   | [components.QueueInput](../../models/components/queueinput.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | create queue request                                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.CreateQueueResponse](../../models/operations/createqueueresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getQueue

Gets a queue in a project by ID.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.getQueue("<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetQueueResponse](../../models/operations/getqueueresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## deleteQueue

Deletes a queue by ID.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.deleteQueue("<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.DeleteQueueResponse](../../models/operations/deletequeueresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## addItem

Appends an item to the queue.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.addItem("<value>", "<value>", {});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `queueItem`                                                                                                                                                                    | [components.QueueItem](../../models/components/queueitem.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | queue item                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.AddItemResponse](../../models/operations/additemresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getQueueItemResult

Get queue item result.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.getQueueItemResult("<value>", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `itemRunId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue item run ID                                                                                                                                                              |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetQueueItemResultResponse](../../models/operations/getqueueitemresultresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## deleteQueueItem

Delete queued item.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.deleteQueueItem("<value>", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `itemRunId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue item run ID                                                                                                                                                              |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.DeleteQueueItemResponse](../../models/operations/deletequeueitemresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getRepeatItems

Appends an item to the queue.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.getRepeatItems("<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetRepeatItemsResponse](../../models/operations/getrepeatitemsresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## addRepeatItem

Appends an item to the queue.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.addRepeatItem("<value>", "<value>", {
    repeat: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `queueRepeatItemInput`                                                                                                                                                         | [components.QueueRepeatItemInput](../../models/components/queuerepeatiteminput.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                             | queue repeat item                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.AddRepeatItemResponse](../../models/operations/addrepeatitemresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getRepeatQueueItem

Get queue repeatable item.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.getRepeatQueueItem("<value>", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `itemId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue repeatable item ID                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetRepeatQueueItemResponse](../../models/operations/getrepeatqueueitemresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## updateRepeatQueueItem

Update queue repeatable item.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.updateRepeatQueueItem("<value>", "<value>", "<value>", {
    repeat: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `itemId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue repeatable item ID                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `queueRepeatItemInput`                                                                                                                                                         | [components.QueueRepeatItemInput](../../models/components/queuerepeatiteminput.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                             | queue repeatable item                                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.UpdateRepeatQueueItemResponse](../../models/operations/updaterepeatqueueitemresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## deleteRepeatQueueItem

Delete queue repeatable item.

### Example Usage

```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await intunedApiSDK.project.queues.deleteRepeatQueueItem("<value>", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queueId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue ID                                                                                                                                                                       |
| `itemId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Queue repeatable item ID                                                                                                                                                       |
| `projectName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Project name                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.DeleteRepeatQueueItemResponse](../../models/operations/deleterepeatqueueitemresponse.md)\>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
