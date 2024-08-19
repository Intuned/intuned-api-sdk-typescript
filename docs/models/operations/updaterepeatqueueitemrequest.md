# UpdateRepeatQueueItemRequest

## Example Usage

```typescript
import { UpdateRepeatQueueItemRequest } from "@intuned/client/models/operations";

let value: UpdateRepeatQueueItemRequest = {
    projectName: "my-project",
    queueId: "my-sample-queue",
    itemId: "22222222-2222-2222-2222-222222222222",
    queueRepeatItemInput: {
        apiName: "<value>",
        repeat: "<value>",
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectName`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | Your project name. It is the name you provide when creating a project.             | my-project                                                                         |
| `queueId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Your queue ID. It is the ID of the queue you provided when creating it.            | my-sample-queue                                                                    |
| `itemId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | Repeat Item ID                                                                     | 22222222-2222-2222-2222-222222222222                                               |
| `queueRepeatItemInput`                                                             | [components.QueueRepeatItemInput](../../models/components/queuerepeatiteminput.md) | :heavy_check_mark:                                                                 | queue repeatable item                                                              |                                                                                    |