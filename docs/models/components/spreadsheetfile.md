# SpreadsheetFile

Spreadsheet file data to extract from. The spreadsheet will be converted to a PDF before extraction.

## Example Usage

```typescript
import { SpreadsheetFile } from "@intuned/client/models/components";

let value: SpreadsheetFile = {
  type: "spreadsheet",
  sheetName: "<value>",
  source: {
    type: "url",
    data: "http://bountiful-pension.com",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [components.SpreadsheetFileType](../../models/components/spreadsheetfiletype.md) | :heavy_check_mark:                                                               | The file type                                                                    |
| `sheetName`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The sheet name to extract from                                                   |
| `source`                                                                         | *components.FileSource*                                                          | :heavy_check_mark:                                                               | N/A                                                                              |