# QueuedQueueItemResult

## Example Usage

```typescript
import { QueuedQueueItemResult } from "@intuned/client/models/components";

let value: QueuedQueueItemResult = {
    runId: "<value>",
    status: "queued",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `runId`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | The run ID of the item                                                                           |
| `status`                                                                                         | [components.QueuedQueueItemResultStatus](../../models/components/queuedqueueitemresultstatus.md) | :heavy_check_mark:                                                                               | Execution status of the item                                                                     |