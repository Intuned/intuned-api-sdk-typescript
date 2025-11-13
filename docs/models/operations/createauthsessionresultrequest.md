# CreateAuthSessionResultRequest

## Example Usage

```typescript
import { CreateAuthSessionResultRequest } from "@intuned/client/models/operations";

let value: CreateAuthSessionResultRequest = {
  projectName: "my-project",
  operationId: "aaaabbbCCCCdddd",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Your project name. It is the name you provide when creating a project. | my-project                                                             |
| `operationId`                                                          | *string*                                                               | :heavy_check_mark:                                                     | The ID for the operation. This is obtained from the start request.     | aaaabbbCCCCdddd                                                        |