# StartAuthSessionRecorderRequest

Auth session recorder start session

## Example Usage

```typescript
import { StartAuthSessionRecorderRequest } from "@intuned/client/models/components";

let value: StartAuthSessionRecorderRequest = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `authSessionId`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Auth session id, could be an existing auth session to update it, or a new id to create a new session. |
| `proxy`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Proxy URL following this format `http://username:password@domain:port`                                |