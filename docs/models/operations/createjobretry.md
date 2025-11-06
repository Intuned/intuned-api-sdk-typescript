# CreateJobRetry

Retry policy configurations in case of failure.

## Example Usage

```typescript
import { CreateJobRetry } from "@intuned/client/models/operations";

let value: CreateJobRetry = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `maximumAttempts`                                              | *number*                                                       | :heavy_minus_sign:                                             | Maximum number of attempts to retry the run in case of failure | 3                                                              |