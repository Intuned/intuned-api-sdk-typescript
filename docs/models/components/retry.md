# Retry

Retry policy configurations

## Example Usage

```typescript
import { Retry } from "@intuned/client/models/components";

let value: Retry = {
  maximumAttempts: 8423.42,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `maximumAttempts`                                                      | *number*                                                               | :heavy_check_mark:                                                     | The maximum number of attempts to retry the API execution if it fails. |