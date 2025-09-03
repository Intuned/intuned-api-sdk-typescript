# CreateJobResponseBody

Bad Request

## Example Usage

```typescript
import { CreateJobResponseBody } from "@intuned/client/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | [errors.CreateJobCode](../../models/errors/createjobcode.md)                                                           | :heavy_check_mark:                                                                                                     | The request is invalid or malformed<br/><br/>[Find more info here](https://docs.intunedhq.com/docs/support/errors#bad-request) |
| `category`                                                                                                             | [errors.CreateJobCategory](../../models/errors/createjobcategory.md)                                                   | :heavy_check_mark:                                                                                                     | Errors caused by user actions or input<br/><br/>[Find more info here](https://docs.intunedhq.com/docs/support/errors#user) |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `retirable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `details`                                                                                                              | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `correlationId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |