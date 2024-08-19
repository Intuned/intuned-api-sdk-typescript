# GeneralExtractRequest

## Example Usage

```typescript
import { GeneralExtractRequest } from "@intuned/client/models/components";

let value: GeneralExtractRequest = {
    file: {
        type: "pdf",
        source: {
            type: "base64",
            data: "<value>",
        },
    },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `file`             | *components.FileT* | :heavy_check_mark: | N/A                |