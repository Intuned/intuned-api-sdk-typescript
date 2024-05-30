<!-- Start SDK Example Usage [usage] -->
```typescript
import { IntunedApiSDK } from "@intuned/client";
import { FileBase64SourceType, PdfFileType } from "@intuned/client/models/components";

const intunedApiSDK = new IntunedApiSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    workspaceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    projectName: "my-project",
});

async function run() {
    const result = await intunedApiSDK.files.extractStructuredData(
        {
            type: PdfFileType.Pdf,
            source: {
                type: FileBase64SourceType.Base64,
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