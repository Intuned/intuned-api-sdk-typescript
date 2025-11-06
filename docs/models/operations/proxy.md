# Proxy

Proxy configuration for the job, stored as JSONB

## Example Usage

```typescript
import { Proxy } from "@intuned/client/models/operations";

let value: Proxy = {
  version: "v1",
  url: "https://elliptical-integer.org",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `version`                                                | [operations.Version](../../models/operations/version.md) | :heavy_check_mark:                                       | N/A                                                      |
| `url`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |