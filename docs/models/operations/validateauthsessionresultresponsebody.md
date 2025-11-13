# ValidateAuthSessionResultResponseBody

Get Auth session Validate result


## Supported Types

### `operations.Done`

```typescript
const value: operations.Done = {
  status: "done",
  authSessionId: "auth-session-123",
};
```

### `operations.Pending`

```typescript
const value: operations.Pending = {
  status: "pending",
};
```

### `operations.Canceled`

```typescript
const value: operations.Canceled = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "terminated",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

### `operations.InProgress`

```typescript
const value: operations.InProgress = {
  status: "in_progress",
  runId: "<id>",
};
```

### `operations.Failed`

```typescript
const value: operations.Failed = {
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

