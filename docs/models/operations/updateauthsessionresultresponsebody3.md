# UpdateAuthSessionResultResponseBody3

## Example Usage

```typescript
import { UpdateAuthSessionResultResponseBody3 } from "@intuned/client/models/operations";

let value: UpdateAuthSessionResultResponseBody3 = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "failed-to-initialize-job-run",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                       | [operations.UpdateAuthSessionResultResponseBodyProjectAuthSessionsUpdateResponseStatus](../../models/operations/updateauthsessionresultresponsebodyprojectauthsessionsupdateresponsestatus.md) | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |
| `message`                                                                                                                                                                                      | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |
| `reason`                                                                                                                                                                                       | [operations.UpdateAuthSessionResultResponseBodyReason](../../models/operations/updateauthsessionresultresponsebodyreason.md)                                                                   | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |