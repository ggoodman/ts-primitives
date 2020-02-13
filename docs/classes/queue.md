[ts-primitives](../README.md) › [Queue](queue.md)

# Class: Queue <**T**>

A queue is handles one promise at a time and guarantees that at any time only one promise is executing.

## Type parameters

▪ **T**

## Hierarchy

* [Limiter](limiter.md)‹T›

  ↳ **Queue**

## Index

### Constructors

* [constructor](queue.md#constructor)

### Accessors

* [onFinished](queue.md#onfinished)
* [size](queue.md#size)

### Methods

* [dispose](queue.md#dispose)
* [queue](queue.md#queue)

## Constructors

###  constructor

\+ **new Queue**(): *[Queue](queue.md)*

*Overrides [Limiter](limiter.md).[constructor](limiter.md#constructor)*

**Returns:** *[Queue](queue.md)*

## Accessors

###  onFinished

• **get onFinished**(): *[Event](../modules/event.md)‹void›*

*Inherited from [Limiter](limiter.md).[onFinished](limiter.md#onfinished)*

**Returns:** *[Event](../modules/event.md)‹void›*

___

###  size

• **get size**(): *number*

*Inherited from [Limiter](limiter.md).[size](limiter.md#size)*

**Returns:** *number*

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [Limiter](limiter.md).[dispose](limiter.md#dispose)*

**Returns:** *void*

___

###  queue

▸ **queue**(`factory`: [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T››): *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*

*Inherited from [Limiter](limiter.md).[queue](limiter.md#queue)*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T›› |

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*
