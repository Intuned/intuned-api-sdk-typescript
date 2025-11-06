# Done

## Example Usage

```typescript
import { Done } from "@intuned/client/models/operations";

let value: Done = {
  status: "done",
  authSessionId: "auth-session-123",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `status`                                                                       | [operations.ResponseBodyStatus](../../models/operations/responsebodystatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `authSessionId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier for the authentication session                           | auth-session-123                                                               |