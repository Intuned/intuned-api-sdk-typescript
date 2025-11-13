# ValidateAuthSessionStartRequest

## Example Usage

```typescript
import { ValidateAuthSessionStartRequest } from "@intuned/client/models/operations";

let value: ValidateAuthSessionStartRequest = {
  projectName: "my-project",
  authSessionId: "<id>",
  requestBody: {
    proxy: "http://username:password@domain:port",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Your project name. It is the name you provide when creating a project.                                           | my-project                                                                                                       |
| `authSessionId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Authentication session ID. You can obtain it from the Auth Sessions tab in your project details.                 |                                                                                                                  |
| `requestBody`                                                                                                    | [operations.ValidateAuthSessionStartRequestBody](../../models/operations/validateauthsessionstartrequestbody.md) | :heavy_check_mark:                                                                                               | Validate auth session input schema                                                                               |                                                                                                                  |