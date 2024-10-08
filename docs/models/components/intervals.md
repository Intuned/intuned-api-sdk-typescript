# Intervals

An interval object, which represents a period to trigger the job. The interval is relative to the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

## Example Usage

```typescript
import { Intervals } from "@intuned/client/models/components";

let value: Intervals = {
    every: 6169.34,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `every`            | *components.Every* | :heavy_check_mark: | N/A                |