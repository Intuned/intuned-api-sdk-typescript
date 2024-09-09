# FileBase64Source

Base64-encoded file source.

## Example Usage

```typescript
import { FileBase64Source } from "@intuned/client/models/components";

let value: FileBase64Source = {
  type: "base64",
  data: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [components.FileBase64SourceType](../../models/components/filebase64sourcetype.md) | :heavy_check_mark:                                                                 | Type of file source                                                                |
| `data`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | Base64 encoded string of the contents of the file.                                 |