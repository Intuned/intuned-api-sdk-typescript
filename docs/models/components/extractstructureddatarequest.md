# ExtractStructuredDataRequest

The request to extract structured data from file

## Example Usage

```typescript
import { ExtractStructuredDataRequest } from "@intuned/client/models/components";

let value: ExtractStructuredDataRequest = {
    file: {
        type: "pdf",
        source: {
            type: "url",
            data: "https://intuned.io/example.pdf",
        },
    },
    dataSchema: {
        type: "object",
        description: "Employee Information",
        properties: {
            name: {
                type: "string",
            },
            age: {
                type: "number",
            },
            jobTitle: {
                type: "string",
            },
        },
    },
    strategy: {
        type: "MARKDOWN",
        model: "gpt4-turbo",
    },
};
```

## Fields

| Field                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                                                                                                                  | *components.FileT*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |
| `dataSchema`                                                                                                                                                                                                                            | Record<string, *any*>                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                      | The schema (in JSONSchema) to which the extracted data should conform to. [More about JSONSchema](https://json-schema.org/learn/getting-started-step-by-step)<br/><br/>[JSONSchema](https://json-schema.org/learn/getting-started-step-by-step) |
| `strategy`                                                                                                                                                                                                                              | [components.ExtractStructuredDataStrategy](../../models/components/extractstructureddatastrategy.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                      | The strategy to extract structured data from a file. Includes the model and type of extraction.                                                                                                                                         |
| `prompt`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | Prompt given to the AI model to help with extraction.                                                                                                                                                                                   |