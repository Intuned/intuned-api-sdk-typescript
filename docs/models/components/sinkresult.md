# SinkResult

## Example Usage

```typescript
import { SinkResult } from "@intuned/client/models/components";

let value: SinkResult = {
  apiInfo: {
    name: "<value>",
    result: {
      error: "<value>",
      message: "<value>",
      status: "failed",
      statusCode: 2700.08,
    },
    runId: "<value>",
  },
  workspaceId: "bb4f63c9-69e9-4a3e-ba77-dfb14cd66ae3",
  project: {
    id: "95efb9ba-88f3-4a66-9970-74ba4469b6e2",
    name: "<value>",
  },
  projectQueue: {
    id: "<id>",
  },
};
```

## Supported Types

### `components.JobSinkResultPayload`

```typescript
const value: components.JobSinkResultPayload = /* values here */
```

### `components.QueueSinkResultPayload`

```typescript
const value: components.QueueSinkResultPayload = /* values here */
```

