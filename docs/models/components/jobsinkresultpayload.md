# JobSinkResultPayload

Webhook payload of job run result

## Example Usage

```typescript
import { JobSinkResultPayload } from "@intuned/client/models/components";

let value: JobSinkResultPayload = {
  apiInfo: {
    name: "<value>",
    result: {
      status: "completed",
      statusCode: 9755.22,
    },
    runId: "<value>",
  },
  workspaceId: "0d30c5fb-b258-4705-b202-c73d5fe9b90c",
  project: {
    id: "28909b3f-e49a-48d9-8bf4-8633323f9b77",
    name: "<value>",
  },
  projectJob: {
    id: "<id>",
  },
  projectJobRun: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `apiInfo`                                                                                                | [components.WebhookAPIInfo](../../models/components/webhookapiinfo.md)                                   | :heavy_check_mark:                                                                                       | Webhook API info                                                                                         |
| `workspaceId`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The workspace ID of the API                                                                              |
| `project`                                                                                                | [components.Project](../../models/components/project.md)                                                 | :heavy_check_mark:                                                                                       | The project details of the API                                                                           |
| `authSession`                                                                                            | [components.JobSinkResultPayloadAuthSession](../../models/components/jobsinkresultpayloadauthsession.md) | :heavy_minus_sign:                                                                                       | The auth session used in the run                                                                         |
| `projectJob`                                                                                             | [components.ProjectJob](../../models/components/projectjob.md)                                           | :heavy_check_mark:                                                                                       | The job details of the run                                                                               |
| `projectJobRun`                                                                                          | [components.ProjectJobRun](../../models/components/projectjobrun.md)                                     | :heavy_check_mark:                                                                                       | The job run details                                                                                      |