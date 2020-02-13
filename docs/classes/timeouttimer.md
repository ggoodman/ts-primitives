[ts-primitives](../README.md) › [TimeoutTimer](timeouttimer.md)

# Class: TimeoutTimer

## Hierarchy

* **TimeoutTimer**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Constructors

* [constructor](timeouttimer.md#constructor)

### Methods

* [cancel](timeouttimer.md#cancel)
* [cancelAndSet](timeouttimer.md#cancelandset)
* [dispose](timeouttimer.md#dispose)
* [setIfNotSet](timeouttimer.md#setifnotset)

## Constructors

###  constructor

\+ **new TimeoutTimer**(): *[TimeoutTimer](timeouttimer.md)*

**Returns:** *[TimeoutTimer](timeouttimer.md)*

\+ **new TimeoutTimer**(`runner`: function, `timeout`: number): *[TimeoutTimer](timeouttimer.md)*

**Parameters:**

▪ **runner**: *function*

▸ (): *void*

▪ **timeout**: *number*

**Returns:** *[TimeoutTimer](timeouttimer.md)*

## Methods

###  cancel

▸ **cancel**(): *void*

**Returns:** *void*

___

###  cancelAndSet

▸ **cancelAndSet**(`runner`: function, `timeout`: number): *void*

**Parameters:**

▪ **runner**: *function*

▸ (): *void*

▪ **timeout**: *number*

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable](../interfaces/idisposable.md)*

**Returns:** *void*

___

###  setIfNotSet

▸ **setIfNotSet**(`runner`: function, `timeout`: number): *void*

**Parameters:**

▪ **runner**: *function*

▸ (): *void*

▪ **timeout**: *number*

**Returns:** *void*
