[ts-primitives](README.md)

# ts-primitives

## Index

### Modules

* [CancellationToken](modules/cancellationtoken.md)
* [Event](modules/event.md)
* [Iterator](modules/iterator.md)

### Classes

* [AsyncEmitter](classes/asyncemitter.md)
* [Barrier](classes/barrier.md)
* [CancellationTokenSource](classes/cancellationtokensource.md)
* [ChainableIterator](classes/chainableiterator.md)
* [Delayer](classes/delayer.md)
* [Disposable](classes/disposable.md)
* [DisposableStore](classes/disposablestore.md)
* [Emitter](classes/emitter.md)
* [EventBufferer](classes/eventbufferer.md)
* [EventMultiplexer](classes/eventmultiplexer.md)
* [ImmortalReference](classes/immortalreference.md)
* [Limiter](classes/limiter.md)
* [LinkedList](classes/linkedlist.md)
* [MutableDisposable](classes/mutabledisposable.md)
* [PauseableEmitter](classes/pauseableemitter.md)
* [Queue](classes/queue.md)
* [ReferenceCollection](classes/referencecollection.md)
* [Relay](classes/relay.md)
* [Sequencer](classes/sequencer.md)
* [ThrottledDelayer](classes/throttleddelayer.md)
* [Throttler](classes/throttler.md)

### Interfaces

* [CancelablePromise](interfaces/cancelablepromise.md)
* [EmitterOptions](interfaces/emitteroptions.md)
* [IDisposable](interfaces/idisposable.md)
* [IReference](interfaces/ireference.md)
* [ITask](interfaces/itask.md)
* [IWaitUntil](interfaces/iwaituntil.md)
* [IteratorDefinedResult](interfaces/iteratordefinedresult.md)
* [IteratorUndefinedResult](interfaces/iteratorundefinedresult.md)
* [NativeIterator](interfaces/nativeiterator.md)
* [NativeIteratorReturnResult](interfaces/nativeiteratorreturnresult.md)
* [NativeIteratorYieldResult](interfaces/nativeiteratoryieldresult.md)
* [Thenable](interfaces/thenable.md)

### Type aliases

