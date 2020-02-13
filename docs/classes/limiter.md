[ts-primitives](../README.md) › [Limiter](limiter.md)

# Class: Limiter <**T**>

A helper to queue N promises and run them all with a max degree of parallelism. The helper
ensures that at any time no more than M promises are running at the same time.

## Type parameters

▪ **T**

## Hierarchy

* **Limiter**

  ↳ [Queue](queue.md)

## Index

### Constructors

* [constructor](limiter.md#constructor)

### Accessors

* [onFinished](limiter.md#onfinished)
* [size](limiter.md#size)

### Methods

* [dispose](limiter.md#dispose)
* [queue](limiter.md#queue)

## Constructors

###  constructor

\+ **new Limiter**(`maxDegreeOfParalellism`: number): *[Limiter](limiter.md)*

**Parameters:**

Name | Type |
------ | ------ |
`maxDegreeOfParalellism` | number |

**Returns:** *[Limiter](limiter.md)*

## Accessors

###  onFinished

• **get onFinished**(): *[Event](../modules/event.md)‹void›*

**Returns:** *[Event](../modules/event.md)‹void›*

___

###  size

• **get size**(): *number*

**Returns:** *number*

## Methods

###  dispose

▸ **dispose**(): *void*

**Returns:** *void*

___

###  queue

▸ **queue**(`factory`: [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T››): *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T›› |

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*
