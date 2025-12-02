# ResponseBodyFailed

## Example Usage

```typescript
import { ResponseBodyFailed } from "@intuned/client/models/operations";

let value: ResponseBodyFailed = {
  status: "failed",
  message: "<value>",
  error: {
    message: "An error occurred while executing the run",
    code: "script-process-crashed",
    category: "infrastructure",
    docUrl:
      "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
    correlationId: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                   | *"failed"*                                                                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `message`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `error`                                                                                                                    | [operations.CreateAuthSessionResultResponseBodyError](../../models/operations/createauthsessionresultresponsebodyerror.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |