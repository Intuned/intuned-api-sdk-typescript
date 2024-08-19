# QueueItem

An item to be appended once to the queue.

## Example Usage

```typescript
import { QueueItem } from "@intuned/client/models/components";

let value: QueueItem = {
    apiName: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `apiName`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the API to be executed. This is the file path relative to the `api` folder inside your project. |
| `parameters`                                                                                                | *components.APIParameters*                                                                                  | :heavy_minus_sign:                                                                                          | The parameters to be passed to the API.                                                                     |
| `retry`                                                                                                     | [components.Retry](../../models/components/retry.md)                                                        | :heavy_minus_sign:                                                                                          | Retry policy configurations                                                                                 |
| `authSession`                                                                                               | [components.AuthSession](../../models/components/authsession.md)                                            | :heavy_minus_sign:                                                                                          | Auth session configurations                                                                                 |