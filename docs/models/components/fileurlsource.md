# FileUrlSource

URL file source.

## Example Usage

```typescript
import { FileUrlSource } from "@intuned/client/models/components";

let value: FileUrlSource = {
    type: "url",
    data: "http://lasting-sex.net",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.FileUrlSourceType](../../models/components/fileurlsourcetype.md) | :heavy_check_mark:                                                           | Type of file source                                                          |
| `data`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | URL to the file                                                              |