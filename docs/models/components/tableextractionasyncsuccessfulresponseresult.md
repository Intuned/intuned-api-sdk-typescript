# TableExtractionAsyncSuccessfulResponseResult

An extracted table.


## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `pageNumber`                               | *number*                                   | :heavy_check_mark:                         | The page number where the table was found. |
| `title`                                    | *string*                                   | :heavy_check_mark:                         | Title of the table if any.                 |
| `content`                                  | *string*[][]                               | :heavy_check_mark:                         | Table content. An array of rows.           |