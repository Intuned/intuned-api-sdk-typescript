# PendingQueueItemResult

## Example Usage

```typescript
import { PendingQueueItemResult } from "@intuned/client/models/components";

let value: PendingQueueItemResult = {
  runId: "<value>",
  status: "pending",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `runId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The run ID of the item                                                                             |
| `status`                                                                                           | [components.PendingQueueItemResultStatus](../../models/components/pendingqueueitemresultstatus.md) | :heavy_check_mark:                                                                                 | Execution status of the item                                                                       |