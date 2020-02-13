[ts-primitives](../README.md) › [CancellationToken](cancellationtoken.md)

# Module: CancellationToken

## Hierarchy

* **CancellationToken**

## Implemented by

* [MutableToken](../classes/mutabletoken.md)

## Index

### Events

* [onCancellationRequested](cancellationtoken.md#oncancellationrequested)

### Properties

* [isCancellationRequested](cancellationtoken.md#iscancellationrequested)

### Variables

* [Cancelled](cancellationtoken.md#const-cancelled)
* [None](cancellationtoken.md#const-none)

### Functions

* [isCancellationToken](cancellationtoken.md#iscancellationtoken)

## Events

###  onCancellationRequested

• **onCancellationRequested**: *function*

An event which fires when cancellation is requested. This event
only ever fires `once` as cancellation can only happen once. Listeners
that are registered after cancellation will be called (next event loop run),
but also only once.

#### Type declaration:

▸ (`listener`: function, `thisArgs?`: any, `disposables?`: [IDisposable](../interfaces/idisposable.md)[]): *[IDisposable](../interfaces/idisposable.md)*

**Parameters:**

▪ **listener**: *function*

▸ (`e`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

▪`Optional`  **thisArgs**: *any*

▪`Optional`  **disposables**: *[IDisposable](../interfaces/idisposable.md)[]*

## Properties

###  isCancellationRequested

• **isCancellationRequested**: *boolean*

A flag signalling is cancellation has been requested.

## Variables

### `Const` Cancelled

• **Cancelled**: *[CancellationToken](cancellationtoken.md)* = Object.freeze({
		isCancellationRequested: true,
		onCancellationRequested: shortcutEvent
	})

___

### `Const` None

• **None**: *[CancellationToken](cancellationtoken.md)* = Object.freeze({
		isCancellationRequested: false,
		onCancellationRequested: Event.None
	})

## Functions

###  isCancellationToken

▸ **isCancellationToken**(`thing`: any): *thing is CancellationToken*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | any |

**Returns:** *thing is CancellationToken*
