[ts-primitives](../README.md) › [ErrorHandler](errorhandler.md)

# Class: ErrorHandler

## Hierarchy

* **ErrorHandler**

## Index

### Constructors

* [constructor](errorhandler.md#constructor)

### Methods

* [addListener](errorhandler.md#addlistener)
* [getUnexpectedErrorHandler](errorhandler.md#getunexpectederrorhandler)
* [onUnexpectedError](errorhandler.md#onunexpectederror)
* [onUnexpectedExternalError](errorhandler.md#onunexpectedexternalerror)
* [setUnexpectedErrorHandler](errorhandler.md#setunexpectederrorhandler)

## Constructors

###  constructor

\+ **new ErrorHandler**(): *[ErrorHandler](errorhandler.md)*

**Returns:** *[ErrorHandler](errorhandler.md)*

## Methods

###  addListener

▸ **addListener**(`listener`: [ErrorListenerCallback](../interfaces/errorlistenercallback.md)): *[ErrorListenerUnbind](../interfaces/errorlistenerunbind.md)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [ErrorListenerCallback](../interfaces/errorlistenercallback.md) |

**Returns:** *[ErrorListenerUnbind](../interfaces/errorlistenerunbind.md)*

___

###  getUnexpectedErrorHandler

▸ **getUnexpectedErrorHandler**(): *function*

**Returns:** *function*

▸ (`e`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

___

###  onUnexpectedError

▸ **onUnexpectedError**(`e`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *void*

___

###  onUnexpectedExternalError

▸ **onUnexpectedExternalError**(`e`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *void*

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
