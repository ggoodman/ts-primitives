[ts-primitives](../README.md) › [Event](event.md)

# Module: Event <**T**>

To an event a function with one or zero parameters
can be subscribed. The event is the subscriber function itself.

## Type parameters

▪ **T**

## Callable

▸ (`listener`: function, `thisArgs?`: any, `disposables?`: [IDisposable](../interfaces/idisposable.md)[] | [DisposableStore](../classes/disposablestore.md)): *[IDisposable](../interfaces/idisposable.md)*

To an event a function with one or zero parameters
can be subscribed. The event is the subscriber function itself.

**Parameters:**

▪ **listener**: *function*

▸ (`e`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

▪`Optional`  **thisArgs**: *any*

▪`Optional`  **disposables**: *[IDisposable](../interfaces/idisposable.md)[] | [DisposableStore](../classes/disposablestore.md)*

**Returns:** *[IDisposable](../interfaces/idisposable.md)*

## Index

### Classes

* [ChainableEvent](../classes/event.chainableevent.md)

### Interfaces

* [DOMEventEmitter](../interfaces/event.domeventemitter.md)
* [IChainableEvent](../interfaces/event.ichainableevent.md)
* [NodeEventEmitter](../interfaces/event.nodeeventemitter.md)

### Functions

* [None](event.md#const-none)
* [any](event.md#any)
* [buffer](event.md#buffer)
* [chain](event.md#chain)
* [debounce](event.md#debounce)
* [filter](event.md#filter)
* [forEach](event.md#foreach)
* [fromDOMEventEmitter](event.md#fromdomeventemitter)
* [fromNodeEventEmitter](event.md#fromnodeeventemitter)
* [fromPromise](event.md#frompromise)
* [latch](event.md#latch)
* [map](event.md#map)
* [once](event.md#once)
* [reduce](event.md#reduce)
* [signal](event.md#signal)
* [snapshot](event.md#snapshot)
* [stopwatch](event.md#stopwatch)
* [toPromise](event.md#topromise)

## Functions

### `Const` None

▸ **None**(): *object*

**Returns:** *object*

___

###  any

▸ **any**<**T**>(...`events`: [Event](event.md)‹T›[]): *[Event](event.md)‹T›*

Given a collection of events, returns a single event which emits
whenever any of the provided events emit.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...events` | [Event](event.md)‹T›[] |

**Returns:** *[Event](event.md)‹T›*

▸ **any**(...`events`: [Event](event.md)‹any›[]): *[Event](event.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`...events` | [Event](event.md)‹any›[] |

**Returns:** *[Event](event.md)‹void›*

___

###  buffer

▸ **buffer**<**T**>(`event`: [Event](event.md)‹T›, `nextTick`: boolean, `_buffer`: T[]): *[Event](event.md)‹T›*

Buffers the provided event until a first listener comes
along, at which point fire all the events at once and
pipe the event from then on.

```typescript
const emitter = new Emitter<number>();
const event = emitter.event;
const bufferedEvent = buffer(event);

emitter.fire(1);
emitter.fire(2);
emitter.fire(3);
// nothing...

const listener = bufferedEvent(num => console.log(num));
// 1, 2, 3

emitter.fire(4);
// 4
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | [Event](event.md)‹T› | - |
`nextTick` | boolean | false |
`_buffer` | T[] | [] |

**Returns:** *[Event](event.md)‹T›*

___

###  chain

▸ **chain**<**T**>(`event`: [Event](event.md)‹T›): *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](event.md)‹T› |

**Returns:** *[IChainableEvent](../interfaces/event.ichainableevent.md)‹T›*

___

###  debounce

▸ **debounce**<**T**>(`event`: [Event](event.md)‹T›, `merge`: function, `delay?`: number, `leading?`: boolean, `leakWarningThreshold?`: number): *[Event](event.md)‹T›*

Debounces the provided event, given a `merge` function.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **event**: *[Event](event.md)‹T›*

The input event.

▪ **merge**: *function*

The reducing function.

▸ (`last`: T | undefined, `event`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`last` | T &#124; undefined |
`event` | T |

▪`Optional`  **delay**: *number*

The debouncing delay in millis.

▪`Optional`  **leading**: *boolean*

Whether the event should fire in the leading phase of the timeout.

▪`Optional`  **leakWarningThreshold**: *number*

The leak warning threshold override.

**Returns:** *[Event](event.md)‹T›*

▸ **debounce**<**I**, **O**>(`event`: [Event](event.md)‹I›, `merge`: function, `delay?`: number, `leading?`: boolean, `leakWarningThreshold?`: number): *[Event](event.md)‹O›*

**Type parameters:**

▪ **I**

▪ **O**

**Parameters:**

▪ **event**: *[Event](event.md)‹I›*

▪ **merge**: *function*

▸ (`last`: O | undefined, `event`: I): *O*

**Parameters:**

Name | Type |
------ | ------ |
`last` | O &#124; undefined |
`event` | I |

▪`Optional`  **delay**: *number*

▪`Optional`  **leading**: *boolean*

▪`Optional`  **leakWarningThreshold**: *number*

**Returns:** *[Event](event.md)‹O›*

___

###  filter

▸ **filter**<**T**>(`event`: [Event](event.md)‹T›, `filter`: function): *[Event](event.md)‹T›*

Given an event and a `filter` function, returns another event which emits those
elements for which the `filter` function returns `true`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **event**: *[Event](event.md)‹T›*

▪ **filter**: *function*

▸ (`e`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

**Returns:** *[Event](event.md)‹T›*

▸ **filter**<**T**, **R**>(`event`: [Event](event.md)‹T | R›, `filter`: function): *[Event](event.md)‹R›*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

▪ **event**: *[Event](event.md)‹T | R›*

▪ **filter**: *function*

▸ (`e`: T | R): *e is R*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T &#124; R |

**Returns:** *[Event](event.md)‹R›*

___

###  forEach

▸ **forEach**<**I**>(`event`: [Event](event.md)‹I›, `each`: function): *[Event](event.md)‹I›*

Given an event and an `each` function, returns another identical event and calls
the `each` function per each element.

**Type parameters:**

▪ **I**

**Parameters:**

▪ **event**: *[Event](event.md)‹I›*

▪ **each**: *function*

▸ (`i`: I): *void*

**Parameters:**

Name | Type |
------ | ------ |
`i` | I |

**Returns:** *[Event](event.md)‹I›*

___

###  fromDOMEventEmitter

▸ **fromDOMEventEmitter**<**T**>(`emitter`: [DOMEventEmitter](../interfaces/event.domeventemitter.md), `eventName`: string, `map`: function): *[Event](event.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **emitter**: *[DOMEventEmitter](../interfaces/event.domeventemitter.md)*

▪ **eventName**: *string*

▪`Default value`  **map**: *function*= id => id

▸ (...`args`: any[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Event](event.md)‹T›*

___

###  fromNodeEventEmitter

▸ **fromNodeEventEmitter**<**T**>(`emitter`: [NodeEventEmitter](../interfaces/event.nodeeventemitter.md), `eventName`: string, `map`: function): *[Event](event.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **emitter**: *[NodeEventEmitter](../interfaces/event.nodeeventemitter.md)*

▪ **eventName**: *string*

▪`Default value`  **map**: *function*= id => id

▸ (...`args`: any[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Event](event.md)‹T›*

___

###  fromPromise

▸ **fromPromise**<**T**>(`promise`: [Promise](../interfaces/cancelablepromise.md#promise)‹T›): *[Event](event.md)‹undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | [Promise](../interfaces/cancelablepromise.md#promise)‹T› |

**Returns:** *[Event](event.md)‹undefined›*

___

###  latch

▸ **latch**<**T**>(`event`: [Event](event.md)‹T›): *[Event](event.md)‹T›*

Given an event, it returns another event which fires only when the event
element changes.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](event.md)‹T› |

**Returns:** *[Event](event.md)‹T›*

___

###  map

▸ **map**<**I**, **O**>(`event`: [Event](event.md)‹I›, `map`: function): *[Event](event.md)‹O›*

Given an event and a `map` function, returns another event which maps each element
through the mapping function.

**Type parameters:**

▪ **I**

▪ **O**

**Parameters:**

▪ **event**: *[Event](event.md)‹I›*

▪ **map**: *function*

▸ (`i`: I): *O*

**Parameters:**

Name | Type |
------ | ------ |
`i` | I |

**Returns:** *[Event](event.md)‹O›*

___

###  once

▸ **once**<**T**>(`event`: [Event](event.md)‹T›): *[Event](event.md)‹T›*

Given an event, returns another event which only fires once.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](event.md)‹T› |

**Returns:** *[Event](event.md)‹T›*

___

###  reduce

▸ **reduce**<**I**, **O**>(`event`: [Event](event.md)‹I›, `merge`: function, `initial?`: O): *[Event](event.md)‹O›*

Given an event and a `merge` function, returns another event which maps each element
and the cumulative result through the `merge` function. Similar to `map`, but with memory.

**Type parameters:**

▪ **I**

▪ **O**

**Parameters:**

▪ **event**: *[Event](event.md)‹I›*

▪ **merge**: *function*

▸ (`last`: O | undefined, `event`: I): *O*

**Parameters:**

Name | Type |
------ | ------ |
`last` | O &#124; undefined |
`event` | I |

▪`Optional`  **initial**: *O*

**Returns:** *[Event](event.md)‹O›*

___

###  signal

▸ **signal**<**T**>(`event`: [Event](event.md)‹T›): *[Event](event.md)‹void›*

Given an event, returns the same event but typed as `Event<void>`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](event.md)‹T› |

**Returns:** *[Event](event.md)‹void›*

___

###  snapshot

▸ **snapshot**<**T**>(`event`: [Event](event.md)‹T›): *[Event](event.md)‹T›*

Given a chain of event processing functions (filter, map, etc), each
function will be invoked per event & per listener. Snapshotting an event
chain allows each function to be invoked just once per event.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](event.md)‹T› |

**Returns:** *[Event](event.md)‹T›*

___

###  stopwatch

▸ **stopwatch**<**T**>(`event`: [Event](event.md)‹T›): *[Event](event.md)‹number›*

Given an event, it returns another event which fires only once and as soon as
the input event emits. The event data is the number of millis it took for the
event to fire.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](event.md)‹T› |

**Returns:** *[Event](event.md)‹number›*

___

###  toPromise

▸ **toPromise**<**T**>(`event`: [Event](event.md)‹T›): *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](event.md)‹T› |

**Returns:** *[Promise](../interfaces/cancelablepromise.md#promise)‹T›*
