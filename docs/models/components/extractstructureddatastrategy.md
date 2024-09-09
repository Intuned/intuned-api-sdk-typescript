# ExtractStructuredDataStrategy

The strategy to extract structured data from a file. Includes the model and type of extraction.

## Example Usage

```typescript
import { ExtractStructuredDataStrategy } from "@intuned/client/models/components";

let value: ExtractStructuredDataStrategy = {
  type: "IMAGE",
  model: "claude-3.5-sonnet",
};
```

## Supported Types

### `components.ExtractStructuredDataMarkdownStrategy`

```typescript
const value: components.ExtractStructuredDataMarkdownStrategy = /* values here */
```

### `components.ExtractStructuredDataImageStrategy`

```typescript
const value: components.ExtractStructuredDataImageStrategy = /* values here */
```

