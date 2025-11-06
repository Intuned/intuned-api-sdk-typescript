# Payload

## Example Usage

```typescript
import { Payload } from "@intuned/client/models/operations";

let value: Payload = {
  parameters: {
    "param1": "value1",
    "param2": 42,
    "param3": true,
  },
  retry: {},
  apiName: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `parameters`                                                                                                | Record<string, *any*>                                                                                       | :heavy_check_mark:                                                                                          | The parameters to be passed to the API.                                                                     | {<br/>"param1": "value1",<br/>"param2": 42,<br/>"param3": true<br/>}                                        |
| `requestTimeout`                                                                                            | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Timeout for the API request in seconds. Default is 10 minutes (600 seconds).                                | 600                                                                                                         |
| `retry`                                                                                                     | [operations.CreateJobRetry](../../models/operations/createjobretry.md)                                      | :heavy_minus_sign:                                                                                          | Retry policy configurations in case of failure.                                                             | {<br/>"maximumAttempts": 3<br/>}                                                                            |
| `apiName`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the API to be executed. This is the file path relative to the `api` folder inside your project. |                                                                                                             |