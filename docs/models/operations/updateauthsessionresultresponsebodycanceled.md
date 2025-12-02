# UpdateAuthSessionResultResponseBodyCanceled

## Example Usage

```typescript
import { UpdateAuthSessionResultResponseBodyCanceled } from "@intuned/client/models/operations";

let value: UpdateAuthSessionResultResponseBodyCanceled = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "cancelled-user-action",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                     | *"canceled"*                                                                                                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `reason`                                                                                                                     | [operations.UpdateAuthSessionResultResponseBodyReason](../../models/operations/updateauthsessionresultresponsebodyreason.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |