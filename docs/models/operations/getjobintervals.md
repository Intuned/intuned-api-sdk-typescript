# GetJobIntervals

An interval object, which represents a period to trigger the job. The interval is relative to the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

## Example Usage

```typescript
import { GetJobIntervals } from "@intuned/client/models/operations";

let value: GetJobIntervals = {
  every: 677880,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `every`                  | *operations.GetJobEvery* | :heavy_check_mark:       | N/A                      |