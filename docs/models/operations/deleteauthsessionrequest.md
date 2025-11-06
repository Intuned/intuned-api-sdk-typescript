# DeleteAuthSessionRequest

## Example Usage

```typescript
import { DeleteAuthSessionRequest } from "@intuned/client/models/operations";

let value: DeleteAuthSessionRequest = {
  projectName: "my-project",
  authSessionId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | Your project name. It is the name you provide when creating a project.                           | my-project                                                                                       |
| `authSessionId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | Authentication session ID. You can obtain it from the Auth Sessions tab in your project details. |                                                                                                  |