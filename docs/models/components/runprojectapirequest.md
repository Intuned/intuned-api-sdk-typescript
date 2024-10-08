# RunProjectApiRequest

Run API request

## Example Usage

```typescript
import { RunProjectApiRequest } from "@intuned/client/models/components";

let value: RunProjectApiRequest = {
    api: "<value>",
    parameters: ["<value>"],
    proxy: "http://username:password@domain:port",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `api`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the API to be executed. This is the file path relative to the `api` folder inside your project. |                                                                                                             |
| `parameters`                                                                                                | *components.ParametersT*                                                                                    | :heavy_check_mark:                                                                                          | The parameters to be passed to the API.                                                                     |                                                                                                             |
| `retry`                                                                                                     | [components.Retry](../../models/components/retry.md)                                                        | :heavy_minus_sign:                                                                                          | Retry policy configurations                                                                                 |                                                                                                             |
| `authSession`                                                                                               | [components.AuthSession](../../models/components/authsession.md)                                            | :heavy_minus_sign:                                                                                          | Auth session configurations                                                                                 |                                                                                                             |
| `proxy`                                                                                                     | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Proxy URL following this format:<br/>`http://username:password@domain:port`<br/>                            | http://username:password@domain:port                                                                        |