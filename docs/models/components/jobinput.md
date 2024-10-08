# JobInput

Create job input

## Example Usage

```typescript
import { JobInput } from "@intuned/client/models/components";

let value: JobInput = {
    id: "<id>",
    sink: {
        type: "webhook",
        url: "https://front-odyssey.info",
    },
    payload: [
        {
            apiName: "<value>",
        },
    ],
    schedule: {
        calendars: [],
    },
    configuration: {
        runMode: "Order-Irrelevant",
    },
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                            | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The ID of the job. Has to be a valid URL slug.                                                                                                                                  |
| `sink`                                                                                                                                                                          | *components.JobSink*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                              | A sink to send the results to. Can be a webhook or Amazon S3 bucket.                                                                                                            |
| `payload`                                                                                                                                                                       | [components.JobPayload](../../models/components/jobpayload.md)[]                                                                                                                | :heavy_check_mark:                                                                                                                                                              | A list of the initial payloads of the job.                                                                                                                                      |
| `schedule`                                                                                                                                                                      | [components.JobSchedule](../../models/components/jobschedule.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                              | Schedule configurations for the job. If set, the job will periodically run according to this configuration. The configurations are used to calculate the closest next run time. |
| `authSession`                                                                                                                                                                   | [components.AuthSession](../../models/components/authsession.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                              | Auth session configurations                                                                                                                                                     |
| `configuration`                                                                                                                                                                 | [components.JobConfiguration](../../models/components/jobconfiguration.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                              | The configuration of the job. Configures the retry policy and maximum concurrent requests.                                                                                      |