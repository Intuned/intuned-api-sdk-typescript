# Schedule

Execution schedule for the queue.

## Example Usage

```typescript
import { Schedule } from "@intuned/client/models/components";

let value: Schedule = {
  pause: "<value>",
  resume: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pause`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | Cron string representing the pause schedule. At this schedule, the queue will pause execution.   |
| `resume`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | Cron string representing the resume schedule. At this schedule, the queue will resume execution. |