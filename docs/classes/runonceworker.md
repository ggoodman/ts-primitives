[ts-primitives](../README.md) › [RunOnceWorker](runonceworker.md)

# Class: RunOnceWorker <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [RunOnceScheduler](runoncescheduler.md)

  ↳ **RunOnceWorker**

## Index

### Constructors

* [constructor](runonceworker.md#constructor)

### Methods

* [cancel](runonceworker.md#cancel)
* [dispose](runonceworker.md#dispose)
* [isScheduled](runonceworker.md#isscheduled)
* [schedule](runonceworker.md#schedule)
* [work](runonceworker.md#work)

## Constructors

###  constructor

\+ **new RunOnceWorker**(`runner`: function, `timeout`: number): *[RunOnceWorker](runonceworker.md)*

*Overrides [RunOnceScheduler](runoncescheduler.md).[constructor](runoncescheduler.md#constructor)*

**Parameters:**

▪ **runner**: *function*

▸ (`units`: T[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`units` | T[] |

▪ **timeout**: *number*

**Returns:** *[RunOnceWorker](runonceworker.md)*

## Methods

###  cancel

▸ **cancel**(): *void*

*Inherited from [RunOnceScheduler](runoncescheduler.md).[cancel](runoncescheduler.md#cancel)*

Cancel current scheduled runner (if any).

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Overrides [RunOnceScheduler](runoncescheduler.md).[dispose](runoncescheduler.md#dispose)*

**Returns:** *void*

___

###  isScheduled

▸ **isScheduled**(): *boolean*

*Inherited from [RunOnceScheduler](runoncescheduler.md).[isScheduled](runoncescheduler.md#isscheduled)*

Returns true if scheduled.

**Returns:** *boolean*

___

###  schedule

▸ **schedule**(`delay`: number): *void*

*Inherited from [RunOnceScheduler](runoncescheduler.md).[schedule](runoncescheduler.md#schedule)*

Cancel previous runner (if any) & schedule a new runner.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | this.timeout |

**Returns:** *void*

___

###  work

▸ **work**(`unit`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | T |

**Returns:** *void*
