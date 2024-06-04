<!-- Start SDK Example Usage [usage] -->
```typescript
import { IntunedClient } from "@intuned/client";
import { FileUrlSourceType, PdfFileType } from "@intuned/client/models/components";

const intunedClient = new IntunedClient({
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
});

async function run() {
    const result = await intunedClient.files.extractStructuredData.sync(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileUrlSourceType.Url,
                data: "<value>",
            },
        },
        {
            key: "<value>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->