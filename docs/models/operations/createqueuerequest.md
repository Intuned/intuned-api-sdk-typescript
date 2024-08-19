# CreateQueueRequest

## Example Usage

```typescript
import { CreateQueueRequest } from "@intuned/client/models/operations";

let value: CreateQueueRequest = {
    projectName: "my-project",
    queueInput: {
        configuration: {
            runMode: "Default",
        },
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Your project name. It is the name you provide when creating a project. | my-project                                                             |
| `queueInput`                                                           | [components.QueueInput](../../models/components/queueinput.md)         | :heavy_check_mark:                                                     | create queue request                                                   |                                                                        |