# ResponseBody5

## Example Usage

```typescript
import { ResponseBody5 } from "@intuned/client/models/operations";

let value: ResponseBody5 = {
  status: "failed",
  message: "<value>",
  error: {
    message: "An error occurred while executing the run",
    code: "script-process-crashed",
    category: "execution",
    docUrl:
      "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
    correlationId: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                             | [operations.CreateAuthSessionResultResponseBodyProjectAuthSessionsCreateResponse200Status](../../models/operations/createauthsessionresultresponsebodyprojectauthsessionscreateresponse200status.md) | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `message`                                                                                                                                                                                            | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `error`                                                                                                                                                                                              | [operations.ResponseBodyError](../../models/operations/responsebodyerror.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |