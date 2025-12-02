# GetJobSinkWebhookSinkConfiguration

Configuration for the webhook sink.

## Example Usage

```typescript
import { GetJobSinkWebhookSinkConfiguration } from "@intuned/client/models/operations";

let value: GetJobSinkWebhookSinkConfiguration = {
  type: "webhook",
  url: "https://example.com/webhook",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token",
  },
  apisToSend: [
    "api1",
    "api2",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"webhook"*                                                                          | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to which the webhook will send the data.                                     | https://example.com/webhook                                                          |
| `headers`                                                                            | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | Optional headers to be sent with the webhook request.                                | {<br/>"Content-Type": "application/json",<br/>"Authorization": "Bearer token"<br/>}  |
| `skipOnFail`                                                                         | *boolean*                                                                            | :heavy_minus_sign:                                                                   | If true, the webhook will not be sent if the API execution fails.                    |                                                                                      |
| `apisToSend`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | List of API names to be sent to the webhook. If not provided, all APIs will be sent. | [<br/>"api1",<br/>"api2"<br/>]                                                       |