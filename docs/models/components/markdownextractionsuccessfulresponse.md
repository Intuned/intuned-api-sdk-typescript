# MarkdownExtractionSuccessfulResponse

Successful file extraction result

## Example Usage

```typescript
import { MarkdownExtractionSuccessfulResponse } from "@intuned/client/models/components";

let value: MarkdownExtractionSuccessfulResponse = {
  result: "<value>",
  operationId: "<value>",
  status: "completed",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The extracted markdown                                                                                                         |
| `operationId`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Operation ID.                                                                                                                  |
| `status`                                                                                                                       | [components.MarkdownExtractionSuccessfulResponseStatus](../../models/components/markdownextractionsuccessfulresponsestatus.md) | :heavy_check_mark:                                                                                                             | Operation status.                                                                                                              |