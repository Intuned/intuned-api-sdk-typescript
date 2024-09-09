# ExtractStructuredDataMarkdownStrategy

## Example Usage

```typescript
import { ExtractStructuredDataMarkdownStrategy } from "@intuned/client/models/components";

let value: ExtractStructuredDataMarkdownStrategy = {
  type: "MARKDOWN",
  model: "gpt-4o-2024-05-13",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [components.ExtractStructuredDataMarkdownStrategyType](../../models/components/extractstructureddatamarkdownstrategytype.md) | :heavy_check_mark:                                                                                                           | The type of extraction to perform.                                                                                           |
| `model`                                                                                                                      | [components.TextAiExtractionModel](../../models/components/textaiextractionmodel.md)                                         | :heavy_check_mark:                                                                                                           | AI model to use for extraction                                                                                               |