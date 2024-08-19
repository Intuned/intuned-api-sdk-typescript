# QueueItemResult

The result of an item execution. Can be queued, pending, completed or failed. Queued means the item has not been processed yet. Pending means the item is currently being processed, and thus cannot be deleted.

## Example Usage

```typescript
import { QueueItemResult } from "@intuned/client/models/components";

let value: QueueItemResult = {
    runId: "<value>",
    status: "failed",
    error: {
        key: "<value>",
    },
    statusCode: 5759.47,
};
```

## Supported Types

### `components.QueuedQueueItemResult`

```typescript
const value: components.QueuedQueueItemResult = /* values here */
```

### `components.PendingQueueItemResult`

```typescript
const value: components.PendingQueueItemResult = /* values here */
```

### `components.CompletedQueueItemResult`

```typescript
const value: components.CompletedQueueItemResult = /* values here */
```

### `components.FailedQueueItemResult`

```typescript
const value: components.FailedQueueItemResult = /* values here */
```

