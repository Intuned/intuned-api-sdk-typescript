# CreateOrUpdateAuthSessionStartRequestBody

Create auth session input schema

## Example Usage

```typescript
import { CreateOrUpdateAuthSessionStartRequestBody } from "@intuned/client/models/operations";

let value: CreateOrUpdateAuthSessionStartRequestBody = {
  id: "auth-session-123",
  parameters: {
    "param1": "value1",
    "param2": 42,
    "param3": true,
  },
  proxy: "http://username:password@proxy.example.com:8080",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | The unique identifier for the authentication session                                      | auth-session-123                                                                          |
| `parameters`                                                                              | Record<string, *any*>                                                                     | :heavy_check_mark:                                                                        | The parameters to be passed to the API.                                                   | {<br/>"param1": "value1",<br/>"param2": 42,<br/>"param3": true<br/>}                      |
| `proxy`                                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | Proxy configuration for the job                                                           | http://username:password@proxy.example.com:8080                                           |
| `createAttempts`                                                                          | *number*                                                                                  | :heavy_minus_sign:                                                                        | Number of attempts to create a new auth session if the current one is invalid or expired. | 3                                                                                         |
| `checkAttempts`                                                                           | *number*                                                                                  | :heavy_minus_sign:                                                                        | Number of attempts to check the validity of the auth session before recreating it.        | 3                                                                                         |
| `saveTrace`                                                                               | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |