# ResponseBody4

## Example Usage

```typescript
import { ResponseBody4 } from "@intuned/client/models/operations";

let value: ResponseBody4 = {
  status: "in_progress",
  runId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                       | [operations.CreateAuthSessionResultResponseBodyProjectAuthSessionsCreateResponseStatus](../../models/operations/createauthsessionresultresponsebodyprojectauthsessionscreateresponsestatus.md) | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |
| `runId`                                                                                                                                                                                        | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | Unique identifier for the run, nanoId of 21 characters                                                                                                                                         |