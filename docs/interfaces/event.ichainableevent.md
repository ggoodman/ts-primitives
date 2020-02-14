[ts-primitives](../README.md) › [Event](../modules/event.md) › [IChainableEvent](event.ichainableevent.md)

# Interface: IChainableEvent <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **IChainableEvent**

## Index

### Properties

* [event](event.ichainableevent.md#event)

### Methods

* [debounce](event.ichainableevent.md#debounce)
* [filter](event.ichainableevent.md#filter)
* [forEach](event.ichainableevent.md#foreach)
* [latch](event.ichainableevent.md#latch)
* [map](event.ichainableevent.md#map)
* [on](event.ichainableevent.md#on)
* [once](event.ichainableevent.md#once)
* [reduce](event.ichainableevent.md#reduce)

## Properties

###  event

• **event**: *[Event](../modules/event.md)‹T›*

## Methods

###  debounce

▸ **debounce**(`merge`: function, `delay?`: number, `leading?`: boolean, `leakWarningThreshold?`: number): *[IChainableEvent](event.ichainableevent.md)‹T›*

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

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹T›*

▸ **debounce**<**R**>(`merge`: function, `delay?`: number, `leading?`: boolean, `leakWarningThreshold?`: number): *[IChainableEvent](event.ichainableevent.md)‹R›*

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

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹R›*

___

###  filter

▸ **filter**(`fn`: function): *[IChainableEvent](event.ichainableevent.md)‹T›*

**Parameters:**

▪ **fn**: *function*

▸ (`e`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹T›*

▸ **filter**<**R**>(`fn`: function): *[IChainableEvent](event.ichainableevent.md)‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`e`: T | R): *e is R*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T &#124; R |

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹R›*

___

###  forEach

▸ **forEach**(`fn`: function): *[IChainableEvent](event.ichainableevent.md)‹T›*

**Parameters:**

▪ **fn**: *function*

▸ (`i`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`i` | T |

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹T›*

___

###  latch

▸ **latch**(): *[IChainableEvent](event.ichainableevent.md)‹T›*

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹T›*

___

###  map

▸ **map**<**O**>(`fn`: function): *[IChainableEvent](event.ichainableevent.md)‹O›*

**Type parameters:**

▪ **O**

**Parameters:**

▪ **fn**: *function*

▸ (`i`: T): *O*

**Parameters:**

Name | Type |
------ | ------ |
`i` | T |

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹O›*

___

###  on

▸ **on**(`listener`: function, `thisArgs?`: any, `disposables?`: [IDisposable](idisposable.md)[] | [DisposableStore](../classes/disposablestore.md)): *[IDisposable](idisposable.md)*

**Parameters:**

▪ **listener**: *function*

▸ (`e`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

▪`Optional`  **thisArgs**: *any*

▪`Optional`  **disposables**: *[IDisposable](idisposable.md)[] | [DisposableStore](../classes/disposablestore.md)*

**Returns:** *[IDisposable](idisposable.md)*

___

###  once

▸ **once**(`listener`: function, `thisArgs?`: any, `disposables?`: [IDisposable](idisposable.md)[]): *[IDisposable](idisposable.md)*

**Parameters:**

▪ **listener**: *function*

▸ (`e`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

▪`Optional`  **thisArgs**: *any*

▪`Optional`  **disposables**: *[IDisposable](idisposable.md)[]*

**Returns:** *[IDisposable](idisposable.md)*

___

###  reduce

▸ **reduce**<**R**>(`merge`: function, `initial?`: R): *[IChainableEvent](event.ichainableevent.md)‹R›*

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

**Returns:** *[IChainableEvent](event.ichainableevent.md)‹R›*
