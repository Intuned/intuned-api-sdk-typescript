# Canceled

## Example Usage

```typescript
import { Canceled } from "@intuned/client/models/operations";

let value: Canceled = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "terminated",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `status`                                                                       | *"canceled"*                                                                   | :heavy_check_mark:                                                             | N/A                                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `reason`                                                                       | [operations.ResponseBodyReason](../../models/operations/responsebodyreason.md) | :heavy_check_mark:                                                             | N/A                                                                            |