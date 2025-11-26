<!-- Start SDK Example Usage [usage] -->
```typescript
import { IntunedClient } from "@intuned/client";

const intunedClient = new IntunedClient({
  workspaceId: "123e4567-e89b-12d3-a456-426614174000",
  apiKey: process.env["INTUNED_API_KEY"] ?? "",
});

async function run() {
  const result = await intunedClient.project.run.start("my-project", {
    parameters: {
      "param1": "value1",
      "param2": 42,
      "param3": true,
    },
    retry: {},
    api: "my-awesome-api",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->