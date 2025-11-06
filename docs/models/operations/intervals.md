# Intervals

An interval object, which represents a period to trigger the job. The interval is relative to the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

## Example Usage

```typescript
import { Intervals } from "@intuned/client/models/operations";

let value: Intervals = {
  every: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `every`            | *operations.Every* | :heavy_check_mark: | N/A                |