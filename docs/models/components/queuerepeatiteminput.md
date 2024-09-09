# QueueRepeatItemInput

An item that will be repeatably appended to the queue.

## Example Usage

```typescript
import { QueueRepeatItemInput } from "@intuned/client/models/components";

let value: QueueRepeatItemInput = {
  apiName: "<value>",
  repeat: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `apiName`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the API to be executed. This is the file path relative to the `api` folder inside your project. |
| `parameters`                                                                                                | *components.APIParameters*                                                                                  | :heavy_minus_sign:                                                                                          | The parameters to be passed to the API.                                                                     |
| `retry`                                                                                                     | [components.Retry](../../models/components/retry.md)                                                        | :heavy_minus_sign:                                                                                          | Retry policy configurations                                                                                 |
| `repeat`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Repeat period, minimum of 10 minutes. On every period, this item will be appended to the queue.             |