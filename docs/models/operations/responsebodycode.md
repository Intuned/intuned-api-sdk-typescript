# ResponseBodyCode

Optional error code for more specific error identification

## Example Usage

```typescript
import { ResponseBodyCode } from "@intuned/client/models/operations";

let value: ResponseBodyCode = "script-process-crashed";
```

## Values

```typescript
"internal-server-error" | "script-process-crashed" | "unexpected" | "script-execution-exception" | "script-no-valid-output-received" | "result-too-big-error" | "script-timeout" | "script-unexpected-error" | "auth-check-failed" | "all-attempts-failed" | "check-attempts-failed" | "create-attempts-failed" | "post-create-check-attempts-failed" | "api-attempts-failed" | "onepassword-integration-error" | "job-run-terminated"
```