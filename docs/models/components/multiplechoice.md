# MultipleChoice

Requested more info - Multiple choice.

## Example Usage

```typescript
import { MultipleChoice } from "@intuned/client/models/components";

let value: MultipleChoice = {
    choices: ["<value>"],
    requestType: "multiple_choice",
    action: "request_more_info",
    messageToUser: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `choices`                                                        | *string*[]                                                       | :heavy_check_mark:                                               | Multiple choice choices. An array of strings.                    |
| `requestType`                                                    | [components.RequestType](../../models/components/requesttype.md) | :heavy_check_mark:                                               | Type of the requested info.                                      |
| `action`                                                         | [components.Action](../../models/components/action.md)           | :heavy_check_mark:                                               | The requested action.                                            |
| `messageToUser`                                                  | *string*                                                         | :heavy_check_mark:                                               | Message sent from the `create` file.                             |