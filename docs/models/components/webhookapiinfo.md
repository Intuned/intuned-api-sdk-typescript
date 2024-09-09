# WebhookAPIInfo

Webhook API info

## Example Usage

```typescript
import { WebhookAPIInfo } from "@intuned/client/models/components";

let value: WebhookAPIInfo = {
  name: "<value>",
  result: {
    error: "<value>",
    message: "<value>",
    status: "failed",
    statusCode: 2543.56,
  },
  runId: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *string*                                | :heavy_check_mark:                      | The name of the API                     |
| `parameters`                            | *components.APIParameters*              | :heavy_minus_sign:                      | The parameters to be passed to the API. |
| `result`                                | *components.WebhookAPIInfoResult*       | :heavy_check_mark:                      | N/A                                     |
| `runId`                                 | *string*                                | :heavy_check_mark:                      | The run ID of the API                   |