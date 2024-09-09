# FailedQueueItemResult

## Example Usage

```typescript
import { FailedQueueItemResult } from "@intuned/client/models/components";

let value: FailedQueueItemResult = {
  runId: "<value>",
  status: "failed",
  error: {
    "key": "<value>",
  },
  statusCode: 7163.27,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `runId`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | The run ID of the item                                                                           |
| `status`                                                                                         | [components.FailedQueueItemResultStatus](../../models/components/failedqueueitemresultstatus.md) | :heavy_check_mark:                                                                               | Execution status of the item                                                                     |
| `error`                                                                                          | Record<string, *any*>                                                                            | :heavy_check_mark:                                                                               | The error that occurred during API execution.                                                    |
| `statusCode`                                                                                     | *number*                                                                                         | :heavy_check_mark:                                                                               | The API response status code.                                                                    |