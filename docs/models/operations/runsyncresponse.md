# RunSyncResponse


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `completedRunResult`                                                           | [components.CompletedRunResult](../../models/components/completedrunresult.md) | :heavy_minus_sign:                                                             | Successful run result                                                          |
| `failedRunResult`                                                              | [components.FailedRunResult](../../models/components/failedrunresult.md)       | :heavy_minus_sign:                                                             | Error running the API                                                          |