# JobConfigurationResponse

The configuration of the job. Configures the retry policy and maximum concurrent requests.


## Fields

| Field                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runMode`                                                                                                                                                                                                                                       | [components.RunMode](../../models/components/runmode.md)                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                              | The run mode of the job. Currently, only `Order-Irrelevant` is supported.                                                                                                                                                                       |
| `maxConcurrentRequests`                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                              | The batch size of payloads to execute. This does not guarantee that the payloads will be executed at the same time.                                                                                                                             |
| `retry`                                                                                                                                                                                                                                         | [components.JobRetryResponse](../../models/components/jobretryresponse.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                              | The retry policy of the job. Configure how many retries and the delay between them for each payload. The delay is calculated as `max(initialInterval * (backoffCoefficient ^ [i]), maximumInterval)`, where `i` is the current retry iteration. |