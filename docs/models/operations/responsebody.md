# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@intuned/client/models/operations";

let value: ResponseBody = {
  id: "auth-session-123",
  type: "RUNTIME",
  status: "PENDING",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier for the authentication session                                 | auth-session-123                                                                     |
| `type`                                                                               | [operations.GetAuthSessionsType](../../models/operations/getauthsessionstype.md)     | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `status`                                                                             | [operations.GetAuthSessionsStatus](../../models/operations/getauthsessionsstatus.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |