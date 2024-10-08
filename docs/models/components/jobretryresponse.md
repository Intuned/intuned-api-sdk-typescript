# JobRetryResponse

The retry policy of the job. Configure how many retries and the delay between them for each payload. The delay is calculated as `max(initialInterval * (backoffCoefficient ^ [i]), maximumInterval)`, where `i` is the current retry iteration.

## Example Usage

```typescript
import { JobRetryResponse } from "@intuned/client/models/components";

let value: JobRetryResponse = {
    maximumAttempts: 9786.19,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `maximumAttempts`                                                                                                              | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The maximum number of attempts to retry the API execution if it fails.                                                         |
| `backoffCoefficient`                                                                                                           | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The exponential backoff coefficient used in calculating the interval between retries.                                          |
| `initialInterval`                                                                                                              | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The first interval between retries, in milliseconds.                                                                           |
| `maximumInterval`                                                                                                              | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The maximum interval between retries, in milliseconds. This value will be used if the calculated interval is larger than this. |