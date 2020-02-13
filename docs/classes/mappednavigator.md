[ts-primitives](../README.md) › [MappedNavigator](mappednavigator.md)

# Class: MappedNavigator <**T, R**>

## Type parameters

▪ **T**

▪ **R**

## Hierarchy

* [MappedIterator](mappediterator.md)‹T, R›

  ↳ **MappedNavigator**

## Implements

* [INextIterator](../interfaces/inextiterator.md)‹R›
* [INavigator](../interfaces/inavigator.md)‹R›

## Index

### Constructors

* [constructor](mappednavigator.md#constructor)

### Methods

* [current](mappednavigator.md#current)
* [first](mappednavigator.md#first)
* [last](mappednavigator.md#last)
* [next](mappednavigator.md#next)
* [parent](mappednavigator.md#parent)
* [previous](mappednavigator.md#previous)

## Constructors

###  constructor

\+ **new MappedNavigator**(`navigator`: [INavigator](../interfaces/inavigator.md)‹T›, `fn`: function): *[MappedNavigator](mappednavigator.md)*

*Overrides [MappedIterator](mappediterator.md).[constructor](mappediterator.md#constructor)*

**Parameters:**

▪ **navigator**: *[INavigator](../interfaces/inavigator.md)‹T›*

▪ **fn**: *function*

▸ (`item`: T | null): *R*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T &#124; null |

**Returns:** *[MappedNavigator](mappednavigator.md)*

## Methods

###  current

▸ **current**(): *R*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *R*

___

###  first

▸ **first**(): *R*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *R*

___

###  last

▸ **last**(): *R*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *R*

___

###  next

▸ **next**(): *R*

*Implementation of [INavigator](../interfaces/inavigator.md)*

*Overrides [MappedIterator](mappediterator.md).[next](mappediterator.md#next)*

**Returns:** *R*

___

###  parent

▸ **parent**(): *R*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *R*

___

###  previous

▸ **previous**(): *R*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *R*
