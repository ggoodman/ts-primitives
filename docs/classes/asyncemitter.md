[ts-primitives](../README.md) › [AsyncEmitter](asyncemitter.md)

# Class: AsyncEmitter <**T**>

## Type parameters

▪ **T**: *[IWaitUntil](../interfaces/iwaituntil.md)*

## Hierarchy

* [Emitter](emitter.md)‹T›

  ↳ **AsyncEmitter**

## Index

### Constructors

* [constructor](asyncemitter.md#constructor)

### Accessors

* [event](asyncemitter.md#event)

### Methods

* [dispose](asyncemitter.md#dispose)
* [fire](asyncemitter.md#fire)
* [fireAsync](asyncemitter.md#fireasync)

## Constructors

###  constructor

\+ **new AsyncEmitter**(`options?`: [EmitterOptions](../interfaces/emitteroptions.md)): *[AsyncEmitter](asyncemitter.md)*

*Inherited from [Emitter](emitter.md).[constructor](emitter.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [EmitterOptions](../interfaces/emitteroptions.md) |

**Returns:** *[AsyncEmitter](asyncemitter.md)*

## Accessors

###  event

• **get event**(): *[Event](../modules/event.md)‹T›*

*Inherited from [Emitter](emitter.md).[event](emitter.md#event)*

For the public to allow to subscribe
to events from this Emitter

**Returns:** *[Event](../modules/event.md)‹T›*

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [Emitter](emitter.md).[dispose](emitter.md#dispose)*

**Returns:** *void*

___

###  fire

▸ **fire**(`event`: T): *void*

*Inherited from [Emitter](emitter.md).[fire](emitter.md#fire)*

To be kept private to fire an event to
subscribers

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |

**Returns:** *void*

___

###  fireAsync

▸ **fireAsync**(`data`: Omit‹T, "waitUntil"›, `token`: [CancellationToken](../modules/cancellationtoken.md), `promiseJoin?`: function): *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*

**Parameters:**

▪ **data**: *Omit‹T, "waitUntil"›*

▪ **token**: *[CancellationToken](../modules/cancellationtoken.md)*

▪`Optional`  **promiseJoin**: *function*

▸ (`p`: [Promise](../interfaces/cancelablepromise.md#promise)‹any›, `listener`: Function): *[Promise](../interfaces/cancelablepromise.md#promise)‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [Promise](../interfaces/cancelablepromise.md#promise)‹any› |
`listener` | Function |

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹void›*
