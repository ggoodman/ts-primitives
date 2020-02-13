[ts-primitives](README.md)

# ts-primitives

## Index

### Modules

* [CancellationToken](modules/cancellationtoken.md)
* [Event](modules/event.md)
* [Iterator](modules/iterator.md)

### Classes

* [ArrayIterator](classes/arrayiterator.md)
* [ArrayNavigator](classes/arraynavigator.md)
* [AsyncEmitter](classes/asyncemitter.md)
* [CancellationTokenSource](classes/cancellationtokensource.md)
* [ChainableIterator](classes/chainableiterator.md)
* [Disposable](classes/disposable.md)
* [DisposableStore](classes/disposablestore.md)
* [Emitter](classes/emitter.md)
* [ErrorHandler](classes/errorhandler.md)
* [EventBufferer](classes/eventbufferer.md)
* [EventMultiplexer](classes/eventmultiplexer.md)
* [ImmortalReference](classes/immortalreference.md)
* [LeakageMonitor](classes/leakagemonitor.md)
* [LinkedList](classes/linkedlist.md)
* [MappedIterator](classes/mappediterator.md)
* [MappedNavigator](classes/mappednavigator.md)
* [MutableDisposable](classes/mutabledisposable.md)
* [MutableToken](classes/mutabletoken.md)
* [Node](classes/node.md)
* [NotImplementedError](classes/notimplementederror.md)
* [PauseableEmitter](classes/pauseableemitter.md)
* [ReferenceCollection](classes/referencecollection.md)
* [Relay](classes/relay.md)

### Interfaces

* [EmitterOptions](interfaces/emitteroptions.md)
* [ErrorListenerCallback](interfaces/errorlistenercallback.md)
* [ErrorListenerUnbind](interfaces/errorlistenerunbind.md)
* [IDisposable](interfaces/idisposable.md)
* [INavigator](interfaces/inavigator.md)
* [INextIterator](interfaces/inextiterator.md)
* [IReference](interfaces/ireference.md)
* [IWaitUntil](interfaces/iwaituntil.md)
* [IteratorDefinedResult](interfaces/iteratordefinedresult.md)
* [IteratorUndefinedResult](interfaces/iteratorundefinedresult.md)
* [NativeIterator](interfaces/nativeiterator.md)
* [NativeIteratorReturnResult](interfaces/nativeiteratorreturnresult.md)
* [NativeIteratorYieldResult](interfaces/nativeiteratoryieldresult.md)
* [SerializedError](interfaces/serializederror.md)
* [V8CallSite](interfaces/v8callsite.md)

### Type aliases

