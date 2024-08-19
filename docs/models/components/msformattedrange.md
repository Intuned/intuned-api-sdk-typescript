# MsFormattedRange

## Example Usage

```typescript
import { MsFormattedRange } from "@intuned/client/models/components";

let value: MsFormattedRange = {
    min: "<value>",
    max: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `min`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | The minimum duration to wait. An [ms-formatted string](https://github.com/vercel/ms) string. |
| `max`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | The maximum duration to wait. An [ms-formatted string](https://github.com/vercel/ms) string. |