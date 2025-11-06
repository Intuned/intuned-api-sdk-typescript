# GetJobRunProxy

Proxy configuration for the job, stored as JSONB

## Example Usage

```typescript
import { GetJobRunProxy } from "@intuned/client/models/operations";

let value: GetJobRunProxy = {
  version: "v1",
  url: "https://doting-tuba.info/",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `version`                                                                  | [operations.GetJobRunVersion](../../models/operations/getjobrunversion.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `url`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |