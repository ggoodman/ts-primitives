[ts-primitives](../README.md) › [EventMultiplexer](eventmultiplexer.md)

# Class: EventMultiplexer <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **EventMultiplexer**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Constructors

* [constructor](eventmultiplexer.md#constructor)

### Accessors

* [event](eventmultiplexer.md#event)

### Methods

* [add](eventmultiplexer.md#add)
* [dispose](eventmultiplexer.md#dispose)

## Constructors

###  constructor

\+ **new EventMultiplexer**(): *[EventMultiplexer](eventmultiplexer.md)*

**Returns:** *[EventMultiplexer](eventmultiplexer.md)*

## Accessors

###  event

• **get event**(): *[Event](../modules/event.md)‹T›*

**Returns:** *[Event](../modules/event.md)‹T›*

## Methods

###  add

▸ **add**(`event`: [Event](../modules/event.md)‹T›): *[IDisposable](../interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](../modules/event.md)‹T› |

**Returns:** *[IDisposable](../interfaces/idisposable.md)*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable](../interfaces/idisposable.md)*

**Returns:** *void*
