# Reason

## Example Usage

```typescript
import { Reason } from "@intuned/client/models/operations";

let value: Reason = {
  type: "api-access-disabled",
  message: "<value>",
  docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [operations.RunApiResultType](../../models/operations/runapiresulttype.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `message`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `docUrl`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Optional URL to documentation for this error                               | https://docs.intunedhq.com/docs/support/reasons#terminated                 |
| `details`                                                                  | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |