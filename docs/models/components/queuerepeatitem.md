# QueueRepeatItem


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `apiName`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `parameters`                                               | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `retry`                                                    | [components.Retry](../../models/components/retry.md)       | :heavy_minus_sign:                                         | N/A                                                        |
| `identity`                                                 | [components.Identity](../../models/components/identity.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `proxy`                                                    | [components.Proxy](../../models/components/proxy.md)       | :heavy_minus_sign:                                         | N/A                                                        |
| `repeat`                                                   | *string*                                                   | :heavy_check_mark:                                         | repeat duration, minimum of 10 minutes                     |
| `id`                                                       | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `lastRunId`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |