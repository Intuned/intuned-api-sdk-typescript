# GetJobRunsResponseBody

Array of job runs with pagination info

## Example Usage

```typescript
import { GetJobRunsResponseBody } from "@intuned/client/models/operations";

let value: GetJobRunsResponseBody = {
  jobRuns: [],
  totalCount: 150,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `jobRuns`                                                  | [operations.JobRuns](../../models/operations/jobruns.md)[] | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `totalCount`                                               | *number*                                                   | :heavy_check_mark:                                         | Total number of job runs available                         | 150                                                        |