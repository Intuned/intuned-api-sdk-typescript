# RunApiStartRequest

## Example Usage

```typescript
import { RunApiStartRequest } from "@intuned/client/models/operations";

let value: RunApiStartRequest = {
  projectName: "my-project",
  requestBody: {
    parameters: {
      "param1": "value1",
      "param2": 42,
      "param3": true,
    },
    proxy: "http://username:password@domain:port",
    retry: {},
    authSession: {
      autoRecreate: true,
      checkAttempts: 3,
      createAttempts: 3,
      proxy: "http://username:password@domain:port",
      requestTimeout: 600,
      runtimeInput: {
        "username": "user",
        "password": "pass",
      },
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
    api: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `projectName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Your project name. It is the name you provide when creating a project.                 | my-project                                                                             |
| `requestBody`                                                                          | [operations.RunApiStartRequestBody](../../models/operations/runapistartrequestbody.md) | :heavy_check_mark:                                                                     | Run API input schema                                                                   |                                                                                        |