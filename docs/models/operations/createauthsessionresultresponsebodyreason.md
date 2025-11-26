# CreateAuthSessionResultResponseBodyReason

## Example Usage

```typescript
import { CreateAuthSessionResultResponseBodyReason } from "@intuned/client/models/operations";

let value: CreateAuthSessionResultResponseBodyReason = {
  type: "auth-session-validate-dependency-failed",
  message: "<value>",
  docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.CreateAuthSessionResultResponseBodyType](../../models/operations/createauthsessionresultresponsebodytype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `docUrl`                                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Optional URL to documentation for this error                                                                             | https://docs.intunedhq.com/docs/support/reasons#terminated                                                               |
| `details`                                                                                                                | *any*                                                                                                                    | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |