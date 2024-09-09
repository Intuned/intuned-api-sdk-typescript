# PdfFile

PDF file data to extract from

## Example Usage

```typescript
import { PdfFile } from "@intuned/client/models/components";

let value: PdfFile = {
  type: "pdf",
  source: {
    type: "base64",
    data: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.PdfFileType](../../models/components/pdffiletype.md)                                     | :heavy_check_mark:                                                                                   | The file type                                                                                        |
| `pages`                                                                                              | *number*[]                                                                                           | :heavy_minus_sign:                                                                                   | The pages to extract from. If not provided, all pages will be extracted (this will affect the cost). |
| `source`                                                                                             | *components.FileSource*                                                                              | :heavy_check_mark:                                                                                   | N/A                                                                                                  |