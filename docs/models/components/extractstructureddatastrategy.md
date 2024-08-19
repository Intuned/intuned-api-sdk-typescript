# ExtractStructuredDataStrategy

The strategy to extract structured data from a file. Includes the model and type of extraction.

## Example Usage

```typescript
import { ExtractStructuredDataStrategy } from "@intuned/client/models/components";

let value: ExtractStructuredDataStrategy = {
    type: "MARKDOWN",
    model: "gpt4-turbo",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.ExtractStructuredDataStrategyType](../../models/components/extractstructureddatastrategytype.md) | :heavy_check_mark:                                                                                           | The type of extraction to perform.                                                                           |
| `model`                                                                                                      | [components.AiExtractionModel](../../models/components/aiextractionmodel.md)                                 | :heavy_check_mark:                                                                                           | AI model to use for extraction                                                                               |