# AuthSessionCreateFailedResult

Auth session create failed.

## Example Usage

```typescript
import { AuthSessionCreateFailedResult } from "@intuned/client/models/components";

let value: AuthSessionCreateFailedResult = {
    status: "failed",
    error: "<value>",
    message: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                         | [components.AuthSessionCreateFailedResultStatus](../../models/components/authsessioncreatefailedresultstatus.md) | :heavy_check_mark:                                                                                               | Status of auth session creation operation.                                                                       |
| `error`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Error code.                                                                                                      |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Error message.                                                                                                   |