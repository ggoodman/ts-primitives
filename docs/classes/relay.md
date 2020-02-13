[ts-primitives](../README.md) › [Relay](relay.md)

# Class: Relay <**T**>

A Relay is an event forwarder which functions as a replugabble event pipe.
Once created, you can connect an input event to it and it will simply forward
events from that input event through its own `event` property. The `input`
can be changed at any point in time.

## Type parameters

▪ **T**

## Hierarchy

* **Relay**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Properties

* [event](relay.md#event)

### Accessors

* [input](relay.md#input)

### Methods

* [dispose](relay.md#dispose)

## Properties

###  event

• **event**: *[Event](../modules/event.md)‹T›* = this.emitter.event

## Accessors

###  input

• **set input**(`event`: [Event](../modules/event.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](../modules/event.md)‹T› |

**Returns:** *void*

## Methods

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable](../interfaces/idisposable.md)*

**Returns:** *void*
