# ResponseBodyInProgress

## Example Usage

```typescript
import { ResponseBodyInProgress } from "@intuned/client/models/operations";

let value: ResponseBodyInProgress = {
  status: "in_progress",
  runId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | *"in_progress"*                                        | :heavy_check_mark:                                     | N/A                                                    |
| `runId`                                                | *string*                                               | :heavy_check_mark:                                     | Unique identifier for the run, nanoId of 21 characters |