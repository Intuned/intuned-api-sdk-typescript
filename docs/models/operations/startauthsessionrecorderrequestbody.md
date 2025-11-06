# StartAuthSessionRecorderRequestBody

Start auth session recorder input schema

## Example Usage

```typescript
import { StartAuthSessionRecorderRequestBody } from "@intuned/client/models/operations";

let value: StartAuthSessionRecorderRequestBody = {
  authSessionId: "auth-session-123",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `authSessionId`                                      | *string*                                             | :heavy_minus_sign:                                   | The unique identifier for the authentication session | auth-session-123                                     |
| `proxy`                                              | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |                                                      |