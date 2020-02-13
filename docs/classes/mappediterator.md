[ts-primitives](../README.md) › [MappedIterator](mappediterator.md)

# Class: MappedIterator <**T, R**>

## Type parameters

▪ **T**

▪ **R**

## Hierarchy

* **MappedIterator**

  ↳ [MappedNavigator](mappednavigator.md)

## Implements

* [INextIterator](../interfaces/inextiterator.md)‹R›

## Index

### Constructors

* [constructor](mappediterator.md#constructor)

### Methods

* [next](mappediterator.md#next)

## Constructors

###  constructor

\+ **new MappedIterator**(`iterator`: [INextIterator](../interfaces/inextiterator.md)‹T›, `fn`: function): *[MappedIterator](mappediterator.md)*

**Parameters:**

▪ **iterator**: *[INextIterator](../interfaces/inextiterator.md)‹T›*

▪ **fn**: *function*

▸ (`item`: T | null): *R*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T &#124; null |

**Returns:** *[MappedIterator](mappediterator.md)*

## Methods

###  next

▸ **next**(): *R*

*Implementation of [INextIterator](../interfaces/inextiterator.md)*

**Returns:** *R*
