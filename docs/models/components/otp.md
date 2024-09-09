# Otp

Requested more info - OTP

## Example Usage

```typescript
import { Otp } from "@intuned/client/models/components";

let value: Otp = {
  requestType: "otp",
  action: "request_more_info",
  messageToUser: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestType`                                                                  | [components.DetailsRequestType](../../models/components/detailsrequesttype.md) | :heavy_check_mark:                                                             | Type of the requested info.                                                    |
| `action`                                                                       | [components.DetailsAction](../../models/components/detailsaction.md)           | :heavy_check_mark:                                                             | The requested action.                                                          |
| `messageToUser`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | Message sent from the `create` file.                                           |