# SinkResult

## Example Usage

```typescript
import { SinkResult } from "@intuned/client/models/components";

let value: SinkResult = {
    apiInfo: {
        name: "<value>",
        result: {
            status: "completed",
            statusCode: 7670.24,
        },
        runId: "<value>",
    },
    workspaceId: "d66ae395-efb9-4ba8-8f3a-66997074ba44",
    project: {
        id: "69b6e214-1959-4890-afa5-63e2516fe4c8",
        name: "<value>",
    },
    projectJob: {
        id: "<id>",
    },
    projectJobRun: {
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

