[ts-primitives](../README.md) › [Thenable](thenable.md)

# Interface: Thenable <**T**>

Thenable is a common denominator between ES6 promises, Q, jquery.Deferred, WinJS.Promise,
and others. This API makes no assumption about what promise libary is being used which
enables reusing existing code without migrating to a specific promise implementation. Still,
we recommend the use of native promises which are available in VS Code.

## Type parameters

▪ **T**

## Hierarchy

* **Thenable**

## Index

### Methods

* [then](thenable.md#then)

## Methods

###  then

▸ **then**<**TResult**>(`onfulfilled?`: function, `onrejected?`: function): *[Thenable](thenable.md)‹TResult›*

Attaches callbacks for the resolution and/or rejection of the Promise.

**Type parameters:**

▪ **TResult**

**Parameters:**

▪`Optional`  **onfulfilled**: *function*

The callback to execute when the Promise is resolved.

▸ (`value`: T): *TResult | [Thenable](thenable.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Optional`  **onrejected**: *function*

The callback to execute when the Promise is rejected.

▸ (`reason`: any): *TResult | [Thenable](thenable.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *[Thenable](thenable.md)‹TResult›*

A Promise for the completion of which ever callback is executed.

▸ **then**<**TResult**>(`onfulfilled?`: function, `onrejected?`: function): *[Thenable](thenable.md)‹TResult›*

**Type parameters:**

▪ **TResult**

**Parameters:**

▪`Optional`  **onfulfilled**: *function*

▸ (`value`: T): *TResult | [Thenable](thenable.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Optional`  **onrejected**: *function*

▸ (`reason`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *[Thenable](thenable.md)‹TResult›*
