# GetJobsSink

Optional sink configuration for the job. Can be a webhook or S3 Compatible sink.


## Supported Types

### `operations.GetJobsSinkWebhookSinkConfiguration`

```typescript
const value: operations.GetJobsSinkWebhookSinkConfiguration = {
  type: "webhook",
  url: "https://example.com/webhook",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token",
  },
  apisToSend: [
    "api1",
    "api2",
  ],
};
```

### `operations.GetJobsSinkS3SinkConfiguration`

```typescript
const value: operations.GetJobsSinkS3SinkConfiguration = {
  type: "s3",
  bucket: "my-s3-bucket",
  accessKeyId: "AKIAIOSFODNN7EXSSPLE",
  secretAccessKey: "wJalrXUtnFFFI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  region: "us-west-2",
  prefix: "my-prefix/",
  apisToSend: [
    "api1",
    "api2",
  ],
  endpoint: "https://s3.custom-endpoint.com",
  forcePathStyle: true,
};
```