* [ISequence](README.md#isequence)
* [IteratorResult](README.md#iteratorresult)
* [Listener](README.md#listener)
* [NativeIteratorResult](README.md#nativeiteratorresult)

### Variables

* [TRACK_DISPOSABLES](README.md#const-track_disposables)
* [__is_disposable_tracked__](README.md#const-__is_disposable_tracked__)
* [_globalLeakWarningThreshold](README.md#let-_globalleakwarningthreshold)
* [canceledName](README.md#const-canceledname)
* [errorHandler](README.md#const-errorhandler)
* [shortcutEvent](README.md#const-shortcutevent)

### Functions

* [canceled](README.md#canceled)
* [combinedDisposable](README.md#combineddisposable)
* [dispose](README.md#dispose)
* [disposed](README.md#disposed)
* [getErrorMessage](README.md#geterrormessage)
* [getSequenceIterator](README.md#getsequenceiterator)
* [illegalArgument](README.md#illegalargument)
* [illegalState](README.md#illegalstate)
* [isDisposable](README.md#isdisposable)
* [isPromiseCanceledError](README.md#ispromisecancelederror)
* [markTracked](README.md#marktracked)
* [onUnexpectedError](README.md#onunexpectederror)
* [onUnexpectedExternalError](README.md#onunexpectedexternalerror)
* [once](README.md#once)
* [readonly](README.md#readonly)
* [setGlobalLeakWarningThreshold](README.md#setgloballeakwarningthreshold)
* [setUnexpectedErrorHandler](README.md#setunexpectederrorhandler)
* [toDisposable](README.md#todisposable)
* [trackDisposable](README.md#trackdisposable)
* [transformErrorForSerialization](README.md#transformerrorforserialization)

### Object literals

* [FIN](README.md#const-fin)

## Type aliases

###  ISequence

Ƭ **ISequence**: *[Iterator](modules/iterator.md)‹T› | T[]*

___

###  IteratorResult

Ƭ **IteratorResult**: *[IteratorDefinedResult](interfaces/iteratordefinedresult.md)‹T› | [IteratorUndefinedResult](interfaces/iteratorundefinedresult.md)*

___

###  Listener

Ƭ **Listener**: *[function, any] | function*

___

###  NativeIteratorResult

Ƭ **NativeIteratorResult**: *[NativeIteratorYieldResult](interfaces/nativeiteratoryieldresult.md)‹T› | [NativeIteratorReturnResult](interfaces/nativeiteratorreturnresult.md)‹TReturn›*

## Variables

### `Const` TRACK_DISPOSABLES

• **TRACK_DISPOSABLES**: *false* = false

Enables logging of potentially leaked disposables.

A disposable is considered leaked if it is not disposed or not registered as the child of
another disposable. This tracking is very simple an only works for classes that either
extend Disposable or use a DisposableStore. This means there are a lot of false positives.

___

### `Const` __is_disposable_tracked__

• **__is_disposable_tracked__**: *"__is_disposable_tracked__"* = "__is_disposable_tracked__"

___

### `Let` _globalLeakWarningThreshold

• **_globalLeakWarningThreshold**: *number* = -1

___

### `Const` canceledName

• **canceledName**: *"Canceled"* = "Canceled"

___

### `Const` errorHandler

• **errorHandler**: *[ErrorHandler](classes/errorhandler.md)‹›* = new ErrorHandler()

___

### `Const` shortcutEvent

• **shortcutEvent**: *[Event](modules/event.md)‹any›* = Object.freeze(function (callback, context?): IDisposable {
	const handle = setTimeout(callback.bind(context), 0);
	return { dispose() { clearTimeout(handle); } };
})

## Functions

###  canceled

▸ **canceled**(): *[Error](classes/notimplementederror.md#static-error)*

Returns an error that signals cancellation.

**Returns:** *[Error](classes/notimplementederror.md#static-error)*

___

###  combinedDisposable

▸ **combinedDisposable**(...`disposables`: [IDisposable](interfaces/idisposable.md)[]): *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`...disposables` | [IDisposable](interfaces/idisposable.md)[] |

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

###  disposed

▸ **disposed**(`what`: string): *[Error](classes/notimplementederror.md#static-error)*

**Parameters:**

Name | Type |
------ | ------ |
`what` | string |

**Returns:** *[Error](classes/notimplementederror.md#static-error)*

___

###  getErrorMessage

▸ **getErrorMessage**(`err`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *string*

___

###  getSequenceIterator

▸ **getSequenceIterator**<**T**>(`arg`: [ISequence](README.md#isequence)‹T› | undefined): *[Iterator](modules/iterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [ISequence](README.md#isequence)‹T› &#124; undefined |

**Returns:** *[Iterator](modules/iterator.md)‹T›*

___

###  illegalArgument

▸ **illegalArgument**(`name?`: string): *[Error](classes/notimplementederror.md#static-error)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | string |

**Returns:** *[Error](classes/notimplementederror.md#static-error)*

___

###  illegalState

▸ **illegalState**(`name?`: string): *[Error](classes/notimplementederror.md#static-error)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | string |

**Returns:** *[Error](classes/notimplementederror.md#static-error)*

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

###  isPromiseCanceledError

▸ **isPromiseCanceledError**(`error`: any): *boolean*

Checks if the given error is a promise in canceled state

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *boolean*

___

###  markTracked

▸ **markTracked**<**T**>(`x`: T): *void*

**Type parameters:**

▪ **T**: *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | T |

**Returns:** *void*

___

###  onUnexpectedError

▸ **onUnexpectedError**(`e`: any): *undefined*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *undefined*

___

###  onUnexpectedExternalError

▸ **onUnexpectedExternalError**(`e`: any): *undefined*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *undefined*

___

###  once

▸ **once**<**T**>(`this`: any, `fn`: T): *T*

**Type parameters:**

▪ **T**: *Function*

**Parameters:**

Name | Type |
------ | ------ |
`this` | any |
`fn` | T |

**Returns:** *T*

___

###  readonly

▸ **readonly**(`name?`: string): *[Error](classes/notimplementederror.md#static-error)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | string |

**Returns:** *[Error](classes/notimplementederror.md#static-error)*

___

###  setGlobalLeakWarningThreshold

▸ **setGlobalLeakWarningThreshold**(`n`: number): *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[IDisposable](interfaces/idisposable.md)*

___

###  setUnexpectedErrorHandler

▸ **setUnexpectedErrorHandler**(`newUnexpectedErrorHandler`: function): *void*

**Parameters:**

▪ **newUnexpectedErrorHandler**: *function*

▸ (`e`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *void*

___

###  toDisposable

▸ **toDisposable**(`fn`: function): *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

▪ **fn**: *function*

▸ (): *void*

**Returns:** *[IDisposable](interfaces/idisposable.md)*

___

###  trackDisposable

▸ **trackDisposable**<**T**>(`x`: T): *T*

**Type parameters:**

▪ **T**: *[IDisposable](interfaces/idisposable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | T |

**Returns:** *T*

___

###  transformErrorForSerialization

▸ **transformErrorForSerialization**(`error`: [Error](classes/notimplementederror.md#static-error)): *[SerializedError](interfaces/serializederror.md)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](classes/notimplementederror.md#static-error) |

**Returns:** *[SerializedError](interfaces/serializederror.md)*

▸ **transformErrorForSerialization**(`error`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *any*

## Object literals

### `Const` FIN

### ▪ **FIN**: *object*

###  done

• **done**: *true* = true

###  value

• **value**: *undefined* = undefined
