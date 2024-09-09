# UpdateAuthSessionRequest

Auth session create request

## Example Usage

```typescript
import { UpdateAuthSessionRequest } from "@intuned/client/models/components";

let value: UpdateAuthSessionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Auth session id.                                                       |
| `parameters`                                                           | *components.APIParameters*                                             | :heavy_minus_sign:                                                     | The parameters to be passed to the API.                                |
| `proxy`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Proxy URL following this format `http://username:password@domain:port` |