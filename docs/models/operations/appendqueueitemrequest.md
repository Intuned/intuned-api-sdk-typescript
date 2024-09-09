# AppendQueueItemRequest

## Example Usage

```typescript
import { AppendQueueItemRequest } from "@intuned/client/models/operations";

let value: AppendQueueItemRequest = {
  projectName: "my-project",
  queueId: "my-sample-queue",
  queueItem: {
    apiName: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectName`                                                           | *string*                                                                | :heavy_check_mark:                                                      | Your project name. It is the name you provide when creating a project.  | my-project                                                              |
| `queueId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Your queue ID. It is the ID of the queue you provided when creating it. | my-sample-queue                                                         |
| `queueItem`                                                             | [components.QueueItem](../../models/components/queueitem.md)            | :heavy_check_mark:                                                      | queue item                                                              |                                                                         |