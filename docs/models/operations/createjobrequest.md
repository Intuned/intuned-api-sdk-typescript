# CreateJobRequest

## Example Usage

```typescript
import { CreateJobRequest } from "@intuned/client/models/operations";

let value: CreateJobRequest = {
    projectName: "my-project",
    jobInput: {
        id: "<id>",
        sink: {
            type: "webhook",
            url: "https://weary-kneejerk.org",
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
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Your project name. It is the name you provide when creating a project. | my-project                                                             |
| `jobInput`                                                             | [components.JobInput](../../models/components/jobinput.md)             | :heavy_check_mark:                                                     | create job request                                                     |                                                                        |