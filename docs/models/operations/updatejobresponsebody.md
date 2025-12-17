# UpdateJobResponseBody

Job updated successfully.

## Example Usage

```typescript
import { UpdateJobResponseBody } from "@intuned/client/models/operations";

let value: UpdateJobResponseBody = {
  id: "<id>",
  message: "updated job successfully",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the updated job.                                                 |
| `message`                                                                  | [operations.UpdateJobMessage](../../models/operations/updatejobmessage.md) | :heavy_check_mark:                                                         | N/A                                                                        |