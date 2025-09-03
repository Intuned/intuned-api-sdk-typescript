# UpdateAuthSessionResultResponseBody

Auth session update result


## Supported Types

### `operations.UpdateAuthSessionResultResponseBody1`

```typescript
const value: operations.UpdateAuthSessionResultResponseBody1 = {
  status: "done",
  authSessionId: "auth-session-123",
};
```

### `operations.UpdateAuthSessionResultResponseBody2`

```typescript
const value: operations.UpdateAuthSessionResultResponseBody2 = {
  status: "pending",
};
```

### `operations.UpdateAuthSessionResultResponseBody3`

```typescript
const value: operations.UpdateAuthSessionResultResponseBody3 = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "failed-to-initialize-job-run",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

### `operations.UpdateAuthSessionResultResponseBody4`

```typescript
const value: operations.UpdateAuthSessionResultResponseBody4 = {
  status: "in_progress",
  runId: "<id>",
};
```

### `operations.UpdateAuthSessionResultResponseBody5`

```typescript
const value: operations.UpdateAuthSessionResultResponseBody5 = {
  status: "failed",
  message: "<value>",
  error: {
    message: "An error occurred while executing the run",
    code: "script-process-crashed",
    category: "user",
    docUrl:
      "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
    correlationId: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

