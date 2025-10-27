# RunApiStartRequestBody

Run API input schema

## Example Usage

```typescript
import { RunApiStartRequestBody } from "@intuned/client/models/operations";

let value: RunApiStartRequestBody = {
  parameters: {
    "param1": "value1",
    "param2": 42,
    "param3": true,
  },
  proxy: "http://username:password@domain:port",
  retry: {},
  authSession: {
    autoRecreate: true,
    checkAttempts: 3,
    createAttempts: 3,
    proxy: "http://username:password@domain:port",
    requestTimeout: 600,
    runtimeInput: {
      "username": "user",
      "password": "pass",
    },
  },
  sink: {
    type: "s3",
    bucket: "my-s3-bucket",
    accessKeyId: "AKIAIOSFODNN7EXSSPLE",
    secretAccessKey: "wJalrXUtnFFFI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-west-2",
    prefix: "my-prefix/",
    skipOnFail: false,
    apisToSend: [
      "api1",
      "api2",
    ],
    endpoint: "https://s3.custom-endpoint.com",
    forcePathStyle: true,
  },
  api: "<value>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `parameters`                                                                                                          | Record<string, *any*>                                                                                                 | :heavy_check_mark:                                                                                                    | The parameters to be passed to the API.                                                                               | {<br/>"param1": "value1",<br/>"param2": 42,<br/>"param3": true<br/>}                                                  |
| `proxy`                                                                                                               | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Proxy URL to be used for the API call. This is optional and can be used to route the API call through a proxy server. | http://username:password@domain:port                                                                                  |
| `saveTrace`                                                                                                           | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `requestTimeout`                                                                                                      | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | Timeout for the API request in seconds. Default is 10 minutes (600 seconds).                                          | 600                                                                                                                   |
| `retry`                                                                                                               | [operations.Retry](../../models/operations/retry.md)                                                                  | :heavy_minus_sign:                                                                                                    | Retry policy configurations in case of failure.                                                                       | {<br/>"maximumAttempts": 3<br/>}                                                                                      |
| `authSession`                                                                                                         | *operations.AuthSession*                                                                                              | :heavy_minus_sign:                                                                                                    | Auth session config to be used with the run. This is a required field if the auth session is enabled on the project.  |                                                                                                                       |
| `sink`                                                                                                                | *operations.Sink*                                                                                                     | :heavy_minus_sign:                                                                                                    | Optional sink configuration for the run. Can be a webhook or S3 sink.                                                 |                                                                                                                       |
| `api`                                                                                                                 | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The name of the API to be executed. This is the file path relative to the `api` folder inside your project.           |                                                                                                                       |