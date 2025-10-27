# GetJobSchedule

Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time.

## Example Usage

```typescript
import { GetJobSchedule } from "@intuned/client/models/operations";

let value: GetJobSchedule = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `jitter`                                                                   | *operations.GetJobJitter*                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `intervals`                                                                | [operations.GetJobIntervals](../../models/operations/getjobintervals.md)[] | :heavy_minus_sign:                                                         | An array of interval objects                                               |
| `calendars`                                                                | [operations.GetJobCalendars](../../models/operations/getjobcalendars.md)[] | :heavy_minus_sign:                                                         | An array of calendar objects                                               |