[ts-primitives](../README.md) › [_URI](_uri.md)

# Class: _URI

## Hierarchy

* [URI](uri.md)

  ↳ **_URI**

## Implements

* [UriComponents](../interfaces/uricomponents.md)

## Index

### Properties

* [_formatted](_uri.md#_formatted)
* [_fsPath](_uri.md#_fspath)
* [authority](_uri.md#authority)
* [fragment](_uri.md#fragment)
* [path](_uri.md#path)
* [query](_uri.md#query)
* [scheme](_uri.md#scheme)

### Accessors

* [fsPath](_uri.md#fspath)

### Methods

* [toJSON](_uri.md#tojson)
* [toString](_uri.md#tostring)
* [with](_uri.md#with)
* [file](_uri.md#static-file)
* [from](_uri.md#static-from)
* [isUri](_uri.md#static-isuri)
* [parse](_uri.md#static-parse)
* [revive](_uri.md#static-revive)

## Properties

###  _formatted

• **_formatted**: *string | null* = null

___

###  _fsPath

• **_fsPath**: *string | null* = null

___

###  authority

• **authority**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[authority](../interfaces/uricomponents.md#authority)*

*Inherited from [URI](uri.md).[authority](uri.md#authority)*

authority is the 'www.msft.com' part of 'http://www.msft.com/some/path?query#fragment'.
The part between the first double slashes and the next slash.

___

###  fragment

• **fragment**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[fragment](../interfaces/uricomponents.md#fragment)*

*Inherited from [URI](uri.md).[fragment](uri.md#fragment)*

fragment is the 'fragment' part of 'http://www.msft.com/some/path?query#fragment'.

___

###  path

• **path**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[path](../interfaces/uricomponents.md#path)*

*Inherited from [URI](uri.md).[path](uri.md#path)*

path is the '/some/path' part of 'http://www.msft.com/some/path?query#fragment'.

___

###  query

• **query**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[query](../interfaces/uricomponents.md#query)*

*Inherited from [URI](uri.md).[query](uri.md#query)*

query is the 'query' part of 'http://www.msft.com/some/path?query#fragment'.

___

###  scheme

• **scheme**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[scheme](../interfaces/uricomponents.md#scheme)*

*Inherited from [URI](uri.md).[scheme](uri.md#scheme)*

scheme is the 'http' part of 'http://www.msft.com/some/path?query#fragment'.
The part before the first colon.

## Accessors

###  fsPath

• **get fsPath**(): *string*

*Overrides [URI](uri.md).[fsPath](uri.md#fspath)*

**Returns:** *string*

## Methods

###  toJSON

▸ **toJSON**(): *[UriComponents](../interfaces/uricomponents.md)*

*Overrides [URI](uri.md).[toJSON](uri.md#tojson)*

**Returns:** *[UriComponents](../interfaces/uricomponents.md)*

___

###  toString

▸ **toString**(`skipEncoding`: boolean): *string*

*Overrides [URI](uri.md).[toString](uri.md#tostring)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`skipEncoding` | boolean | false |

**Returns:** *string*

___

###  with

▸ **with**(`change`: object): *[URI](uri.md)*

*Inherited from [URI](uri.md).[with](uri.md#with)*

**Parameters:**

▪ **change**: *object*

Name | Type |
------ | ------ |
`authority?` | string &#124; null |
`fragment?` | string &#124; null |
`path?` | string &#124; null |
`query?` | string &#124; null |
`scheme?` | string |

**Returns:** *[URI](uri.md)*

___

### `Static` file

▸ **file**(`path`: string): *[URI](uri.md)*

*Inherited from [URI](uri.md).[file](uri.md#static-file)*

Creates a new URI from a file system path, e.g. `c:\my\files`,
`/usr/home`, or `\\server\share\some\path`.

The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
`URI.parse('file://' + path)` because the path might contain characters that are
interpreted (# and ?). See the following sample:
```ts
const good = URI.file('/coding/c#/project1');
good.scheme === 'file';
good.path === '/coding/c#/project1';
good.fragment === '';
const bad = URI.parse('file://' + '/coding/c#/project1');
bad.scheme === 'file';
bad.path === '/coding/c'; // path is now broken
bad.fragment === '/project1';
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | A file system path (see `URI#fsPath`)  |

**Returns:** *[URI](uri.md)*

___

### `Static` from

▸ **from**(`components`: object): *[URI](uri.md)*

*Inherited from [URI](uri.md).[from](uri.md#static-from)*

**Parameters:**

▪ **components**: *object*

Name | Type |
------ | ------ |
`authority?` | string |
`fragment?` | string |
`path?` | string |
`query?` | string |
`scheme` | string |

**Returns:** *[URI](uri.md)*

___

### `Static` isUri

▸ **isUri**(`thing`: any): *thing is URI*

*Inherited from [URI](uri.md).[isUri](uri.md#static-isuri)*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | any |

**Returns:** *thing is URI*

___

### `Static` parse

▸ **parse**(`value`: string, `_strict`: boolean): *[URI](uri.md)*

*Inherited from [URI](uri.md).[parse](uri.md#static-parse)*

Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
`file:///usr/home`, or `scheme:with/path`.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | string | - | A string which represents an URI (see `URI#toString`).  |
`_strict` | boolean | false | - |

**Returns:** *[URI](uri.md)*

___

### `Static` revive

▸ **revive**(`data`: [UriComponents](../interfaces/uricomponents.md) | [URI](uri.md)): *[URI](uri.md)*

*Inherited from [URI](uri.md).[revive](uri.md#static-revive)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) |

**Returns:** *[URI](uri.md)*

▸ **revive**(`data`: [UriComponents](../interfaces/uricomponents.md) | [URI](uri.md) | undefined): *[URI](uri.md) | undefined*

*Inherited from [URI](uri.md).[revive](uri.md#static-revive)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) &#124; undefined |

**Returns:** *[URI](uri.md) | undefined*

▸ **revive**(`data`: [UriComponents](../interfaces/uricomponents.md) | [URI](uri.md) | null): *[URI](uri.md) | null*

*Inherited from [URI](uri.md).[revive](uri.md#static-revive)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) &#124; null |

**Returns:** *[URI](uri.md) | null*

▸ **revive**(`data`: [UriComponents](../interfaces/uricomponents.md) | [URI](uri.md) | undefined | null): *[URI](uri.md) | undefined | null*

*Inherited from [URI](uri.md).[revive](uri.md#static-revive)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) &#124; undefined &#124; null |

**Returns:** *[URI](uri.md) | undefined | null*
