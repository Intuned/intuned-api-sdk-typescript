# UpdateRepeatQueueItemRequest


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectName`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | Project name                                                                       | my-project                                                                         |
| `queueId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Queue ID                                                                           | my-sample-queue                                                                    |
| `itemId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | Repeat Item ID                                                                     | 22222222-2222-2222-2222-222222222222                                               |
| `queueRepeatItemInput`                                                             | [components.QueueRepeatItemInput](../../models/components/queuerepeatiteminput.md) | :heavy_minus_sign:                                                                 | queue repeatable item                                                              |                                                                                    |