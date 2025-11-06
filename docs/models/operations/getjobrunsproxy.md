# GetJobRunsProxy

Proxy configuration for the job, stored as JSONB

## Example Usage

```typescript
import { GetJobRunsProxy } from "@intuned/client/models/operations";

let value: GetJobRunsProxy = {
  version: "v1",
  url: "https://bowed-language.info",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `version`                                                                    | [operations.GetJobRunsVersion](../../models/operations/getjobrunsversion.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |