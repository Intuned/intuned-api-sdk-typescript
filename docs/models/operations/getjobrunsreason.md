# GetJobRunsReason

Reason for JobRun state change., stored as JSONB

## Example Usage

```typescript
import { GetJobRunsReason } from "@intuned/client/models/operations";

let value: GetJobRunsReason = {
  type: "another-job-run-active",
  message: "<value>",
  docUrl:
    "https://docs.intunedhq.com/docs/support/reasons#no-valid-output-received",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.GetJobRunsProjectJobsRunsType](../../models/operations/getjobrunsprojectjobsrunstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `details`                                                                                            | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `docUrl`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional documentation URL for more information                                                      | https://docs.intunedhq.com/docs/support/reasons#no-valid-output-received                             |