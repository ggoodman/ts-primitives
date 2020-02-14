[ts-primitives](../README.md) › [Iterator](iterator.md)

# Module: Iterator <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Iterator**

## Implemented by

* [ChainableIterator](../classes/chainableiterator.md)

## Index

### Functions

* [chain](iterator.md#chain)
* [collect](iterator.md#collect)
* [concat](iterator.md#concat)
* [empty](iterator.md#empty)
* [filter](iterator.md#filter)
* [forEach](iterator.md#foreach)
* [from](iterator.md#from)
* [fromArray](iterator.md#fromarray)
* [fromNativeIterator](iterator.md#fromnativeiterator)
* [map](iterator.md#map)
* [single](iterator.md#single)

### Methods

* [next](iterator.md#next)

## Functions

###  chain

▸ **chain**<**T**>(`iterator`: [Iterator](iterator.md)‹T›): *[ChainableIterator](../classes/chainableiterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | [Iterator](iterator.md)‹T› |

**Returns:** *[ChainableIterator](../classes/chainableiterator.md)‹T›*

___

###  collect

▸ **collect**<**T**>(`iterator`: [Iterator](iterator.md)‹T›, `atMost?`: number): *T[]*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | [Iterator](iterator.md)‹T› |
`atMost?` | number |

**Returns:** *T[]*

___

###  concat

▸ **concat**<**T**>(...`iterators`: [Iterator](iterator.md)‹T›[]): *[Iterator](iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...iterators` | [Iterator](iterator.md)‹T›[] |

**Returns:** *[Iterator](iterator.md)‹T›*

___

###  empty

▸ **empty**<**T**>(): *[Iterator](iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[Iterator](iterator.md)‹T›*

___

###  filter

▸ **filter**<**T**>(`iterator`: [Iterator](iterator.md)‹T›, `fn`: function): *[Iterator](iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **iterator**: *[Iterator](iterator.md)‹T›*

▪ **fn**: *function*

▸ (`t`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *[Iterator](iterator.md)‹T›*

___

###  forEach

▸ **forEach**<**T**>(`iterator`: [Iterator](iterator.md)‹T›, `fn`: function): *void*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **iterator**: *[Iterator](iterator.md)‹T›*

▪ **fn**: *function*

▸ (`t`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *void*

___

###  from

▸ **from**<**T**>(`elements`: [Iterator](iterator.md)‹T› | T[] | undefined): *[Iterator](iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterator](iterator.md)‹T› &#124; T[] &#124; undefined |

**Returns:** *[Iterator](iterator.md)‹T›*

___

###  fromArray

▸ **fromArray**<**T**>(`array`: ReadonlyArray‹T›, `index?`: number, `length?`: number): *[Iterator](iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | ReadonlyArray‹T› |
`index?` | number |
`length?` | number |

**Returns:** *[Iterator](iterator.md)‹T›*

___

###  fromNativeIterator

▸ **fromNativeIterator**<**T**>(`it`: [NativeIterator](../interfaces/nativeiterator.md)‹T›): *[Iterator](iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`it` | [NativeIterator](../interfaces/nativeiterator.md)‹T› |

**Returns:** *[Iterator](iterator.md)‹T›*

___

###  map

▸ **map**<**T**, **R**>(`iterator`: [Iterator](iterator.md)‹T›, `fn`: function): *[Iterator](iterator.md)‹R›*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

▪ **iterator**: *[Iterator](iterator.md)‹T›*

▪ **fn**: *function*

▸ (`t`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *[Iterator](iterator.md)‹R›*

___

###  single

▸ **single**<**T**>(`value`: T): *[Iterator](iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Iterator](iterator.md)‹T›*

## Methods

###  next

▸ **next**(): *[IteratorResult](../README.md#iteratorresult)‹T›*

**Returns:** *[IteratorResult](../README.md#iteratorresult)‹T›*
