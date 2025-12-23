# TerminateJobRunRequest

## Example Usage

```typescript
import { TerminateJobRunRequest } from "@intuned/client/models/operations";

let value: TerminateJobRunRequest = {
  projectName: "my-project",
  jobId: "my-sample-job",
  jobRunId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The name you assigned when creating the Project.                                                                          | my-project                                                                                                                |
| `jobId`                                                                                                                   | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The ID you assigned when creating the Job.                                                                                | my-sample-job                                                                                                             |
| `jobRunId`                                                                                                                | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The job run ID. This can be obtained from the get job runs endpoint or from the result of the trigger endpoint for a job. | aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee                                                                                      |