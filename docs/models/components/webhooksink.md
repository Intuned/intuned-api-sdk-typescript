# WebhookSink

Webhook sink configuration


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [components.WebhookSinkType](../../models/components/webhooksinktype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `url`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | The webhook URL.                                                         |
| `headers`                                                                | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | Additional headers to be sent with the webhook request.                  |