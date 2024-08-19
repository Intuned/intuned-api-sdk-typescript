# JobSink

A sink to send the results to. Can be a webhook or Amazon S3 bucket.

## Example Usage

```typescript
import { JobSink } from "@intuned/client/models/components";

let value: JobSink = {
    type: "s3",
    region: "us-west-2",
    bucket: "<value>",
    accessKeyId: "<value>",
    secretAccessKey: "<value>",
};
```

## Supported Types

### `components.WebhookSink`

```typescript
const value: components.WebhookSink = /* values here */
```

### `components.AmazonS3Sink`

```typescript
const value: components.AmazonS3Sink = /* values here */
```

