<!-- Start SDK Example Usage [usage] -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  apiKey: "<YOUR_API_KEY_HERE>",
  workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
  const result = await intunedClient.files.extractStructuredData.sync({
    type: "pdf",
    source: {
      type: "url",
      data: "http://unconscious-margin.name",
    },
  }, {
    "key": "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->