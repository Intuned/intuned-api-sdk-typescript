# RunApiStartResponseBody

Run started successfully.

## Example Usage

```typescript
import { RunApiStartResponseBody } from "@intuned/client/models/operations";

let value: RunApiStartResponseBody = {
  runId: "<id>",
  status: "pending",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `runId`                                                | *string*                                               | :heavy_check_mark:                                     | Unique identifier for the run, nanoId of 21 characters |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | N/A                                                    |