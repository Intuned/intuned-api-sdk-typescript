# TableExtractionSuccessfulResponse

Successful file extraction result

## Example Usage

```typescript
import { TableExtractionSuccessfulResponse } from "@intuned/client/models/components";

let value: TableExtractionSuccessfulResponse = {
    result: [
        {
            pageNumber: 368241,
            title: "<value>",
            content: [["<value>"]],
        },
    ],
    operationId: "<value>",
    status: "completed",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [components.Result](../../models/components/result.md)[]                                                                 | :heavy_check_mark:                                                                                                       | An array of the extracted tables.                                                                                        |
| `operationId`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Operation ID.                                                                                                            |
| `status`                                                                                                                 | [components.TableExtractionSuccessfulResponseStatus](../../models/components/tableextractionsuccessfulresponsestatus.md) | :heavy_check_mark:                                                                                                       | Operation status.                                                                                                        |