# AuthSession

Auth session config to be used with the run. This is a required field if the auth session is enabled on the project.


## Supported Types

### `operations.RuntimeBasedAuthSessionInput`

```typescript
const value: operations.RuntimeBasedAuthSessionInput = {
  proxy: "http://username:password@domain:port",
  runtimeInput: {
    "username": "user",
    "password": "pass",
  },
};
```

### `operations.CredentialsBasedAuthSessionInput`

```typescript
const value: operations.CredentialsBasedAuthSessionInput = {
  id: "auth-session-123",
  proxy: "http://username:password@domain:port",
};
```

