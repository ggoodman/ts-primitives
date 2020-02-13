[ts-primitives](../README.md) › [Emitter](emitter.md)

# Class: Emitter <**T**>

The Emitter can be used to expose an Event to the public
to fire it from the insides.
Sample:
class Document {

private readonly _onDidChange = new Emitter<(value:string)=>any>();

public onDidChange = this._onDidChange.event;

// getter-style
// get onDidChange(): Event<(value:string)=>any> {
// 	return this._onDidChange.event;
// }

private _doIt() {
//...
this._onDidChange.fire(value);
}
}

## Type parameters

▪ **T**

## Hierarchy

* **Emitter**

  ↳ [PauseableEmitter](pauseableemitter.md)

  ↳ [AsyncEmitter](asyncemitter.md)

## Index

### Constructors

* [constructor](emitter.md#constructor)

### Accessors

* [event](emitter.md#event)

### Methods

* [dispose](emitter.md#dispose)
* [fire](emitter.md#fire)

## Constructors

###  constructor

\+ **new Emitter**(`options?`: [EmitterOptions](../interfaces/emitteroptions.md)): *[Emitter](emitter.md)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [EmitterOptions](../interfaces/emitteroptions.md) |

**Returns:** *[Emitter](emitter.md)*

## Accessors

###  event

• **get event**(): *[Event](../modules/event.md)‹T›*

For the public to allow to subscribe
to events from this Emitter

**Returns:** *[Event](../modules/event.md)‹T›*

## Methods

###  dispose

▸ **dispose**(): *void*

**Returns:** *void*

___

###  fire

▸ **fire**(`event`: T): *void*

To be kept private to fire an event to
subscribers

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |

**Returns:** *void*
