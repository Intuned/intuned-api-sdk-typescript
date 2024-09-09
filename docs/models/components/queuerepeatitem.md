# QueueRepeatItem

Details of a repeatable item.

## Example Usage

```typescript
import { QueueRepeatItem } from "@intuned/client/models/components";

let value: QueueRepeatItem = {
  apiName: "<value>",
  repeat: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `apiName`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the API to be executed. This is the file path relative to the `api` folder inside your project. |
| `parameters`                                                                                                | *components.APIParameters*                                                                                  | :heavy_minus_sign:                                                                                          | The parameters to be passed to the API.                                                                     |
| `retry`                                                                                                     | [components.Retry](../../models/components/retry.md)                                                        | :heavy_minus_sign:                                                                                          | Retry policy configurations                                                                                 |
| `repeat`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Repeat period, minimum of 10 minutes. On every period, this item will be appended to the queue.             |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The ID of the repeatable item.                                                                              |
| `lastRunId`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The run ID of the last time this repeatable item executed.                                                  |