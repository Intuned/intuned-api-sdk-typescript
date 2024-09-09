# Calendars

A calendar object. It is similar to a cron string, but more verbose.

## Example Usage

```typescript
import { Calendars } from "@intuned/client/models/components";

let value: Calendars = {
  second: "*",
  minute: "*",
  hour: "<value>",
  dayOfMonth: "<value>",
  dayOfWeek: {
    start: "MONDAY",
    end: "FRIDAY",
    step: 1,
  },
  month: [
    {
      start: 1,
      end: 30,
      step: 1,
    },
  ],
  year: {
    start: 1,
    end: 30,
    step: 1,
  },
  comment: "Trigger every midnight hour on work days",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `second`                                                         | *components.JobCalendarValue*                                    | :heavy_minus_sign:                                               | N/A                                                              |
| `minute`                                                         | *components.JobCalendarValue*                                    | :heavy_minus_sign:                                               | N/A                                                              |
| `hour`                                                           | *components.JobCalendarValue*                                    | :heavy_minus_sign:                                               | N/A                                                              |
| `dayOfMonth`                                                     | *components.JobCalendarValue*                                    | :heavy_minus_sign:                                               | N/A                                                              |
| `dayOfWeek`                                                      | *components.JobCalendarValue*                                    | :heavy_minus_sign:                                               | N/A                                                              |
| `month`                                                          | *components.JobCalendarValue*                                    | :heavy_minus_sign:                                               | N/A                                                              |
| `year`                                                           | *components.JobCalendarValue*                                    | :heavy_minus_sign:                                               | N/A                                                              |
| `comment`                                                        | *string*                                                         | :heavy_minus_sign:                                               | A comment to describe what the calendar is supposed to represent |