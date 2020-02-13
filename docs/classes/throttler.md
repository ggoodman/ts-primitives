[ts-primitives](../README.md) › [Throttler](throttler.md)

# Class: Throttler

A helper to prevent accumulation of sequential async tasks.

Imagine a mail man with the sole task of delivering letters. As soon as
a letter submitted for delivery, he drives to the destination, delivers it
and returns to his base. Imagine that during the trip, N more letters were submitted.
When the mail man returns, he picks those N letters and delivers them all in a
single trip. Even though N+1 submissions occurred, only 2 deliveries were made.

The throttler implements this via the queue() method, by providing it a task
factory. Following the example:

		const throttler = new Throttler();
		const letters = [];

		function deliver() {
			const lettersToDeliver = letters;
			letters = [];
			return makeTheTrip(lettersToDeliver);
		}

		function onLetterReceived(l) {
			letters.push(l);
			throttler.queue(deliver);
		}

## Hierarchy

* **Throttler**

## Index

### Constructors

* [constructor](throttler.md#constructor)

### Methods

* [queue](throttler.md#queue)

## Constructors

###  constructor

\+ **new Throttler**(): *[Throttler](throttler.md)*

**Returns:** *[Throttler](throttler.md)*

## Methods

###  queue

▸ **queue**<**T**>(`promiseFactory`: [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T››): *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promiseFactory` | [ITask](../interfaces/itask.md)‹[Promise](../interfaces/cancelablepromise.md#promise)‹T›› |

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*
