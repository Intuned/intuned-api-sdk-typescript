# StartAuthSessionRecorderRequest

## Example Usage

```typescript
import { StartAuthSessionRecorderRequest } from "@intuned/client/models/operations";

let value: StartAuthSessionRecorderRequest = {
  projectName: "my-project",
  startAuthSessionRecorderRequest: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `projectName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Your project name. It is the name you provide when creating a project.                                   | my-project                                                                                               |
| `startAuthSessionRecorderRequest`                                                                        | [components.StartAuthSessionRecorderRequest](../../models/components/startauthsessionrecorderrequest.md) | :heavy_check_mark:                                                                                       | start auth session recorder request                                                                      |                                                                                                          |