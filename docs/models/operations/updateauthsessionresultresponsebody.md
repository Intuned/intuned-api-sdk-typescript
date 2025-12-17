# UpdateAuthSessionResultResponseBody

AuthSession update result


## Supported Types

### `operations.UpdateAuthSessionResultResponseBodyDone`

```typescript
const value: operations.UpdateAuthSessionResultResponseBodyDone = {
  status: "done",
  authSessionId: "auth-session-123",
};
```

### `operations.UpdateAuthSessionResultResponseBodyPending`

```typescript
const value: operations.UpdateAuthSessionResultResponseBodyPending = {
  status: "pending",
};
```

### `operations.UpdateAuthSessionResultResponseBodyCanceled`

```typescript
const value: operations.UpdateAuthSessionResultResponseBodyCanceled = {
  status: "canceled",
  message: "<value>",
  reason: {
    type: "cancelled-user-action",
    message: "<value>",
    docUrl: "https://docs.intunedhq.com/docs/support/reasons#terminated",
  },
};
```

### `operations.UpdateAuthSessionResultResponseBodyInProgress`

```typescript
const value: operations.UpdateAuthSessionResultResponseBodyInProgress = {
  status: "in_progress",
  runId: "<id>",
};
```

### `operations.UpdateAuthSessionResultResponseBodyFailed`

```typescript
const value: operations.UpdateAuthSessionResultResponseBodyFailed = {
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

