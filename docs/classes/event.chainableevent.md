[ts-primitives](../README.md) › [Event](../modules/event.md) › [ChainableEvent](event.chainableevent.md)

# Class: ChainableEvent <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ChainableEvent**

## Implements

* [IChainableEvent](../interfaces/event.ichainableevent.md)‹T›

## Index

### Constructors

* [constructor](event.chainableevent.md#constructor)

### Properties

* [event](event.chainableevent.md#event)

### Methods

* [debounce](event.chainableevent.md#debounce)
* [filter](event.chainableevent.md#filter)
* [forEach](event.chainableevent.md#foreach)
* [latch](event.chainableevent.md#latch)
* [map](event.chainableevent.md#map)
* [on](event.chainableevent.md#on)
* [once](event.chainableevent.md#once)
* [reduce](event.chainableevent.md#reduce)

## Constructors

###  constructor

\+ **new ChainableEvent**(`event`: [Event](../modules/event.md)‹T›): *[ChainableEvent](event.chainableevent.md)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](../modules/event.md)‹T› |

**Returns:** *[ChainableEvent](event.chainableevent.md)*

## Properties

###  event

• **event**: *[Event](../modules/event.md)‹T›*

*Implementation of [IChainableEvent](../interfaces/event.ichainableevent.md).[event](../interfaces/event.ichainableevent.md#event)*

## Methods

###  debounce

▸ **debounce**(`merge`: function, `delay?`: number, `leading?`: boolean, `leakWarningThreshold?`: number): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

**Parameters:**

▪ **merge**: *function*

▸ (`last`: T | undefined, `event`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`last` | T &#124; undefined |
`event` | T |

▪`Optional`  **delay**: *number*

▪`Optional`  **leading**: *boolean*

▪`Optional`  **leakWarningThreshold**: *number*

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

▸ **debounce**<**R**>(`merge`: function, `delay?`: number, `leading?`: boolean, `leakWarningThreshold?`: number): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **merge**: *function*

▸ (`last`: R | undefined, `event`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`last` | R &#124; undefined |
`event` | T |

▪`Optional`  **delay**: *number*

▪`Optional`  **leading**: *boolean*

▪`Optional`  **leakWarningThreshold**: *number*

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹R›*

___

###  filter

▸ **filter**(`fn`: function): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

**Parameters:**

▪ **fn**: *function*

▸ (`e`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

▸ **filter**<**R**>(`fn`: function): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`e`: T | R): *e is R*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T &#124; R |

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹R›*

___

###  forEach

▸ **forEach**(`fn`: function): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

**Parameters:**

▪ **fn**: *function*

▸ (`i`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`i` | T |

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

___

###  latch

▸ **latch**(): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

*Implementation of [IChainableEvent](../interfaces/event.ichainableevent.md)*

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

___

###  map

▸ **map**<**O**>(`fn`: function): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹O›*

**Type parameters:**

▪ **O**

**Parameters:**

▪ **fn**: *function*

▸ (`i`: T): *O*

**Parameters:**

Name | Type |
------ | ------ |
`i` | T |

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹O›*

___

###  on

▸ **on**(`listener`: function, `thisArgs`: any, `disposables`: [IDisposable](../interfaces/idisposable.md)[] | [DisposableStore](disposablestore.md)): *[IDisposable](../interfaces/idisposable.md)*

**Parameters:**

▪ **listener**: *function*

▸ (`e`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

▪ **thisArgs**: *any*

▪ **disposables**: *[IDisposable](../interfaces/idisposable.md)[] | [DisposableStore](disposablestore.md)*

**Returns:** *[IDisposable](../interfaces/idisposable.md)*

___

###  once

▸ **once**(`listener`: function, `thisArgs`: any, `disposables`: [IDisposable](../interfaces/idisposable.md)[]): *[IDisposable](../interfaces/idisposable.md)*

**Parameters:**

▪ **listener**: *function*

▸ (`e`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

▪ **thisArgs**: *any*

▪ **disposables**: *[IDisposable](../interfaces/idisposable.md)[]*

**Returns:** *[IDisposable](../interfaces/idisposable.md)*

___

###  reduce

▸ **reduce**<**R**>(`merge`: function, `initial?`: R): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **merge**: *function*

▸ (`last`: R | undefined, `event`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`last` | R &#124; undefined |
`event` | T |

▪`Optional`  **initial**: *R*

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹R›*
