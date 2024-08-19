# RandomWait

A random wait duration range added between executed items. The range can be in milliseconds or [ms-formatted string](https://github.com/vercel/ms) strings.

## Example Usage

```typescript
import { RandomWait } from "@intuned/client/models/components";

let value: RandomWait = {
    min: "<value>",
    max: "<value>",
};
```

## Supported Types

### `components.MillisecondsRange`

```typescript
const value: components.MillisecondsRange = /* values here */
```

### `components.MsFormattedRange`

```typescript
const value: components.MsFormattedRange = /* values here */
```

