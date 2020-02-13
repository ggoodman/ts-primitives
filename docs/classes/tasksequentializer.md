[ts-primitives](../README.md) › [TaskSequentializer](tasksequentializer.md)

# Class: TaskSequentializer

## Hierarchy

* **TaskSequentializer**

## Index

### Accessors

* [pending](tasksequentializer.md#pending)

### Methods

* [cancelPending](tasksequentializer.md#cancelpending)
* [hasPending](tasksequentializer.md#haspending)
* [setNext](tasksequentializer.md#setnext)
* [setPending](tasksequentializer.md#setpending)

## Accessors

###  pending

• **get pending**(): *[Promise](../interfaces/cancelablepromise.md#promise)‹void› | undefined*

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹void› | undefined*

## Methods

###  cancelPending

▸ **cancelPending**(): *void*

**Returns:** *void*

___

###  hasPending

▸ **hasPending**(`taskId?`: number): *this is ITaskSequentializerWithPendingTask*

**Parameters:**

Name | Type |
------ | ------ |
`taskId?` | number |

**Returns:** *this is ITaskSequentializerWithPendingTask*

___

###  setNext

▸ **setNext**(`run`: function): *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*

**Parameters:**

▪ **run**: *function*

▸ (): *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*

___

###  setPending

▸ **setPending**(`taskId`: number, `promise`: [Promise](../interfaces/cancelablepromise.md#promise)‹void›, `onCancel?`: function): *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*

**Parameters:**

▪ **taskId**: *number*

▪ **promise**: *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*

▪`Optional`  **onCancel**: *function*

▸ (): *void*

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*
