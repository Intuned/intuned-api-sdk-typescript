# CreateOrUpdateAuthSessionStartRequest

## Example Usage

```typescript
import { CreateOrUpdateAuthSessionStartRequest } from "@intuned/client/models/operations";

let value: CreateOrUpdateAuthSessionStartRequest = {
  projectName: "my-project",
  requestBody: {
    id: "auth-session-123",
    parameters: {
      "param1": "value1",
      "param2": 42,
      "param3": true,
    },
    proxy: "http://username:password@proxy.example.com:8080",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Your project name. It is the name you provide when creating a project.                                                       | my-project                                                                                                                   |
| `requestBody`                                                                                                                | [operations.CreateOrUpdateAuthSessionStartRequestBody](../../models/operations/createorupdateauthsessionstartrequestbody.md) | :heavy_check_mark:                                                                                                           | Create auth session input schema                                                                                             |                                                                                                                              |