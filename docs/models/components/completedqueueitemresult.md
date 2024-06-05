# CompletedQueueItemResult


## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `runId`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The run ID of the item                                                                                 |
| `status`                                                                                               | [components.CompletedQueueItemResultStatus](../../models/components/completedqueueitemresultstatus.md) | :heavy_check_mark:                                                                                     | Execution status of the item                                                                           |
| `result`                                                                                               | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | The result of API execution.                                                                           |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | The API response status code                                                                           |