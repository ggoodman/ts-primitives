[ts-primitives](../README.md) › [INavigator](inavigator.md)

# Interface: INavigator <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [INextIterator](inextiterator.md)‹T›

  ↳ **INavigator**

## Implemented by

* [ArrayNavigator](../classes/arraynavigator.md)
* [MappedNavigator](../classes/mappednavigator.md)

## Index

### Properties

* [language](inavigator.md#language)
* [maxTouchPoints](inavigator.md#optional-maxtouchpoints)
* [userAgent](inavigator.md#useragent)

### Methods

* [current](inavigator.md#current)
* [first](inavigator.md#first)
* [last](inavigator.md#last)
* [next](inavigator.md#next)
* [parent](inavigator.md#parent)
* [previous](inavigator.md#previous)

## Properties

###  language

• **language**: *string*

___

### `Optional` maxTouchPoints

• **maxTouchPoints**? : *number*

___

###  userAgent

• **userAgent**: *string*

## Methods

###  current

▸ **current**(): *T | null*

**Returns:** *T | null*

___

###  first

▸ **first**(): *T | null*

**Returns:** *T | null*

___

###  last

▸ **last**(): *T | null*

**Returns:** *T | null*

___

###  next

▸ **next**(): *T | null*

*Overrides [INextIterator](inextiterator.md).[next](inextiterator.md#next)*

**Returns:** *T | null*

___

###  parent

▸ **parent**(): *T | null*

**Returns:** *T | null*

___

###  previous

▸ **previous**(): *T | null*

**Returns:** *T | null*
