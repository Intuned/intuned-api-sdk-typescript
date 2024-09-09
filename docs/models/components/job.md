# Job

Job properties and configurations

## Example Usage

```typescript
import { Job } from "@intuned/client/models/components";

let value: Job = {
  id: "<id>",
  sink: {
    type: "s3",
    region: "us-west-2",
    bucket: "<value>",
    accessKeyId: "<value>",
    secretAccessKey: "<value>",
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
  nextRunTime: new Date("2022-05-10T15:05:25.593Z"),
  lastRunTime: new Date("2024-02-29T19:31:16.563Z"),
  state: {},
  projectId: "<value>",
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
| `configuration`                                                                                                                                                                 | [components.JobConfigurationResponse](../../models/components/jobconfigurationresponse.md)                                                                                      | :heavy_check_mark:                                                                                                                                                              | The configuration of the job. Configures the retry policy and maximum concurrent requests.                                                                                      |
| `createdAt`                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                   | :heavy_minus_sign:                                                                                                                                                              | The timestamp of when the job was created.                                                                                                                                      |
| `nextRunTime`                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                   | :heavy_check_mark:                                                                                                                                                              | The timestamp of the next scheduled job run. `null` if the job does not have a schedule.                                                                                        |
| `lastRunTime`                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                   | :heavy_check_mark:                                                                                                                                                              | The timestamp of the last time the job ran. `null` if the job has not run yet.                                                                                                  |
| `state`                                                                                                                                                                         | *components.State*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |
| `projectId`                                                                                                                                                                     | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The project ID of the job                                                                                                                                                       |