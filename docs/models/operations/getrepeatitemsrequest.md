# GetRepeatItemsRequest

## Example Usage

```typescript
import { GetRepeatItemsRequest } from "@intuned/client/models/operations";

let value: GetRepeatItemsRequest = {
    projectName: "my-project",
    queueId: "my-sample-queue",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectName`                                                           | *string*                                                                | :heavy_check_mark:                                                      | Your project name. It is the name you provide when creating a project.  | my-project                                                              |
| `queueId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Your queue ID. It is the ID of the queue you provided when creating it. | my-sample-queue                                                         |