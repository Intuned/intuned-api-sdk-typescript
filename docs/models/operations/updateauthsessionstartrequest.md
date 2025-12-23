# UpdateAuthSessionStartRequest

## Example Usage

```typescript
import { UpdateAuthSessionStartRequest } from "@intuned/client/models/operations";

let value: UpdateAuthSessionStartRequest = {
  projectName: "my-project",
  authSessionId: "<id>",
  requestBody: {
    parameters: {
      "param1": "value1",
      "param2": 42,
      "param3": true,
    },
    proxy: "http://username:password@proxy.example.com:8080",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name you assigned when creating the Project.                                                             | my-project                                                                                                   |
| `authSessionId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Authentication session ID. You can obtain it from the Auth Sessions tab in your project details.             |                                                                                                              |
| `requestBody`                                                                                                | [operations.UpdateAuthSessionStartRequestBody](../../models/operations/updateauthsessionstartrequestbody.md) | :heavy_check_mark:                                                                                           | Update AuthSession input schema                                                                              |                                                                                                              |