* [IteratorResult](README.md#iteratorresult)
* [Listener](README.md#listener)
* [NativeIteratorResult](README.md#nativeiteratorresult)

### Functions

* [asPromise](README.md#aspromise)
* [combinedDisposable](README.md#combineddisposable)
* [createCancelablePromise](README.md#createcancelablepromise)
* [disposableTimeout](README.md#disposabletimeout)
* [dispose](README.md#dispose)
* [first](README.md#first)
* [ignoreErrors](README.md#ignoreerrors)
* [isDisposable](README.md#isdisposable)
* [isThenable](README.md#isthenable)
* [raceCancellation](README.md#racecancellation)
* [retry](README.md#retry)
* [sequence](README.md#sequence)
* [setGlobalLeakWarningThreshold](README.md#setgloballeakwarningthreshold)
* [timeout](README.md#timeout)
* [toDisposable](README.md#todisposable)

## Type aliases

###  IteratorResult

Ƭ **IteratorResult**: *[IteratorDefinedResult](interfaces/iteratordefinedresult.md)‹T› | [IteratorUndefinedResult](interfaces/iteratorundefinedresult.md)*

___

###  Listener

Ƭ **Listener**: *[function, any] | function*

___

###  NativeIteratorResult

Ƭ **NativeIteratorResult**: *[NativeIteratorYieldResult](interfaces/nativeiteratoryieldresult.md)‹T› | [NativeIteratorReturnResult](interfaces/nativeiteratorreturnresult.md)‹TReturn›*

## Functions

###  asPromise

▸ **asPromise**<**T**>(`callback`: function): *[Promise](interfaces/cancelablepromise.md#promise)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **callback**: *function*

▸ (): *T | [Thenable](interfaces/thenable.md)‹T›*

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹T›*

___

###  combinedDisposable

▸ **combinedDisposable**(...`disposables`: [IDisposable](interfaces/idisposable.md)[]): *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`...disposables` | [IDisposable](interfaces/idisposable.md)[] |

**Returns:** *[IDisposable](interfaces/idisposable.md)*

___

###  createCancelablePromise

▸ **createCancelablePromise**<**T**>(`callback`: function): *[CancelablePromise](interfaces/cancelablepromise.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **callback**: *function*

▸ (`token`: [CancellationToken](modules/cancellationtoken.md)): *[Promise](interfaces/cancelablepromise.md#promise)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`token` | [CancellationToken](modules/cancellationtoken.md) |

**Returns:** *[CancelablePromise](interfaces/cancelablepromise.md)‹T›*

___

###  disposableTimeout

▸ **disposableTimeout**(`handler`: function, `timeout?`: number): *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

▪ **handler**: *function*

▸ (): *void*

▪`Optional`  **timeout**: *number*

**Returns:** *[IDisposable](interfaces/idisposable.md)*

___

###  dispose

▸ **dispose**<**T**>(`disposable`: T): *T*

**Type parameters:**

▪ **T**: *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | T |

**Returns:** *T*

▸ **dispose**<**T**>(`disposable`: T | undefined): *T | undefined*

**Type parameters:**

▪ **T**: *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | T &#124; undefined |

**Returns:** *T | undefined*

▸ **dispose**<**T**>(`disposables`: Array‹T›): *Array‹T›*

**Type parameters:**

▪ **T**: *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`disposables` | Array‹T› |

**Returns:** *Array‹T›*

▸ **dispose**<**T**>(`disposables`: ReadonlyArray‹T›): *ReadonlyArray‹T›*

**Type parameters:**

▪ **T**: *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`disposables` | ReadonlyArray‹T› |

**Returns:** *ReadonlyArray‹T›*

___

###  first

▸ **first**<**T**>(`promiseFactories`: [ITask](interfaces/itask.md)‹[Promise](interfaces/cancelablepromise.md#promise)‹T››[], `shouldStop?`: function, `defaultValue?`: T | null): *[Promise](interfaces/cancelablepromise.md#promise)‹T | null›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **promiseFactories**: *[ITask](interfaces/itask.md)‹[Promise](interfaces/cancelablepromise.md#promise)‹T››[]*

▪`Optional`  **shouldStop**: *function*

▸ (`t`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

▪`Optional`  **defaultValue**: *T | null*

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹T | null›*

___

###  ignoreErrors

▸ **ignoreErrors**<**T**>(`promise`: [Promise](interfaces/cancelablepromise.md#promise)‹T›): *[Promise](interfaces/cancelablepromise.md#promise)‹T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | [Promise](interfaces/cancelablepromise.md#promise)‹T› |

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹T | undefined›*

___

###  isDisposable

▸ **isDisposable**<**E**>(`thing`: E): *thing is E & IDisposable*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | E |

**Returns:** *thing is E & IDisposable*

___

###  isThenable

▸ **isThenable**<**T**>(`obj`: any): *obj is Promise<T>*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is Promise<T>*

___

###  raceCancellation

▸ **raceCancellation**<**T**>(`promise`: [Promise](interfaces/cancelablepromise.md#promise)‹T›, `token`: [CancellationToken](modules/cancellationtoken.md)): *[Promise](interfaces/cancelablepromise.md#promise)‹T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | [Promise](interfaces/cancelablepromise.md#promise)‹T› |
`token` | [CancellationToken](modules/cancellationtoken.md) |

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹T | undefined›*

▸ **raceCancellation**<**T**>(`promise`: [Promise](interfaces/cancelablepromise.md#promise)‹T›, `token`: [CancellationToken](modules/cancellationtoken.md), `defaultValue`: T): *[Promise](interfaces/cancelablepromise.md#promise)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | [Promise](interfaces/cancelablepromise.md#promise)‹T› |
`token` | [CancellationToken](modules/cancellationtoken.md) |
`defaultValue` | T |

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹T›*

___

###  retry

▸ **retry**<**T**>(`task`: [ITask](interfaces/itask.md)‹[Promise](interfaces/cancelablepromise.md#promise)‹T››, `delay`: number, `retries`: number): *[Promise](interfaces/cancelablepromise.md#promise)‹T›*

A helper to organize queues per resource. The ResourceQueue makes sure to manage queues per resource
by disposing them once the queue is empty.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`task` | [ITask](interfaces/itask.md)‹[Promise](interfaces/cancelablepromise.md#promise)‹T›› |
`delay` | number |
`retries` | number |

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹T›*

___

###  sequence

▸ **sequence**<**T**>(`promiseFactories`: [ITask](interfaces/itask.md)‹[Promise](interfaces/cancelablepromise.md#promise)‹T››[]): *[Promise](interfaces/cancelablepromise.md#promise)‹T[]›*

Runs the provided list of promise factories in sequential order. The returned
promise will complete to an array of results from each promise.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promiseFactories` | [ITask](interfaces/itask.md)‹[Promise](interfaces/cancelablepromise.md#promise)‹T››[] |

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹T[]›*

___

###  setGlobalLeakWarningThreshold

▸ **setGlobalLeakWarningThreshold**(`n`: number): *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[IDisposable](interfaces/idisposable.md)*

___

###  timeout

▸ **timeout**(`millis`: number): *[CancelablePromise](interfaces/cancelablepromise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`millis` | number |

**Returns:** *[CancelablePromise](interfaces/cancelablepromise.md)‹void›*

▸ **timeout**(`millis`: number, `token`: [CancellationToken](modules/cancellationtoken.md)): *[Promise](interfaces/cancelablepromise.md#promise)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`millis` | number |
`token` | [CancellationToken](modules/cancellationtoken.md) |

**Returns:** *[Promise](interfaces/cancelablepromise.md#promise)‹void›*

___

###  toDisposable

▸ **toDisposable**(`fn`: function): *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

▪ **fn**: *function*

▸ (): *void*

**Returns:** *[IDisposable](interfaces/idisposable.md)*
