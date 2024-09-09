# QueueSinkResultPayload

Webhook payload of queue item run result

## Example Usage

```typescript
import { QueueSinkResultPayload } from "@intuned/client/models/components";

let value: QueueSinkResultPayload = {
  apiInfo: {
    name: "<value>",
    result: {
      error: "<value>",
      message: "<value>",
      status: "failed",
      statusCode: 2539.41,
    },
    runId: "<value>",
  },
  workspaceId: "53f870b3-26b5-4a73-829c-db1a8422bb67",
  project: {
    id: "9d232271-5bf0-4cbb-9e31-b8b90f3443a1",
    name: "<value>",
  },
  projectQueue: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `apiInfo`                                                                                                    | [components.WebhookAPIInfo](../../models/components/webhookapiinfo.md)                                       | :heavy_check_mark:                                                                                           | Webhook API info                                                                                             |
| `workspaceId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The workspace ID of the API                                                                                  |
| `project`                                                                                                    | [components.QueueSinkResultPayloadProject](../../models/components/queuesinkresultpayloadproject.md)         | :heavy_check_mark:                                                                                           | The project details of the API                                                                               |
| `authSession`                                                                                                | [components.QueueSinkResultPayloadAuthSession](../../models/components/queuesinkresultpayloadauthsession.md) | :heavy_minus_sign:                                                                                           | The auth session used in the run                                                                             |
| `projectQueue`                                                                                               | [components.ProjectQueue](../../models/components/projectqueue.md)                                           | :heavy_check_mark:                                                                                           | The queue details of the run                                                                                 |