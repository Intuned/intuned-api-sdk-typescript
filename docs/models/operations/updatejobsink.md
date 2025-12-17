# UpdateJobSink

Optional sink configuration for the job. Can be a webhook or S3 Compatible sink.


## Supported Types

### `operations.UpdateJobSinkWebhookSinkConfiguration`

```typescript
const value: operations.UpdateJobSinkWebhookSinkConfiguration = {
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

### `operations.UpdateJobSinkS3SinkConfiguration`

```typescript
const value: operations.UpdateJobSinkS3SinkConfiguration = {
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

