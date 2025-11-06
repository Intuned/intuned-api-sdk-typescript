# GetJobRunsConfiguration

Job configuration settings

## Example Usage

```typescript
import { GetJobRunsConfiguration } from "@intuned/client/models/operations";

let value: GetJobRunsConfiguration = {
  retry: {},
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `retry`                                                                                                             | [operations.GetJobRunsRetry](../../models/operations/getjobrunsretry.md)                                            | :heavy_minus_sign:                                                                                                  | The retry policy of the job. Configure how many retries and the delay between them for each payload.                | {<br/>"maximumAttempts": 3<br/>}                                                                                    |
| `maxConcurrentRequests`                                                                                             | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | The batch size of payloads to execute. This does not guarantee that the payloads will be executed at the same time. |                                                                                                                     |
| `requestTimeout`                                                                                                    | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Timeout for the API request in seconds. Default is 10 minutes (600 seconds).                                        | 600                                                                                                                 |