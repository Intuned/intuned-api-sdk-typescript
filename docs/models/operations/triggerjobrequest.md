# TriggerJobRequest

## Example Usage

```typescript
import { TriggerJobRequest } from "@intuned/client/models/operations";

let value: TriggerJobRequest = {
    projectName: "my-project",
    jobId: "my-sample-job",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Your project name. It is the name you provide when creating a project. | my-project                                                             |
| `jobId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | Your job ID. It is the ID of the job you provide when creating it.     | my-sample-job                                                          |