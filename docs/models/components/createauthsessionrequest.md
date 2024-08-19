# CreateAuthSessionRequest

Auth session create request

## Example Usage

```typescript
import { CreateAuthSessionRequest } from "@intuned/client/models/components";

let value: CreateAuthSessionRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | Auth session id, can contain letters, numbers and hyphens, default is a random uuid |
| `parameters`                                                                        | *components.APIParameters*                                                          | :heavy_minus_sign:                                                                  | The parameters to be passed to the API.                                             |
| `proxy`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Proxy URL following this format `http://username@password:domain:port`              |