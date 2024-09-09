# Summary

A summary of the job run. Contains how many payloads are pending, how many finished executing, succeeded and failed.

## Example Usage

```typescript
import { Summary } from "@intuned/client/models/components";

let value: Summary = {
  apisCount: 2088.76,
  successCount: 6350.59,
  failuresCount: 1613.09,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `apisCount`                                                                       | *number*                                                                          | :heavy_check_mark:                                                                | The total amount of payloads that finished execution, regardless of their status. |
| `successCount`                                                                    | *number*                                                                          | :heavy_check_mark:                                                                | The amount of payloads that finished execution with a success status.             |
| `failuresCount`                                                                   | *number*                                                                          | :heavy_check_mark:                                                                | The amount of payloads that finished execution with a failure status.             |
| `pendingCount`                                                                    | *number*                                                                          | :heavy_minus_sign:                                                                | The amount of payloads that have started execution but did not finish yet.        |