# JobSchedule

Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time.

## Example Usage

```typescript
import { JobSchedule } from "@intuned/client/models/components";

let value: JobSchedule = {
  calendars: [],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `intervals`                                                    | [components.Intervals](../../models/components/intervals.md)[] | :heavy_minus_sign:                                             | An array of interval objects                                   |
| `calendars`                                                    | [components.Calendars](../../models/components/calendars.md)[] | :heavy_minus_sign:                                             | An array of calendar objects                                   |