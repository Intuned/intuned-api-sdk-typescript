# CreateAuthSessionResumeRequest

## Example Usage

```typescript
import { CreateAuthSessionResumeRequest } from "@intuned/client/models/operations";

let value: CreateAuthSessionResumeRequest = {
    projectName: "my-project",
    operationId: "aaaabbbCCCCdddd",
    authSessionCreateResume: {
        input: "<value>",
        infoRequestId: "<value>",
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | Your project name. It is the name you provide when creating a project.                             | my-project                                                                                         |
| `operationId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID for the requested auth session creation operation. This is obtained from the start request. | aaaabbbCCCCdddd                                                                                    |
| `authSessionCreateResume`                                                                          | [components.AuthSessionCreateResume](../../models/components/authsessioncreateresume.md)           | :heavy_check_mark:                                                                                 | resume authentication session creation request                                                     |                                                                                                    |