# GetJobRunError

Error information if the job run failed, stored as JSONB

## Example Usage

```typescript
import { GetJobRunError } from "@intuned/client/models/operations";

let value: GetJobRunError = {
  message: "An error occurred while executing the job",
  code: "internal-server-error",
  category: "infrastructure",
  correlationId: "123e4567-e89b-12d3-a456-426614174000",
  docUrl: "https://docs.intunedhq.com/docs/support/errors",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Error message describing the failure                                         | An error occurred while executing the job                                    |
| `code`                                                                       | [operations.GetJobRunCode](../../models/operations/getjobruncode.md)         | :heavy_check_mark:                                                           | Optional error code for more specific error identification                   | internal-server-error                                                        |
| `details`                                                                    | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `category`                                                                   | [operations.GetJobRunCategory](../../models/operations/getjobruncategory.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `correlationId`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Optional correlation ID for tracking the error                               | 123e4567-e89b-12d3-a456-426614174000                                         |
| `retirable`                                                                  | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `docUrl`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | Optional documentation URL for more information                              | https://docs.intunedhq.com/docs/support/errors                               |