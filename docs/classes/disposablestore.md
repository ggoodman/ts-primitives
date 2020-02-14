[ts-primitives](../README.md) › [DisposableStore](disposablestore.md)

# Class: DisposableStore

## Hierarchy

* **DisposableStore**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Properties

* [DISABLE_DISPOSED_WARNING](disposablestore.md#static-disable_disposed_warning)

### Methods

* [add](disposablestore.md#add)
* [clear](disposablestore.md#clear)
* [dispose](disposablestore.md#dispose)

## Properties

### `Static` DISABLE_DISPOSED_WARNING

▪ **DISABLE_DISPOSED_WARNING**: *boolean*

## Methods

###  add

▸ **add**<**T**>(`t`: T): *T*

**Type parameters:**

▪ **T**: *[IDisposable](../interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *T*

___

###  clear

▸ **clear**(): *void*

Dispose of all registered disposables but do not mark this object as disposed.

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable](../interfaces/idisposable.md)*

Dispose of all registered disposables and mark this object as disposed.

Any future disposables added to this object will be disposed of on `add`.

**Returns:** *void*
