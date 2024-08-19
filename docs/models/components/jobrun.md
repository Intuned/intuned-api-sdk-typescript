# JobRun

The details of a job run.

## Example Usage

```typescript
import { JobRun } from "@intuned/client/models/components";

let value: JobRun = {
    id: "<id>",
    projectId: "f1a3a2fa-9467-4739-a51a-a52c3f5ad019",
    jobId: "<value>",
    startTime: new Date("2024-07-07T09:18:10.171Z"),
    status: "TERMINATED",
    type: "MANUAL",
    workspaceId: "ffe78f09-7b00-474f-9547-1b5e6e13b99d",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The job run ID.                                                                                                      |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The project ID of the job.                                                                                           |
| `jobId`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the job.                                                                                                   |
| `startTime`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | The timestamp when the job run started executing.                                                                    |
| `status`                                                                                                             | [components.JobRunStatus](../../models/components/jobrunstatus.md)                                                   | :heavy_check_mark:                                                                                                   | The status of the job run.                                                                                           |
| `summary`                                                                                                            | [components.Summary](../../models/components/summary.md)                                                             | :heavy_minus_sign:                                                                                                   | A summary of the job run. Contains how many payloads are pending, how many finished executing, succeeded and failed. |
| `type`                                                                                                               | [components.JobRunType](../../models/components/jobruntype.md)                                                       | :heavy_check_mark:                                                                                                   | Whether the job run was triggered manually or by the job schedule.                                                   |
| `workspaceId`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The workspace ID of the project of the job.                                                                          |