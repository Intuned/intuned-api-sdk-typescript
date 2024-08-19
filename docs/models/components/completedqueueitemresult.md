# CompletedQueueItemResult

## Example Usage

```typescript
import { CompletedQueueItemResult } from "@intuned/client/models/components";

let value: CompletedQueueItemResult = {
    runId: "<value>",
    status: "completed",
    statusCode: 831.12,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `runId`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The run ID of the item                                                                                 |
| `status`                                                                                               | [components.CompletedQueueItemResultStatus](../../models/components/completedqueueitemresultstatus.md) | :heavy_check_mark:                                                                                     | Execution status of the item                                                                           |
| `result`                                                                                               | *any*                                                                                                  | :heavy_minus_sign:                                                                                     | The result of an API call.                                                                             |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | The API response status code                                                                           |