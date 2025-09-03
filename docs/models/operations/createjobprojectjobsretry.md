# CreateJobProjectJobsRetry

The retry policy of the job. Configure how many retries and the delay between them for each payload.

## Example Usage

```typescript
import { CreateJobProjectJobsRetry } from "@intuned/client/models/operations";

let value: CreateJobProjectJobsRetry = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `maximumAttempts`                                              | *number*                                                       | :heavy_minus_sign:                                             | Maximum number of attempts to retry the run in case of failure | 3                                                              |