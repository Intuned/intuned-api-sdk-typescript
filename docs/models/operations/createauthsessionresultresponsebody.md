# CreateAuthSessionResultResponseBody

AuthSession creation result


## Supported Types

### `operations.ResponseBodyDone`

```typescript
const value: operations.ResponseBodyDone = {
  status: "done",
  authSessionId: "auth-session-123",
};
```

### `operations.ResponseBodyPending`

```typescript
const value: operations.ResponseBodyPending = {
  status: "pending",
};
```

### `operations.ResponseBodyCanceled`

```typescript
const value: operations.ResponseBodyCanceled = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "job-run-paused",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

### `operations.ResponseBodyInProgress`

```typescript
const value: operations.ResponseBodyInProgress = {
  status: "in_progress",
  runId: "<id>",
};
```

### `operations.ResponseBodyFailed`

```typescript
const value: operations.ResponseBodyFailed = {
  status: "failed",
  message: "<value>",
  error: {
    message: "An error occurred while executing the run",
    code: "script-process-crashed",
    category: "infrastructure",
    docUrl:
      "https://docs.intunedhq.com/docs/support/errors#run-execution-error",
    correlationId: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

