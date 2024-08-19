# AsyncRunCompletedResponse

Completed API run result

## Example Usage

```typescript
import { AsyncRunCompletedResponse } from "@intuned/client/models/components";

let value: AsyncRunCompletedResponse = {
    status: "completed",
    statusCode: 93.56,
    runId: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | The result of an API call.                                                                               |
| `status`                                                                                                 | [components.AsyncRunCompletedResponseStatus](../../models/components/asyncruncompletedresponsestatus.md) | :heavy_check_mark:                                                                                       | The status of the run                                                                                    |
| `statusCode`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The HTTP status code of the API run                                                                      |
| `runId`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The run ID                                                                                               |