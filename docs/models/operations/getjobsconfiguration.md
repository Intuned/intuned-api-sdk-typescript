# GetJobsConfiguration

Job configuration settings

## Example Usage

```typescript
import { GetJobsConfiguration } from "@intuned/client/models/operations";

let value: GetJobsConfiguration = {
  retry: {},
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `retry`                                                                                                             | [operations.GetJobsRetry](../../models/operations/getjobsretry.md)                                                  | :heavy_minus_sign:                                                                                                  | The retry policy of the job. Configure how many retries and the delay between them for each payload.                | {<br/>"maximumAttempts": 3<br/>}                                                                                    |
| `maxConcurrentRequests`                                                                                             | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | The batch size of payloads to execute. This does not guarantee that the payloads will be executed at the same time. |                                                                                                                     |