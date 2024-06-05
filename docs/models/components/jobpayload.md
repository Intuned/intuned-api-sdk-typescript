# JobPayload

A payload to be executed by the job


## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `apiName`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the API to be executed. This is the file path relative to the `api` folder inside your project. |
| `parameters`                                                                                                | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | The parameters to the API to be executed.                                                                   |