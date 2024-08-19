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
            statusCode: 2768.94,
        },
        runId: "<value>",
    },
    workspaceId: "22bb679d-2322-4715-bf0c-bb1e31b8b90f",
    project: {
        id: "3443a110-8e0a-4dcf-8b92-1879fce953f7",
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