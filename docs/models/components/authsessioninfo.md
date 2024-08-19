# AuthSessionInfo

Auth session information

## Example Usage

```typescript
import { AuthSessionInfo } from "@intuned/client/models/components";

let value: AuthSessionInfo = {
    id: "<id>",
    status: "EXPIRED",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Auth session ID                                                                      |
| `status`                                                                             | [components.AuthSessionInfoStatus](../../models/components/authsessioninfostatus.md) | :heavy_check_mark:                                                                   | Auth session status                                                                  |