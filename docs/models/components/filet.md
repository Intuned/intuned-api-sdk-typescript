# FileT

## Example Usage

```typescript
import { FileT } from "@intuned/client/models/components";

let value: FileT = {
    type: "pdf",
    source: {
        type: "base64",
        data: "<value>",
    },
};
```

## Supported Types

### `components.ImageFile`

```typescript
const value: components.ImageFile = /* values here */
```

### `components.PdfFile`

```typescript
const value: components.PdfFile = /* values here */
```

