# ResponseBodyReason

## Example Usage

```typescript
import { ResponseBodyReason } from "@intuned/client/models/operations";

let value: ResponseBodyReason = {
  type: "api-access-disabled",
  message: "<value>",
  docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [operations.ResponseBodyType](../../models/operations/responsebodytype.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `message`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `docUrl`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Optional URL to documentation for this error                               | https://docs.intunedhq.com/docs/support/reasons#terminated                 |
| `details`                                                                  | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |