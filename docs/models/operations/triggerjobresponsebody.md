# TriggerJobResponseBody

Job triggered successfully.

## Example Usage

```typescript
import { TriggerJobResponseBody } from "@intuned/client/models/operations";

let value: TriggerJobResponseBody = {
  jobRunId: "<id>",
  message: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `jobRunId`                                             | *string*                                               | :heavy_check_mark:                                     | The ID of the triggered JobRun.                        |
| `message`                                              | *string*                                               | :heavy_check_mark:                                     | A message indicating the result of the trigger action. |