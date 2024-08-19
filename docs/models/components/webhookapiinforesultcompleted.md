# WebhookAPIInfoResultCompleted

API result of completed run

## Example Usage

```typescript
import { WebhookAPIInfoResultCompleted } from "@intuned/client/models/components";

let value: WebhookAPIInfoResultCompleted = {
    status: "completed",
    statusCode: 9903.39,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | *any*                                                                                                            | :heavy_minus_sign:                                                                                               | The result of an API call.                                                                                       |
| `status`                                                                                                         | [components.WebhookAPIInfoResultCompletedStatus](../../models/components/webhookapiinforesultcompletedstatus.md) | :heavy_check_mark:                                                                                               | The status of the run                                                                                            |
| `statusCode`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The HTTP status code of the API run                                                                              |