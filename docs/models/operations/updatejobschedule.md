# UpdateJobSchedule

Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time.

## Example Usage

```typescript
import { UpdateJobSchedule } from "@intuned/client/models/operations";

let value: UpdateJobSchedule = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `jitter`                                                                         | *operations.UpdateJobJitter*                                                     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `intervals`                                                                      | [operations.UpdateJobIntervals](../../models/operations/updatejobintervals.md)[] | :heavy_minus_sign:                                                               | An array of interval objects                                                     |
| `calendars`                                                                      | [operations.UpdateJobCalendars](../../models/operations/updatejobcalendars.md)[] | :heavy_minus_sign:                                                               | An array of calendar objects                                                     |