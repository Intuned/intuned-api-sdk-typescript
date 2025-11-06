# GetJobRunRequest

## Example Usage

```typescript
import { GetJobRunRequest } from "@intuned/client/models/operations";

let value: GetJobRunRequest = {
  projectName: "my-project",
  jobId: "my-sample-job",
  jobRunId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Your project name. It is the name you provide when creating a project.                                                    | my-project                                                                                                                |
| `jobId`                                                                                                                   | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Your job ID. It is the ID of the job you provide when creating it.                                                        | my-sample-job                                                                                                             |
| `jobRunId`                                                                                                                | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The job run ID. This can be obtained from the get job runs endpoint or from the result of the trigger endpoint for a job. | aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee                                                                                      |