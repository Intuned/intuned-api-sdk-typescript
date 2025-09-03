# AuthSession

Auth session config to be used with the run. This is a required field if the auth session is enabled on the project.


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "auth-session-123",
  proxy: "http://username:password@domain:port",
};
```

### `operations.Two`

```typescript
const value: operations.Two = {
  proxy: "http://username:password@domain:port",
  runtimeInput: {
    "username": "user",
    "password": "pass",
  },
};
```

