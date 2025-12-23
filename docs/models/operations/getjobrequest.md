# GetJobRequest

## Example Usage

```typescript
import { GetJobRequest } from "@intuned/client/models/operations";

let value: GetJobRequest = {
  projectName: "my-project",
  jobId: "my-sample-job",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `projectName`                                    | *string*                                         | :heavy_check_mark:                               | The name you assigned when creating the Project. | my-project                                       |
| `jobId`                                          | *string*                                         | :heavy_check_mark:                               | The ID you assigned when creating the Job.       | my-sample-job                                    |