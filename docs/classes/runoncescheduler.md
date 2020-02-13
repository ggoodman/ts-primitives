[ts-primitives](../README.md) › [RunOnceScheduler](runoncescheduler.md)

# Class: RunOnceScheduler

## Hierarchy

* **RunOnceScheduler**

  ↳ [RunOnceWorker](runonceworker.md)

## Index

### Constructors

* [constructor](runoncescheduler.md#constructor)

### Methods

* [cancel](runoncescheduler.md#cancel)
* [dispose](runoncescheduler.md#dispose)
* [isScheduled](runoncescheduler.md#isscheduled)
* [schedule](runoncescheduler.md#schedule)

## Constructors

###  constructor

\+ **new RunOnceScheduler**(`runner`: function, `timeout`: number): *[RunOnceScheduler](runoncescheduler.md)*

**Parameters:**

▪ **runner**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪ **timeout**: *number*

**Returns:** *[RunOnceScheduler](runoncescheduler.md)*

## Methods

###  cancel

▸ **cancel**(): *void*

Cancel current scheduled runner (if any).

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

Dispose RunOnceScheduler

**Returns:** *void*

___

###  isScheduled

▸ **isScheduled**(): *boolean*

Returns true if scheduled.

**Returns:** *boolean*

___

###  schedule

▸ **schedule**(`delay`: number): *void*

Cancel previous runner (if any) & schedule a new runner.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | this.timeout |

**Returns:** *void*
