# CreateAuthSessionResultResponse


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `authSessionCreateResult`                                                    | *components.AuthSessionCreateResult*                                         | :heavy_minus_sign:                                                           | result of creation. can be pending, completed, failed or requested_more_info |