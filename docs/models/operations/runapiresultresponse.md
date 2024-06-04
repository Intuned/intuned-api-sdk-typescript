# RunApiResultResponse


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `httpMeta`                                                          | [components.HTTPMetadata](../../models/components/httpmetadata.md)  | :heavy_check_mark:                                                  | N/A                                                                 |
| `asyncResultResponse`                                               | *components.AsyncResultResponse*                                    | :heavy_minus_sign:                                                  | Result of the run operation. Could be pending, completed or failed. |