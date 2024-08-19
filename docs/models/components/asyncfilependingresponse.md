# AsyncFilePendingResponse

Pending file extraction result

## Example Usage

```typescript
import { AsyncFilePendingResponse } from "@intuned/client/models/components";

let value: AsyncFilePendingResponse = {
    operationId: "aaaabbbCCCCdddd",
    status: "pending",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `operationId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Operation ID                                                                                           | aaaabbbCCCCdddd                                                                                        |
| `status`                                                                                               | [components.AsyncFilePendingResponseStatus](../../models/components/asyncfilependingresponsestatus.md) | :heavy_check_mark:                                                                                     | Operation status.                                                                                      |                                                                                                        |