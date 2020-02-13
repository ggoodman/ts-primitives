[ts-primitives](../README.md) › [ResourceQueue](resourcequeue.md)

# Class: ResourceQueue

A helper to organize queues per resource. The ResourceQueue makes sure to manage queues per resource
by disposing them once the queue is empty.

## Hierarchy

* **ResourceQueue**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Methods

* [dispose](resourcequeue.md#dispose)
* [queueFor](resourcequeue.md#queuefor)

## Methods

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable](../interfaces/idisposable.md)*

**Returns:** *void*

___

###  queueFor

▸ **queueFor**(`resource`: [URI](uri.md)): *[Queue](queue.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`resource` | [URI](uri.md) |

**Returns:** *[Queue](queue.md)‹void›*
