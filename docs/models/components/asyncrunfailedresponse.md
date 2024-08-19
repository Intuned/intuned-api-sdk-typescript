# AsyncRunFailedResponse

Failed API run result

## Example Usage

```typescript
import { AsyncRunFailedResponse } from "@intuned/client/models/components";

let value: AsyncRunFailedResponse = {
    error: "<value>",
    message: "<value>",
    status: "failed",
    statusCode: 6674.11,
    runId: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `error`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Error code                                                                                         |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Error message                                                                                      |
| `status`                                                                                           | [components.AsyncRunFailedResponseStatus](../../models/components/asyncrunfailedresponsestatus.md) | :heavy_check_mark:                                                                                 | The status of the run                                                                              |
| `statusCode`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | The HTTP status code of the API run                                                                |
| `runId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The run ID                                                                                         |