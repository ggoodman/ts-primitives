[ts-primitives](../README.md) › [ArrayIterator](arrayiterator.md)

# Class: ArrayIterator <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ArrayIterator**

  ↳ [ArrayNavigator](arraynavigator.md)

## Implements

* [INextIterator](../interfaces/inextiterator.md)‹T›

## Index

### Constructors

* [constructor](arrayiterator.md#constructor)

### Methods

* [first](arrayiterator.md#first)
* [next](arrayiterator.md#next)

## Constructors

###  constructor

\+ **new ArrayIterator**(`items`: keyof T[], `start`: number, `end`: number, `index`: number): *[ArrayIterator](arrayiterator.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | keyof T[] | - |
`start` | number | 0 |
`end` | number | items.length |
`index` | number | start - 1 |

**Returns:** *[ArrayIterator](arrayiterator.md)*

## Methods

###  first

▸ **first**(): *T | null*

**Returns:** *T | null*

___

###  next

▸ **next**(): *T | null*

*Implementation of [INextIterator](../interfaces/inextiterator.md)*

**Returns:** *T | null*
