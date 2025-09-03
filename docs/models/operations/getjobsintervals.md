# GetJobsIntervals

An interval object, which represents a period to trigger the job. The interval is relative to the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

## Example Usage

```typescript
import { GetJobsIntervals } from "@intuned/client/models/operations";

let value: GetJobsIntervals = {
  every: 922353,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `every`                   | *operations.GetJobsEvery* | :heavy_check_mark:        | N/A                       |