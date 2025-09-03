# ExtendedPayloads

## Example Usage

```typescript
import { ExtendedPayloads } from "@intuned/client/models/operations";

let value: ExtendedPayloads = {
  api: "<value>",
  parameters: {
    "param1": "value1",
    "param2": 42,
    "param3": true,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `api`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the API to be executed. This is the file path relative to the `api` folder inside your project. |                                                                                                             |
| `runId`                                                                                                     | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `parameters`                                                                                                | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | The parameters to be passed to the API.                                                                     | {<br/>"param1": "value1",<br/>"param2": 42,<br/>"param3": true<br/>}                                        |