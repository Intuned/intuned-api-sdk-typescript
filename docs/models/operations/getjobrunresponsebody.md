# GetJobRunResponseBody

Job run information and results

## Example Usage

```typescript
import { GetJobRunResponseBody } from "@intuned/client/models/operations";

let value: GetJobRunResponseBody = {
  jobRun: {
    id: "123e4567-e89b-12d3-a456-426614174000",
    startTime: "2024-01-01T00:00:00Z",
    endTime: "2024-01-01T00:30:00Z",
    workspaceId: "123e4567-e89b-12d3-a456-426614174000",
    projectId: "123e4567-e89b-12d3-a456-426614174000",
    jobId: "job-123e4567-e89b-12d3",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    type: "SCHEDULED",
    status: "SUCCESS",
    payloads: 100,
    successfulRuns: 95,
    failedRuns: 5,
    error: {
      message: "An error occurred while executing the job",
      code: "internal-server-error",
      category: "billing",
      correlationId: "123e4567-e89b-12d3-a456-426614174000",
      docUrl: "https://docs.intunedhq.com/docs/support/errors",
    },
    reason: {
      type: "another-job-run-active",
      message: "<value>",
      docUrl:
        "https://docs.intunedhq.com/docs/support/reasons#no-valid-output-received",
    },
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `jobRun`                                                 | [operations.JobRun](../../models/operations/jobrun.md)   | :heavy_check_mark:                                       | N/A                                                      |
| `results`                                                | [operations.Results](../../models/operations/results.md) | :heavy_minus_sign:                                       | N/A                                                      |