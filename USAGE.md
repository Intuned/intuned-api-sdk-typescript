<!-- Start SDK Example Usage [usage] -->
```typescript
import { IntunedApiSDK } from "@intuned/client";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await intunedApiSDK.project.jobs.getJobs("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->