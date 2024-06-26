# FileFailedResponse

Failed file extraction result


## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `operationId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | Operation ID                                                                               |
| `status`                                                                                   | [components.FileFailedResponseStatus](../../models/components/filefailedresponsestatus.md) | :heavy_check_mark:                                                                         | Operation status.                                                                          |
| `error`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | Error code.                                                                                |
| `message`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | Error message.                                                                             |