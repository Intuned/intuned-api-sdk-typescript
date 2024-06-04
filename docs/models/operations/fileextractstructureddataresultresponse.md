# FileExtractStructuredDataResultResponse


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `httpMeta`                                                                | [components.HTTPMetadata](../../models/components/httpmetadata.md)        | :heavy_check_mark:                                                        | N/A                                                                       |                                                                           |
| `structuredDataExtractionAsyncResponse`                                   | *components.StructuredDataExtractionAsyncResponse*                        | :heavy_minus_sign:                                                        | Result of the operation. Can be pending, completed or failed.             | {<br/>"$ref": "#/components/examples/StructuredDataExtractionAsyncResponse"<br/>} |