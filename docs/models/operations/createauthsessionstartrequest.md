# CreateAuthSessionStartRequest

## Example Usage

```typescript
import { CreateAuthSessionStartRequest } from "@intuned/client/models/operations";

let value: CreateAuthSessionStartRequest = {
    projectName: "my-project",
    createAuthSessionRequest: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectName`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | Your project name. It is the name you provide when creating a project.                     | my-project                                                                                 |
| `createAuthSessionRequest`                                                                 | [components.CreateAuthSessionRequest](../../models/components/createauthsessionrequest.md) | :heavy_check_mark:                                                                         | create authentication session request                                                      |                                                                                            |