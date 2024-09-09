# AuthSessionCreateDoneResult

Auth session create done

## Example Usage

```typescript
import { AuthSessionCreateDoneResult } from "@intuned/client/models/components";

let value: AuthSessionCreateDoneResult = {
  status: "done",
  authSessionId: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                     | [components.AuthSessionCreateDoneResultStatus](../../models/components/authsessioncreatedoneresultstatus.md) | :heavy_check_mark:                                                                                           | Status of auth session creation operation                                                                    |
| `authSessionId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Auth session ID                                                                                              |