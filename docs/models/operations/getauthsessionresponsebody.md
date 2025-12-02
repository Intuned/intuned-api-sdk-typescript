# GetAuthSessionResponseBody

Auth Session details

## Example Usage

```typescript
import { GetAuthSessionResponseBody } from "@intuned/client/models/operations";

let value: GetAuthSessionResponseBody = {
  id: "auth-session-123",
  type: "CREDENTIALS",
  status: "EXPIRED",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The unique identifier for the authentication session                               | auth-session-123                                                                   |
| `type`                                                                             | [operations.GetAuthSessionType](../../models/operations/getauthsessiontype.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `status`                                                                           | [operations.GetAuthSessionStatus](../../models/operations/getauthsessionstatus.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |