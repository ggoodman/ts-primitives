[ts-primitives](../README.md) › [MutableDisposable](mutabledisposable.md)

# Class: MutableDisposable <**T**>

Manages the lifecycle of a disposable value that may be changed.

This ensures that when the disposable value is changed, the previously held disposable is disposed of. You can
also register a `MutableDisposable` on a `Disposable` to ensure it is automatically cleaned up.

## Type parameters

▪ **T**: *[IDisposable](../interfaces/idisposable.md)*

## Hierarchy

* **MutableDisposable**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Constructors

* [constructor](mutabledisposable.md#constructor)

### Accessors

* [value](mutabledisposable.md#value)

### Methods

* [clear](mutabledisposable.md#clear)
* [dispose](mutabledisposable.md#dispose)

## Constructors

###  constructor

\+ **new MutableDisposable**(): *[MutableDisposable](mutabledisposable.md)*

**Returns:** *[MutableDisposable](mutabledisposable.md)*

## Accessors

###  value

• **get value**(): *T | undefined*

**Returns:** *T | undefined*

• **set value**(`value`: T | undefined): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

**Returns:** *any*

## Methods

###  clear

▸ **clear**(): *void*

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable](../interfaces/idisposable.md)*

**Returns:** *void*
