# CreateAuthSessionStart

## Example Usage

```typescript
import { CreateAuthSessionStart } from "@intuned/client/models/components";

let value: CreateAuthSessionStart = {
    status: "started",
    operationId: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `status`                                                                                           | [components.CreateAuthSessionStartStatus](../../models/components/createauthsessionstartstatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `operationId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | Operation ID for the auth session creation. This is used in the resume and result operations.      |