# AsyncRunPendingResponse

Pending API run

## Example Usage

```typescript
import { AsyncRunPendingResponse } from "@intuned/client/models/components";

let value: AsyncRunPendingResponse = {
    status: "pending",
    runId: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `status`                                                                                             | [components.AsyncRunPendingResponseStatus](../../models/components/asyncrunpendingresponsestatus.md) | :heavy_check_mark:                                                                                   | The status of the run                                                                                |
| `runId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | run id of the execution                                                                              |