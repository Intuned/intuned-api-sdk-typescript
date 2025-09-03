# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@intuned/client/models/operations";

let value: ResponseBody3 = {
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

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                                                       | [operations.CreateAuthSessionResultResponseBodyProjectAuthSessionsCreateStatus](../../models/operations/createauthsessionresultresponsebodyprojectauthsessionscreatestatus.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `message`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `reason`                                                                                                                                                                       | [operations.ResponseBodyReason](../../models/operations/responsebodyreason.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |