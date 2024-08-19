# RunApiStartRequest

## Example Usage

```typescript
import { RunApiStartRequest } from "@intuned/client/models/operations";

let value: RunApiStartRequest = {
    projectName: "my-project",
    runProjectApiRequest: {
        api: "<value>",
        parameters: ["<value>"],
        proxy: "http://username@password:domain:port",
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectName`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | Your project name. It is the name you provide when creating a project.             | my-project                                                                         |
| `runProjectApiRequest`                                                             | [components.RunProjectApiRequest](../../models/components/runprojectapirequest.md) | :heavy_check_mark:                                                                 | run project api request                                                            |                                                                                    |