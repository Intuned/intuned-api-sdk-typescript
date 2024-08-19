# GetQueueItemResultRequest

## Example Usage

```typescript
import { GetQueueItemResultRequest } from "@intuned/client/models/operations";

let value: GetQueueItemResultRequest = {
    projectName: "my-project",
    queueId: "my-sample-queue",
    itemRunId: "11111111-1111-1111-1111-111111111111",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `projectName`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | Your project name. It is the name you provide when creating a project.    | my-project                                                                |
| `queueId`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | Your queue ID. It is the ID of the queue you provided when creating it.   | my-sample-queue                                                           |
| `itemRunId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Queue item run ID, obtained from the append queue item endpoint response. | 11111111-1111-1111-1111-111111111111                                      |