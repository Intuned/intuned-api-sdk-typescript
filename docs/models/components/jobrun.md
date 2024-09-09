# JobRun

The details of a job run.

## Example Usage

```typescript
import { JobRun } from "@intuned/client/models/components";

let value: JobRun = {
  id: "<id>",
  projectId: "a9467739-251a-4a52-83f5-ad019da1ffe7",
  jobId: "<value>",
  startTime: new Date("2023-07-13T13:09:34.110Z"),
  status: "PAUSED",
  type: "MANUAL",
  workspaceId: "97b0074f-1547-41b5-a6e1-3b99d488e1e9",
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