# QueueRepeatItemInput


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `apiName`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `parameters`                                                     | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |
| `retry`                                                          | [components.QueueRetry](../../models/components/queueretry.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `authSession`                                                    | [components.AuthSession](../../models/components/authsession.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `proxy`                                                          | [components.Proxy](../../models/components/proxy.md)             | :heavy_minus_sign:                                               | N/A                                                              |
| `repeat`                                                         | *string*                                                         | :heavy_check_mark:                                               | repeat duration, minimum of 10 minutes                           |