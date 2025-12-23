# UpdateJobRequest

## Example Usage

```typescript
import { UpdateJobRequest } from "@intuned/client/models/operations";

let value: UpdateJobRequest = {
  projectName: "my-project",
  jobId: "my-sample-job",
  requestBody: {
    payload: [],
    configuration: {
      retry: {},
    },
    sink: null,
    proxy: "http://username:password@proxy.example.com:8080",
    authSession: null,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name you assigned when creating the Project.                                                     | my-project                                                                                           |
| `jobId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID you assigned when creating the Job.                                                           | my-sample-job                                                                                        |
| `requestBody`                                                                                        | [operations.UpdateJobUpdateJobInputSchema](../../models/operations/updatejobupdatejobinputschema.md) | :heavy_check_mark:                                                                                   | Job update input schema                                                                              |                                                                                                      |