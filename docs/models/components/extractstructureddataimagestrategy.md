# ExtractStructuredDataImageStrategy

## Example Usage

```typescript
import { ExtractStructuredDataImageStrategy } from "@intuned/client/models/components";

let value: ExtractStructuredDataImageStrategy = {
  type: "IMAGE",
  model: "claude-3-5-sonnet-20240620",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.ExtractStructuredDataImageStrategyType](../../models/components/extractstructureddataimagestrategytype.md) | :heavy_check_mark:                                                                                                     | The type of extraction to perform.                                                                                     |
| `model`                                                                                                                | [components.ImageAiExtractionModel](../../models/components/imageaiextractionmodel.md)                                 | :heavy_check_mark:                                                                                                     | AI model to use for extraction                                                                                         |