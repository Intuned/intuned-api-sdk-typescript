# Schedule

Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time.

## Example Usage

```typescript
import { Schedule } from "@intuned/client/models/operations";

let value: Schedule = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `jitter`                                                       | *operations.Jitter*                                            | :heavy_minus_sign:                                             | N/A                                                            |
| `intervals`                                                    | [operations.Intervals](../../models/operations/intervals.md)[] | :heavy_minus_sign:                                             | An array of interval objects                                   |
| `calendars`                                                    | [operations.Calendars](../../models/operations/calendars.md)[] | :heavy_minus_sign:                                             | An array of calendar objects                                   |