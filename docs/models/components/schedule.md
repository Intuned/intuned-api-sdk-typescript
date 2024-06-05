# Schedule

Execution schedule for the queue.


## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pause`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | Cron string representing the pause schedule. At this schedule, the queue will pause execution.   |
| `resume`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | Cron string representing the resume schedule. At this schedule, the queue will resume execution. |