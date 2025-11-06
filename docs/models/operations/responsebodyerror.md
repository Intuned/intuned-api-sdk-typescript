# ResponseBodyError

## Example Usage

```typescript
import { ResponseBodyError } from "@intuned/client/models/operations";

let value: ResponseBodyError = {
  message: "An error occurred while executing the run",
  code: "script-process-crashed",
  category: "auth",
  docUrl: "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
  correlationId: "123e4567-e89b-12d3-a456-426614174000",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `message`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Error message describing the failure                                               | An error occurred while executing the run                                          |
| `code`                                                                             | [operations.ResponseBodyCode](../../models/operations/responsebodycode.md)         | :heavy_minus_sign:                                                                 | Optional error code for more specific error identification                         | script-process-crashed                                                             |
| `category`                                                                         | [operations.ResponseBodyCategory](../../models/operations/responsebodycategory.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `retirable`                                                                        | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `docUrl`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | Optional URL to documentation for this error                                       | https://docs.intunedhq.com/docs/support/errors#run-execution-error                 |
| `correlationId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | Optional correlation ID for tracing the error in logs                              | 123e4567-e89b-12d3-a456-426614174000                                               |
| `details`                                                                          | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |