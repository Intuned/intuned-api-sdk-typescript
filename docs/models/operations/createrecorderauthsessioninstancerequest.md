# CreateRecorderAuthSessionInstanceRequest

## Example Usage

```typescript
import { CreateRecorderAuthSessionInstanceRequest } from "@intuned/client/models/operations";

let value: CreateRecorderAuthSessionInstanceRequest = {
    projectName: "my-project",
    createRecorderAuthSessionRequest: {
        id: "<id>",
    },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Your project name. It is the name you provide when creating a project.                                     | my-project                                                                                                 |
| `createRecorderAuthSessionRequest`                                                                         | [components.CreateRecorderAuthSessionRequest](../../models/components/createrecorderauthsessionrequest.md) | :heavy_check_mark:                                                                                         | create recorder authentication session instance request                                                    |                                                                                                            |