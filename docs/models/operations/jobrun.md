# JobRun

## Example Usage

```typescript
import { JobRun } from "@intuned/client/models/operations";

let value: JobRun = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | Unique identifier for the job run                                        | 123e4567-e89b-12d3-a456-426614174000                                     |
| `startTime`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Timestamp when the job run started                                       | 2024-01-01T00:00:00Z                                                     |
| `endTime`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Timestamp when the job run ended (null if still running)                 | 2024-01-01T00:30:00Z                                                     |
| `workspaceId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the workspace this job run belongs to                            | 123e4567-e89b-12d3-a456-426614174000                                     |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the project this job run belongs to                              | 123e4567-e89b-12d3-a456-426614174000                                     |
| `jobId`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | ID of the job this run belongs to                                        | job-123e4567-e89b-12d3                                                   |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Timestamp when the job run was created                                   | 2024-01-01T00:00:00Z                                                     |
| `updatedAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Timestamp when the job run was last updated                              | 2024-01-01T00:00:00Z                                                     |
| `type`                                                                   | [operations.GetJobRunType](../../models/operations/getjobruntype.md)     | :heavy_check_mark:                                                       | Type of the job run                                                      | SCHEDULED                                                                |
| `status`                                                                 | [operations.GetJobRunStatus](../../models/operations/getjobrunstatus.md) | :heavy_check_mark:                                                       | Current status of the job run                                            | SUCCESS                                                                  |
| `payloads`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | Total number of payloads in the job run                                  | 100                                                                      |
| `successfulRuns`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | Number of successful API calls in the job run                            | 95                                                                       |
| `failedRuns`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | Number of failed API calls in the job run                                | 5                                                                        |
| `error`                                                                  | [operations.GetJobRunError](../../models/operations/getjobrunerror.md)   | :heavy_minus_sign:                                                       | Error information if the job run failed, stored as JSONB                 |                                                                          |
| `reason`                                                                 | [operations.GetJobRunReason](../../models/operations/getjobrunreason.md) | :heavy_minus_sign:                                                       | Reason for job run  state change, stored as JSONB                        |                                                                          |