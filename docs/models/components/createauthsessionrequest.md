# CreateAuthSessionRequest

Auth session create request


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Auth session name, can contain letters, numbers and hyphens            |
| `parameters`                                                           | *components.APIParameters*                                             | :heavy_minus_sign:                                                     | The parameters to be passed to the API.                                |
| `proxy`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Proxy URL following this format `http://username@password:domain:port` |