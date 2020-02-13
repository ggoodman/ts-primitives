[ts-primitives](../README.md) › [ThrottledDelayer](throttleddelayer.md)

# Class: ThrottledDelayer <**T**>

A helper to delay execution of a task that is being requested often, while
preventing accumulation of consecutive executions, while the task runs.

The mail man is clever and waits for a certain amount of time, before going
out to deliver letters. While the mail man is going out, more letters arrive
and can only be delivered once he is back. Once he is back the mail man will
do one more trip to deliver the letters that have accumulated while he was out.

## Type parameters

▪ **T**

## Hierarchy

* **ThrottledDelayer**

## Index

### Constructors

* [constructor](throttleddelayer.md#constructor)

### Methods

* [cancel](throttleddelayer.md#cancel)
* [dispose](throttleddelayer.md#dispose)
* [isTriggered](throttleddelayer.md#istriggered)
* [trigger](throttleddelayer.md#trigger)

## Constructors

###  constructor

\+ **new ThrottledDelayer**(`defaultDelay`: number): *[ThrottledDelayer](throttleddelayer.md)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultDelay` | number |

**Returns:** *[ThrottledDelayer](throttleddelayer.md)*

## Methods

###  cancel

▸ **cancel**(): *void*

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

**Returns:** *void*

___

###  isTriggered

▸ **isTriggered**(): *boolean*

**Returns:** *boolean*

___

###  trigger

▸ **trigger**(`promiseFactory`: [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T››, `delay?`: number): *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`promiseFactory` | [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T›› |
`delay?` | number |

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*
