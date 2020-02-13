[ts-primitives](../README.md) › [CancelablePromise](cancelablepromise.md)

# Interface: CancelablePromise <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Promise](cancelablepromise.md#promise)‹T›

  ↳ **CancelablePromise**

## Index

### Properties

* [Promise](cancelablepromise.md#promise)
* [[Symbol.toStringTag]](cancelablepromise.md#[symbol.tostringtag])

### Methods

* [cancel](cancelablepromise.md#cancel)
* [catch](cancelablepromise.md#catch)
* [finally](cancelablepromise.md#finally)
* [then](cancelablepromise.md#then)

## Properties

###  Promise

• **Promise**: *PromiseConstructor*

___

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [CancelablePromise](cancelablepromise.md).[[Symbol.toStringTag]](cancelablepromise.md#[symbol.tostringtag])*

## Methods

###  cancel

▸ **cancel**(): *void*

**Returns:** *void*

___

###  catch

▸ **catch**<**TResult**>(`onrejected?`: function | undefined | null): *[Promise](cancelablepromise.md#promise)‹T | TResult›*

*Inherited from [CancelablePromise](cancelablepromise.md).[catch](cancelablepromise.md#catch)*

Attaches a callback for only the rejection of the Promise.

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onrejected?` | function &#124; undefined &#124; null | The callback to execute when the Promise is rejected. |

**Returns:** *[Promise](cancelablepromise.md#promise)‹T | TResult›*

A Promise for the completion of the callback.

___

###  finally

▸ **finally**(`onfinally?`: function | undefined | null): *[Promise](cancelablepromise.md#promise)‹T›*

*Inherited from [CancelablePromise](cancelablepromise.md).[finally](cancelablepromise.md#finally)*

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onfinally?` | function &#124; undefined &#124; null | The callback to execute when the Promise is settled (fulfilled or rejected). |

**Returns:** *[Promise](cancelablepromise.md#promise)‹T›*

A Promise for the completion of the callback.

___

###  then

▸ **then**<**TResult1**, **TResult2**>(`onfulfilled?`: function | undefined | null, `onrejected?`: function | undefined | null): *[Promise](cancelablepromise.md#promise)‹TResult1 | TResult2›*

*Inherited from [CancelablePromise](cancelablepromise.md).[then](cancelablepromise.md#then)*

Attaches callbacks for the resolution and/or rejection of the Promise.

**Type parameters:**

▪ **TResult1**

▪ **TResult2**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onfulfilled?` | function &#124; undefined &#124; null | The callback to execute when the Promise is resolved. |
`onrejected?` | function &#124; undefined &#124; null | The callback to execute when the Promise is rejected. |

**Returns:** *[Promise](cancelablepromise.md#promise)‹TResult1 | TResult2›*

A Promise for the completion of which ever callback is executed.
