# WebhookAPIInfoResultFailed

API result of failed run

## Example Usage

```typescript
import { WebhookAPIInfoResultFailed } from "@intuned/client/models/components";

let value: WebhookAPIInfoResultFailed = {
  error: "<value>",
  message: "<value>",
  status: "failed",
  statusCode: 580.29,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Error code                                                                                                 |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Error message                                                                                              |
| `status`                                                                                                   | [components.WebhookAPIInfoResultFailedStatus](../../models/components/webhookapiinforesultfailedstatus.md) | :heavy_check_mark:                                                                                         | The status of the run                                                                                      |
| `statusCode`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The HTTP status code of the API run                                                                        |