# UpdateJobUpdateJobInputSchema

Input schema for updating an existing job

## Example Usage

```typescript
import { UpdateJobUpdateJobInputSchema } from "@intuned/client/models/operations";

let value: UpdateJobUpdateJobInputSchema = {
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
  authSession: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload`                                                                                                                                                                       | [operations.UpdateJobPayload](../../models/operations/updatejobpayload.md)[]                                                                                                    | :heavy_check_mark:                                                                                                                                                              | Array of API calls to be executed                                                                                                                                               |                                                                                                                                                                                 |
| `configuration`                                                                                                                                                                 | [operations.UpdateJobConfiguration](../../models/operations/updatejobconfiguration.md)                                                                                          | :heavy_check_mark:                                                                                                                                                              | Job configuration settings                                                                                                                                                      |                                                                                                                                                                                 |
| `schedule`                                                                                                                                                                      | [operations.UpdateJobSchedule](../../models/operations/updatejobschedule.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                                              | Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time. |                                                                                                                                                                                 |
| `sink`                                                                                                                                                                          | *operations.UpdateJobSink*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                              | Optional sink configuration for the job. Can be a webhook or S3 Compatible sink.                                                                                                |                                                                                                                                                                                 |
| `proxy`                                                                                                                                                                         | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Proxy configuration for the job                                                                                                                                                 | http://username:password@proxy.example.com:8080                                                                                                                                 |
| `authSession`                                                                                                                                                                   | [operations.UpdateJobAuthSession](../../models/operations/updatejobauthsession.md)                                                                                              | :heavy_minus_sign:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |