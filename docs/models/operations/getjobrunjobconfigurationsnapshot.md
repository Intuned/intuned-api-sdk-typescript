# GetJobRunJobConfigurationSnapshot

Snapshot of job configuration at the time of the job run

## Example Usage

```typescript
import { GetJobRunJobConfigurationSnapshot } from "@intuned/client/models/operations";

let value: GetJobRunJobConfigurationSnapshot = {
  configuration: {
    retry: {},
  },
  sink: {
    type: "webhook",
    url: "https://example.com/webhook",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer token",
    },
    skipOnFail: false,
    apisToSend: [
      "api1",
      "api2",
    ],
  },
  authSession: {
    id: "auth-session-123",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `configuration`                                                                        | [operations.GetJobRunConfiguration](../../models/operations/getjobrunconfiguration.md) | :heavy_check_mark:                                                                     | Job configuration settings                                                             |                                                                                        |
| `sink`                                                                                 | *operations.GetJobRunSink*                                                             | :heavy_minus_sign:                                                                     | Optional sink configuration for the job. Can be a webhook or S3 Compatible sink.       |                                                                                        |
| `authSession`                                                                          | [operations.GetJobRunAuthSession](../../models/operations/getjobrunauthsession.md)     | :heavy_minus_sign:                                                                     | Authentication session information for the job                                         | {<br/>"id": "auth-session-123"<br/>}                                                   |
| `proxy`                                                                                | [operations.GetJobRunProxy](../../models/operations/getjobrunproxy.md)                 | :heavy_minus_sign:                                                                     | Proxy configuration for the job, stored as JSONB                                       |                                                                                        |