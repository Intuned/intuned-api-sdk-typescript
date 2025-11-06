# StartAuthSessionRecorderRequest

## Example Usage

```typescript
import { StartAuthSessionRecorderRequest } from "@intuned/client/models/operations";

let value: StartAuthSessionRecorderRequest = {
  projectName: "my-project",
  requestBody: {
    authSessionId: "auth-session-123",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Your project name. It is the name you provide when creating a project.                                           | my-project                                                                                                       |
| `requestBody`                                                                                                    | [operations.StartAuthSessionRecorderRequestBody](../../models/operations/startauthsessionrecorderrequestbody.md) | :heavy_check_mark:                                                                                               | Start auth session recorder input schema                                                                         |                                                                                                                  |