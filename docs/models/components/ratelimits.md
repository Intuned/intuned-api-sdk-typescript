# RateLimits

A rate limit. The queue will not exceed the amount of items defined in the limit in the provided duration.


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `limit`                                                                                     | *number*                                                                                    | :heavy_check_mark:                                                                          | The maximum number of items to be executed within the duration.                             |
| `duration`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | The duration of the rate limit. [ms-formatted string](https://github.com/vercel/ms) string. |