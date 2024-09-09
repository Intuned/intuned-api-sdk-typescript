# TerminateJobRunRequest

## Example Usage

```typescript
import { TerminateJobRunRequest } from "@intuned/client/models/operations";

let value: TerminateJobRunRequest = {
  projectName: "my-project",
  jobId: "my-sample-job",
  runId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Your project name. It is the name you provide when creating a project. | my-project                                                             |
| `jobId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | Your job ID. It is the ID of the job you provide when creating it.     | my-sample-job                                                          |
| `runId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The job run ID. This can be obtained from the get job runs endpoint.   | aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee                                   |