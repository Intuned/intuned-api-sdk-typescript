# UpdateAuthSessionResultRequest

## Example Usage

```typescript
import { UpdateAuthSessionResultRequest } from "@intuned/client/models/operations";

let value: UpdateAuthSessionResultRequest = {
  projectName: "my-project",
  operationId: "aaaabbbCCCCdddd",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | Your project name. It is the name you provide when creating a project.                             | my-project                                                                                         |
| `operationId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID for the requested auth session creation operation. This is obtained from the start request. | aaaabbbCCCCdddd                                                                                    |