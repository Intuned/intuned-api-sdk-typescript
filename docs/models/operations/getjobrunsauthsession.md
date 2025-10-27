# GetJobRunsAuthSession

Authentication session information for the job

## Example Usage

```typescript
import { GetJobRunsAuthSession } from "@intuned/client/models/operations";

let value: GetJobRunsAuthSession = {
  id: "auth-session-123",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `checkAttempts`                                                                           | *number*                                                                                  | :heavy_minus_sign:                                                                        | Number of attempts to check the validity of the auth session before recreating it.        | 3                                                                                         |
| `createAttempts`                                                                          | *number*                                                                                  | :heavy_minus_sign:                                                                        | Number of attempts to create a new auth session if the current one is invalid or expired. | 3                                                                                         |