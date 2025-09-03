# RunApiResultResponseBody

Run result with status and output data.

## Example Usage

```typescript
import { RunApiResultResponseBody } from "@intuned/client/models/operations";

let value: RunApiResultResponseBody = {
  runId: "<id>",
  status: "completed",
  extendedPayloads: [
    {
      api: "<value>",
      parameters: {
        "param1": "value1",
        "param2": 42,
        "param3": true,
      },
    },
  ],
  error: {
    message: "An error occurred while executing the run",
    code: "script-process-crashed",
    category: "billing",
    docUrl:
      "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
    correlationId: "123e4567-e89b-12d3-a456-426614174000",
  },
  reason: {
    type: "auth-session-validate-dependency-failed",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `runId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier for the run, nanoId of 21 characters                         |                                                                                |
| `status`                                                                       | [operations.RunApiResultStatus](../../models/operations/runapiresultstatus.md) | :heavy_check_mark:                                                             | Status of the run execution                                                    | completed                                                                      |
| `result`                                                                       | *any*                                                                          | :heavy_minus_sign:                                                             | Output result of the run execution                                             |                                                                                |
| `extendedPayloads`                                                             | [operations.ExtendedPayloads](../../models/operations/extendedpayloads.md)[]   | :heavy_minus_sign:                                                             | Extended payloads from the run execution                                       |                                                                                |
| `error`                                                                        | [operations.ErrorT](../../models/operations/errort.md)                         | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | Error or reason message                                                        |                                                                                |
| `reason`                                                                       | [operations.Reason](../../models/operations/reason.md)                         | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |