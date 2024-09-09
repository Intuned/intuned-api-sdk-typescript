# ImageFile

Image file data to extract from

## Example Usage

```typescript
import { ImageFile } from "@intuned/client/models/components";

let value: ImageFile = {
  type: "image",
  source: {
    type: "url",
    data: "http://lasting-sex.net",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | The file type                                      |
| `source`                                           | *components.FileSource*                            | :heavy_check_mark:                                 | N/A                                                |