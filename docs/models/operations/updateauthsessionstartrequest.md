# UpdateAuthSessionStartRequest

## Example Usage

```typescript
import { UpdateAuthSessionStartRequest } from "@intuned/client/models/operations";

let value: UpdateAuthSessionStartRequest = {
  projectName: "my-project",
  updateAuthSessionRequest: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectName`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | Your project name. It is the name you provide when creating a project.                     | my-project                                                                                 |
| `updateAuthSessionRequest`                                                                 | [components.UpdateAuthSessionRequest](../../models/components/updateauthsessionrequest.md) | :heavy_check_mark:                                                                         | update authentication session request                                                      |                                                                                            |