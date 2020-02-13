[ts-primitives](../README.md) › [EventBufferer](eventbufferer.md)

# Class: EventBufferer

The EventBufferer is useful in situations in which you want
to delay firing your events during some code.
You can wrap that code and be sure that the event will not
be fired during that wrap.

```
const emitter: Emitter;
const delayer = new EventDelayer();
const delayedEvent = delayer.wrapEvent(emitter.event);

delayedEvent(console.log);

delayer.bufferEvents(() => {
  emitter.fire(); // event will not be fired yet
});

// event will only be fired at this point
```

## Hierarchy

* **EventBufferer**

## Index

### Methods

* [bufferEvents](eventbufferer.md#bufferevents)
* [wrapEvent](eventbufferer.md#wrapevent)

## Methods

###  bufferEvents

▸ **bufferEvents**<**R**>(`fn`: function): *R*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (): *R*

**Returns:** *R*

___

###  wrapEvent

▸ **wrapEvent**<**T**>(`event`: [Event](../modules/event.md)‹T›): *[Event](../modules/event.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](../modules/event.md)‹T› |

**Returns:** *[Event](../modules/event.md)‹T›*
