[ts-primitives](../README.md) › [ILimitedTaskFactory](ilimitedtaskfactory.md)

# Interface: ILimitedTaskFactory <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ILimitedTaskFactory**

## Index

### Properties

* [c](ilimitedtaskfactory.md#c)
* [e](ilimitedtaskfactory.md#e)
* [factory](ilimitedtaskfactory.md#factory)

## Properties

###  c

• **c**: *function*

#### Type declaration:

▸ (`value?`: T | [Promise](cancelablepromise.md#promise)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | T &#124; [Promise](cancelablepromise.md#promise)‹T› |

___

###  e

• **e**: *function*

#### Type declaration:

▸ (`error?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | any |

___

###  factory

• **factory**: *[ITask](itask.md)‹[Promise](cancelablepromise.md#promise)‹T››*
