# CreateJobRequest

## Example Usage

```typescript
import { CreateJobRequest } from "@intuned/client/models/operations";

let value: CreateJobRequest = {
  projectName: "my-project",
  requestBody: {
    id: "123e4567-e89b-12d3-a456-426614174000",
    payload: [],
    configuration: {
      retry: {},
    },
    sink: {
      type: "webhook",
      url: "https://example.com/webhook",
      skipOnFail: false,
    },
    proxy: "http://username:password@proxy.example.com:8080",
    authSession: {
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectName`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | The name you assigned when creating the Project.                                   | my-project                                                                         |
| `requestBody`                                                                      | [operations.CreateJobRequestBody](../../models/operations/createjobrequestbody.md) | :heavy_check_mark:                                                                 | Job creation input schema                                                          |                                                                                    |