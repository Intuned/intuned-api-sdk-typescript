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
            statusCode: 9441.2,
        },
        runId: "<value>",
    },
    workspaceId: "e9b90c28-909b-43fe-89a8-d9cbf4863332",
    project: {
        id: "3f9b77f3-a410-4067-8ebf-69280d1ba77a",
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