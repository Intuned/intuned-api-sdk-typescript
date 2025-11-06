# CreateJobResponseBody

Job created successfully.

## Example Usage

```typescript
import { CreateJobResponseBody } from "@intuned/client/models/operations";

let value: CreateJobResponseBody = {
  id: "<id>",
  message: "created",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The ID of the created job.                               |
| `message`                                                | [operations.Message](../../models/operations/message.md) | :heavy_check_mark:                                       | N/A                                                      |