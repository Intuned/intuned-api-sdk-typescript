# Proxy

Proxy configuration. If configured, the project API will run using this proxy for all requests.


## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the proxy is enabled or not.                                                                   |
| `location`                                                                                             | [components.Location](../../models/components/location.md)                                             | :heavy_minus_sign:                                                                                     | The proxy location. If proxy is enabled and this value is not provided, a rotating proxy will be used. |