# UpdateAuthSessionResultResponseBody4

## Example Usage

```typescript
import { UpdateAuthSessionResultResponseBody4 } from "@intuned/client/models/operations";

let value: UpdateAuthSessionResultResponseBody4 = {
  status: "in_progress",
  runId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                             | [operations.UpdateAuthSessionResultResponseBodyProjectAuthSessionsUpdateResponse200Status](../../models/operations/updateauthsessionresultresponsebodyprojectauthsessionsupdateresponse200status.md) | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `runId`                                                                                                                                                                                              | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Unique identifier for the run, nanoId of 21 characters                                                                                                                                               |