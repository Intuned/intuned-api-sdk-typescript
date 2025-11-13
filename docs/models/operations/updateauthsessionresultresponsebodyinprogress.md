# UpdateAuthSessionResultResponseBodyInProgress

## Example Usage

```typescript
import { UpdateAuthSessionResultResponseBodyInProgress } from "@intuned/client/models/operations";

let value: UpdateAuthSessionResultResponseBodyInProgress = {
  status: "in_progress",
  runId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                             | [operations.UpdateAuthSessionResultResponseBodyProjectAuthSessionsUpdateResponse200Status](../../models/operations/updateauthsessionresultresponsebodyprojectauthsessionsupdateresponse200status.md) | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `runId`                                                                                                                                                                                              | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Unique identifier for the run, nanoId of 21 characters                                                                                                                                               |