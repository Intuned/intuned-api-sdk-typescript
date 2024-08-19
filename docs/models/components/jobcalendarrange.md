# JobCalendarRange

A range of values for a calendar property. The type depends on the property.

## Example Usage

```typescript
import { JobCalendarRange } from "@intuned/client/models/components";

let value: JobCalendarRange = {
    start: 1,
    end: 30,
    step: 1,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `start`                                | *components.Start*                     | :heavy_check_mark:                     | Start of the range                     |
| `end`                                  | *components.End*                       | :heavy_minus_sign:                     | End of the range. defaults to `start`. |
| `step`                                 | *number*                               | :heavy_minus_sign:                     | Step of the range                      |