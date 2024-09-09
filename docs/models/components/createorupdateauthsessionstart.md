# CreateOrUpdateAuthSessionStart

## Example Usage

```typescript
import { CreateOrUpdateAuthSessionStart } from "@intuned/client/models/components";

let value: CreateOrUpdateAuthSessionStart = {
  status: "started",
  operationId: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                           | [components.CreateOrUpdateAuthSessionStartStatus](../../models/components/createorupdateauthsessionstartstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `operationId`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Operation ID for the auth session creation. This is used in the resume and result operations.                      |