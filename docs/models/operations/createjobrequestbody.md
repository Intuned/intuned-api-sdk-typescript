# CreateJobRequestBody

Job creation input schema

## Example Usage

```typescript
import { CreateJobRequestBody } from "@intuned/client/models/operations";

let value: CreateJobRequestBody = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  payload: [
    {
      parameters: {
        "param1": "value1",
        "param2": 42,
        "param3": true,
      },
      retry: {},
      apiName: "<value>",
    },
  ],
  configuration: {
    retry: {},
  },
  sink: {
    type: "s3",
    bucket: "my-s3-bucket",
    accessKeyId: "AKIAIOSFODNN7EXSSPLE",
    secretAccessKey: "wJalrXUtnFFFI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-west-2",
    skipOnFail: false,
  },
  proxy: "http://username:password@proxy.example.com:8080",
  authSession: null,
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                            | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The ID of the job. Has to be a valid URL slug.                                                                                                                                  | 123e4567-e89b-12d3-a456-426614174000                                                                                                                                            |
| `payload`                                                                                                                                                                       | [operations.Payload](../../models/operations/payload.md)[]                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | Array of API calls to be executed                                                                                                                                               |                                                                                                                                                                                 |
| `configuration`                                                                                                                                                                 | [operations.Configuration](../../models/operations/configuration.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                              | Job configuration settings                                                                                                                                                      |                                                                                                                                                                                 |
| `schedule`                                                                                                                                                                      | [operations.Schedule](../../models/operations/schedule.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                              | Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time. |                                                                                                                                                                                 |
| `sink`                                                                                                                                                                          | *operations.CreateJobSink*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                              | Optional sink configuration for the job. Can be a webhook or S3 Compatible sink.                                                                                                |                                                                                                                                                                                 |
| `proxy`                                                                                                                                                                         | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Proxy configuration for the job                                                                                                                                                 | http://username:password@proxy.example.com:8080                                                                                                                                 |
| `authSession`                                                                                                                                                                   | [operations.CreateJobAuthSession](../../models/operations/createjobauthsession.md)                                                                                              | :heavy_minus_sign:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |