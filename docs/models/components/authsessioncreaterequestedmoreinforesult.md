# AuthSessionCreateRequestedMoreInfoResult

Auth session create requested more info

## Example Usage

```typescript
import { AuthSessionCreateRequestedMoreInfoResult } from "@intuned/client/models/components";

let value: AuthSessionCreateRequestedMoreInfoResult = {
    status: "requested_more_info",
    id: "<id>",
    details: {
        choices: ["<value>"],
        requestType: "multiple_choice",
        action: "request_more_info",
        messageToUser: "<value>",
    },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                               | [components.AuthSessionCreateRequestedMoreInfoResultStatus](../../models/components/authsessioncreaterequestedmoreinforesultstatus.md) | :heavy_check_mark:                                                                                                                     | Status of the auth session creation operation                                                                                          |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the info request action. Used in resuming the creation.                                                                      |
| `details`                                                                                                                              | *components.Details*                                                                                                                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |