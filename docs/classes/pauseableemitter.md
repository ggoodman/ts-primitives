[ts-primitives](../README.md) › [PauseableEmitter](pauseableemitter.md)

# Class: PauseableEmitter <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Emitter](emitter.md)‹T›

  ↳ **PauseableEmitter**

## Index

### Constructors

* [constructor](pauseableemitter.md#constructor)

### Accessors

* [event](pauseableemitter.md#event)

### Methods

* [dispose](pauseableemitter.md#dispose)
* [fire](pauseableemitter.md#fire)
* [pause](pauseableemitter.md#pause)
* [resume](pauseableemitter.md#resume)

## Constructors

###  constructor

\+ **new PauseableEmitter**(`options?`: [EmitterOptions](../interfaces/emitteroptions.md) & object): *[PauseableEmitter](pauseableemitter.md)*

*Overrides [Emitter](emitter.md).[constructor](emitter.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [EmitterOptions](../interfaces/emitteroptions.md) & object |

**Returns:** *[PauseableEmitter](pauseableemitter.md)*

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

*Overrides [Emitter](emitter.md).[fire](emitter.md#fire)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |

**Returns:** *void*

___

###  pause

▸ **pause**(): *void*

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

**Returns:** *void*
