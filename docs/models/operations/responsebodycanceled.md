# ResponseBodyCanceled

## Example Usage

```typescript
import { ResponseBodyCanceled } from "@intuned/client/models/operations";

let value: ResponseBodyCanceled = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "job-run-paused",
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
| `reason`                                                                                                                     | [operations.CreateAuthSessionResultResponseBodyReason](../../models/operations/createauthsessionresultresponsebodyreason.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |