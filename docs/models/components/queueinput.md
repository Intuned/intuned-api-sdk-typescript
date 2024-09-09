# QueueInput

## Example Usage

```typescript
import { QueueInput } from "@intuned/client/models/components";

let value: QueueInput = {
  configuration: {
    runMode: "Default",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The queue ID. Has to be a valid URL slug.                                      |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The queue name.                                                                |
| `configuration`                                                                | [components.QueueConfiguration](../../models/components/queueconfiguration.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `sink`                                                                         | [components.WebhookSink](../../models/components/webhooksink.md)               | :heavy_minus_sign:                                                             | N/A                                                                            |
| `authSession`                                                                  | [components.AuthSession](../../models/components/authsession.md)               | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |