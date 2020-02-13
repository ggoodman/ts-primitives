[ts-primitives](../README.md) › [Delayer](delayer.md)

# Class: Delayer <**T**>

A helper to delay execution of a task that is being requested often.

Following the throttler, now imagine the mail man wants to optimize the number of
trips proactively. The trip itself can be long, so he decides not to make the trip
as soon as a letter is submitted. Instead he waits a while, in case more
letters are submitted. After said waiting period, if no letters were submitted, he
decides to make the trip. Imagine that N more letters were submitted after the first
one, all within a short period of time between each other. Even though N+1
submissions occurred, only 1 delivery was made.

The delayer offers this behavior via the trigger() method, into which both the task
to be executed and the waiting period (delay) must be passed in as arguments. Following
the example:

		const delayer = new Delayer(WAITING_PERIOD);
		const letters = [];

		function letterReceived(l) {
			letters.push(l);
			delayer.trigger(() => { return makeTheTrip(); });
		}

## Type parameters

▪ **T**

## Hierarchy

* **Delayer**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Constructors

* [constructor](delayer.md#constructor)

### Properties

* [defaultDelay](delayer.md#defaultdelay)

### Methods

* [cancel](delayer.md#cancel)
* [dispose](delayer.md#dispose)
* [isTriggered](delayer.md#istriggered)
* [trigger](delayer.md#trigger)

## Constructors

###  constructor

\+ **new Delayer**(`defaultDelay`: number): *[Delayer](delayer.md)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultDelay` | number |

**Returns:** *[Delayer](delayer.md)*

## Properties

###  defaultDelay

• **defaultDelay**: *number*

## Methods

###  cancel

▸ **cancel**(): *void*

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable](../interfaces/idisposable.md)*

**Returns:** *void*

___

###  isTriggered

▸ **isTriggered**(): *boolean*

**Returns:** *boolean*

___

###  trigger

▸ **trigger**(`task`: [ITask](../interfaces/itask.md)‹T | [Promise](../interfaces/cancelablepromise.md#promise)‹T››, `delay`: number): *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`task` | [ITask](../interfaces/itask.md)‹T &#124; [Promise](../interfaces/cancelablepromise.md#promise)‹T›› | - |
`delay` | number | this.defaultDelay |

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*
