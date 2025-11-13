# UpdateAuthSessionResultRequest

## Example Usage

```typescript
import { UpdateAuthSessionResultRequest } from "@intuned/client/models/operations";

let value: UpdateAuthSessionResultRequest = {
  projectName: "my-project",
  authSessionId: "<id>",
  operationId: "aaaabbbCCCCdddd",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `projectName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | Your project name. It is the name you provide when creating a project.                           | my-project                                                                                       |
| `authSessionId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | Authentication session ID. You can obtain it from the Auth Sessions tab in your project details. |                                                                                                  |
| `operationId`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID for the operation. This is obtained from the start request.                               | aaaabbbCCCCdddd                                                                                  |