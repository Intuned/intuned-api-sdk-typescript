# GetJobRunReason

Reason for JobRun state change., stored as JSONB

## Example Usage

```typescript
import { GetJobRunReason } from "@intuned/client/models/operations";

let value: GetJobRunReason = {
  type: "auth-session-not-found",
  message: "<value>",
  docUrl:
    "https://docs.intunedhq.com/docs/support/reasons#no-valid-output-received",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.GetJobRunProjectJobsRunsType](../../models/operations/getjobrunprojectjobsrunstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `details`                                                                                          | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `docUrl`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Optional documentation URL for more information                                                    | https://docs.intunedhq.com/docs/support/reasons#no-valid-output-received                           |