# GetRepeatQueueItemRequest

## Example Usage

```typescript
import { GetRepeatQueueItemRequest } from "@intuned/client/models/operations";

let value: GetRepeatQueueItemRequest = {
  projectName: "my-project",
  queueId: "my-sample-queue",
  itemId: "22222222-2222-2222-2222-222222222222",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectName`                                                           | *string*                                                                | :heavy_check_mark:                                                      | Your project name. It is the name you provide when creating a project.  | my-project                                                              |
| `queueId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Your queue ID. It is the ID of the queue you provided when creating it. | my-sample-queue                                                         |
| `itemId`                                                                | *string*                                                                | :heavy_check_mark:                                                      | Repeat Item ID                                                          | 22222222-2222-2222-2222-222222222222                                    |