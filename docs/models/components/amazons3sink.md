# AmazonS3Sink

Amazon S3 bucket sink configuration


## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.AmazonS3SinkType](../../models/components/amazons3sinktype.md)                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `region`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The S3 bucket region                                                                                                   | us-west-2                                                                                                              |
| `bucket`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The S3 bucket name                                                                                                     |                                                                                                                        |
| `accessKeyId`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `secretAccessKey`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Secret access key of the IAM user to use the bucket.                                                                   |                                                                                                                        |
| `prefix`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | A prefix added to the key of the file to be written. This can be used to define a folder where all results are stored. |                                                                                                                        |
| `skipOnFail`                                                                                                           | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | If enabled, failed payload runs will ***not*** be written to the bucket.                                               |                                                                                                                        |