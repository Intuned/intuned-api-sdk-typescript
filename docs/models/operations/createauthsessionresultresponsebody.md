# CreateAuthSessionResultResponseBody

Auth session creation result


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  status: "done",
  authSessionId: "auth-session-123",
};
```

### `operations.ResponseBody2`

```typescript
const value: operations.ResponseBody2 = {
  status: "pending",
};
```

### `operations.ResponseBody3`

```typescript
const value: operations.ResponseBody3 = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "failed-to-initialize-job-run",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

### `operations.ResponseBody4`

```typescript
const value: operations.ResponseBody4 = {
  status: "in_progress",
  runId: "<id>",
};
```

### `operations.ResponseBody5`

```typescript
const value: operations.ResponseBody5 = {
  status: "failed",
  message: "<value>",
  error: {
    message: "An error occurred while executing the run",
    code: "script-process-crashed",
    category: "execution",
    docUrl:
      "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
    correlationId: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

