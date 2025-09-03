# GetJobsSchedule

Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time.

## Example Usage

```typescript
import { GetJobsSchedule } from "@intuned/client/models/operations";

let value: GetJobsSchedule = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `jitter`                                                                     | *operations.GetJobsJitter*                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `intervals`                                                                  | [operations.GetJobsIntervals](../../models/operations/getjobsintervals.md)[] | :heavy_minus_sign:                                                           | An array of interval objects                                                 |
| `calendars`                                                                  | [operations.GetJobsCalendars](../../models/operations/getjobscalendars.md)[] | :heavy_minus_sign:                                                           | An array of calendar objects                                                 |