# UpdateAuthSessionResultResponseBody5

## Example Usage

```typescript
import { UpdateAuthSessionResultResponseBody5 } from "@intuned/client/models/operations";

let value: UpdateAuthSessionResultResponseBody5 = {
  status: "failed",
  message: "<value>",
  error: {
    message: "An error occurred while executing the run",
    code: "script-process-crashed",
    category: "user",
    docUrl:
      "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
    correlationId: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                                                           | [operations.UpdateAuthSessionResultResponseBodyProjectAuthSessionsUpdateResponse200ApplicationJSONStatus](../../models/operations/updateauthsessionresultresponsebodyprojectauthsessionsupdateresponse200applicationjsonstatus.md) | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |
| `message`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |
| `error`                                                                                                                                                                                                                            | [operations.UpdateAuthSessionResultResponseBodyError](../../models/operations/updateauthsessionresultresponsebodyerror.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |