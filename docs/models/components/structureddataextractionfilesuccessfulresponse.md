# StructuredDataExtractionFileSuccessfulResponse

Successful file extraction result


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | *any*                                                            | :heavy_check_mark:                                               | The extracted data formatted according to the input `dataSchema` |
| `operationId`                                                    | *string*                                                         | :heavy_check_mark:                                               | Operation ID.                                                    |
| `status`                                                         | [components.Status](../../models/components/status.md)           | :heavy_check_mark:                                               | Operation status.                                                |