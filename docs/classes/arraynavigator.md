[ts-primitives](../README.md) › [ArrayNavigator](arraynavigator.md)

# Class: ArrayNavigator <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [ArrayIterator](arrayiterator.md)‹T›

  ↳ **ArrayNavigator**

## Implements

* [INextIterator](../interfaces/inextiterator.md)‹T›
* [INavigator](../interfaces/inavigator.md)‹T›

## Index

### Constructors

* [constructor](arraynavigator.md#constructor)

### Methods

* [current](arraynavigator.md#current)
* [first](arraynavigator.md#first)
* [last](arraynavigator.md#last)
* [next](arraynavigator.md#next)
* [parent](arraynavigator.md#parent)
* [previous](arraynavigator.md#previous)

## Constructors

###  constructor

\+ **new ArrayNavigator**(`items`: keyof T[], `start`: number, `end`: number, `index`: number): *[ArrayNavigator](arraynavigator.md)*

*Overrides [ArrayIterator](arrayiterator.md).[constructor](arrayiterator.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | keyof T[] | - |
`start` | number | 0 |
`end` | number | items.length |
`index` | number | start - 1 |

**Returns:** *[ArrayNavigator](arraynavigator.md)*

## Methods

###  current

▸ **current**(): *T | null*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *T | null*

___

###  first

▸ **first**(): *T | null*

*Implementation of [INavigator](../interfaces/inavigator.md)*

*Overrides [ArrayIterator](arrayiterator.md).[first](arrayiterator.md#first)*

**Returns:** *T | null*

___

###  last

▸ **last**(): *T | null*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *T | null*

___

###  next

▸ **next**(): *T | null*

*Implementation of [INavigator](../interfaces/inavigator.md)*

*Inherited from [ArrayIterator](arrayiterator.md).[next](arrayiterator.md#next)*

**Returns:** *T | null*

___

###  parent

▸ **parent**(): *T | null*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *T | null*

___

###  previous

▸ **previous**(): *T | null*

*Implementation of [INavigator](../interfaces/inavigator.md)*

**Returns:** *T | null*
