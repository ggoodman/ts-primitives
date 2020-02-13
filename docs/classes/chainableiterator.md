[ts-primitives](../README.md) › [ChainableIterator](chainableiterator.md)

# Class: ChainableIterator <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ChainableIterator**

## Implements

* [Iterator](../modules/iterator.md)‹T›

## Index

### Constructors

* [constructor](chainableiterator.md#constructor)

### Methods

* [filter](chainableiterator.md#filter)
* [map](chainableiterator.md#map)
* [next](chainableiterator.md#next)

## Constructors

###  constructor

\+ **new ChainableIterator**(`it`: [Iterator](../modules/iterator.md)‹T›): *[ChainableIterator](chainableiterator.md)*

**Parameters:**

Name | Type |
------ | ------ |
`it` | [Iterator](../modules/iterator.md)‹T› |

**Returns:** *[ChainableIterator](chainableiterator.md)*

## Methods

###  filter

▸ **filter**(`fn`: function): *[ChainableIterator](chainableiterator.md)‹T›*

**Parameters:**

▪ **fn**: *function*

▸ (`t`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *[ChainableIterator](chainableiterator.md)‹T›*

___

###  map

▸ **map**<**R**>(`fn`: function): *[ChainableIterator](chainableiterator.md)‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`t`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *[ChainableIterator](chainableiterator.md)‹R›*

___

###  next

▸ **next**(): *[IteratorResult](../README.md#iteratorresult)‹T›*

**Returns:** *[IteratorResult](../README.md#iteratorresult)‹T›*
