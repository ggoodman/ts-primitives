[ts-primitives](../README.md) › [ISequentialTask](isequentialtask.md)

# Interface: ISequentialTask

## Hierarchy

* **ISequentialTask**

## Index

### Properties

* [promise](isequentialtask.md#promise)
* [promiseReject](isequentialtask.md#promisereject)
* [promiseResolve](isequentialtask.md#promiseresolve)
* [run](isequentialtask.md#run)

## Properties

###  promise

• **promise**: *[Promise](cancelablepromise.md#promise)‹void›*

___

###  promiseReject

• **promiseReject**: *function*

#### Type declaration:

▸ (`error`: [Error](../classes/notimplementederror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../classes/notimplementederror.md#static-error) |

___

###  promiseResolve

• **promiseResolve**: *function*

#### Type declaration:

▸ (): *void*

___

###  run

• **run**: *function*

#### Type declaration:

▸ (): *[Promise](cancelablepromise.md#promise)‹void›*
