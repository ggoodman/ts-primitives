[ts-primitives](../README.md) › [URI](uri.md)

# Class: URI

Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
This class is a simple parser which creates the basic component parts
(http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
and encoding.

      foo://example.com:8042/over/there?name=ferret#nose
      \_/   \______________/\_________/ \_________/ \__/
       |           |            |            |        |
    scheme     authority       path        query   fragment
       |   _____________________|__
      / \ /                        \
      urn:example:animal:ferret:nose

## Hierarchy

* **URI**

  ↳ [_URI](_uri.md)

## Implements

* [UriComponents](../interfaces/uricomponents.md)

## Index

### Properties

* [authority](uri.md#authority)
* [fragment](uri.md#fragment)
* [path](uri.md#path)
* [query](uri.md#query)
* [scheme](uri.md#scheme)

### Accessors

* [fsPath](uri.md#fspath)

### Methods

* [toJSON](uri.md#tojson)
* [toString](uri.md#tostring)
* [with](uri.md#with)
* [file](uri.md#static-file)
* [from](uri.md#static-from)
* [isUri](uri.md#static-isuri)
* [parse](uri.md#static-parse)
* [revive](uri.md#static-revive)

## Properties

###  authority

• **authority**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[authority](../interfaces/uricomponents.md#authority)*

authority is the 'www.msft.com' part of 'http://www.msft.com/some/path?query#fragment'.
The part between the first double slashes and the next slash.

___

###  fragment

• **fragment**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[fragment](../interfaces/uricomponents.md#fragment)*

fragment is the 'fragment' part of 'http://www.msft.com/some/path?query#fragment'.

___

###  path

• **path**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[path](../interfaces/uricomponents.md#path)*

path is the '/some/path' part of 'http://www.msft.com/some/path?query#fragment'.

___

###  query

• **query**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[query](../interfaces/uricomponents.md#query)*

query is the 'query' part of 'http://www.msft.com/some/path?query#fragment'.

___

###  scheme

• **scheme**: *string*

*Implementation of [UriComponents](../interfaces/uricomponents.md).[scheme](../interfaces/uricomponents.md#scheme)*

scheme is the 'http' part of 'http://www.msft.com/some/path?query#fragment'.
The part before the first colon.

## Accessors

###  fsPath

• **get fsPath**(): *string*

Returns a string representing the corresponding file system path of this URI.
Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
platform specific path separator.

* Will *not* validate the path for invalid characters and semantics.
* Will *not* look at the scheme of this URI.
* The result shall *not* be used for display purposes but for accessing a file on disk.

The *difference* to `URI#path` is the use of the platform specific separator and the handling
of UNC paths. See the below sample of a file-uri with an authority (UNC path).

```ts
const u = URI.parse('file://server/c$/folder/file.txt')
u.authority === 'server'
u.path === '/shares/c$/file.txt'
u.fsPath === '\\server\c$\folder\file.txt'
```

Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
with URIs that represent files on disk (`file` scheme).

**Returns:** *string*

## Methods

###  toJSON

▸ **toJSON**(): *[UriComponents](../interfaces/uricomponents.md)*

**Returns:** *[UriComponents](../interfaces/uricomponents.md)*

___

###  toString

▸ **toString**(`skipEncoding`: boolean): *string*

Creates a string representation for this URI. It's guaranteed that calling
`URI.parse` with the result of this function creates an URI which is equal
to this URI.

* The result shall *not* be used for display purposes but for externalization or transport.
* The result will be encoded using the percentage encoding and encoding happens mostly
ignore the scheme-specific encoding rules.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`skipEncoding` | boolean | false | Do not encode the result, default is `false`  |

**Returns:** *string*

___

###  with

▸ **with**(`change`: object): *[URI](uri.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`thing` | any |

**Returns:** *thing is URI*

___

### `Static` parse

▸ **parse**(`value`: string, `_strict`: boolean): *[URI](uri.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) |

**Returns:** *[URI](uri.md)*

▸ **revive**(`data`: [UriComponents](../interfaces/uricomponents.md) | [URI](uri.md) | undefined): *[URI](uri.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) &#124; undefined |

**Returns:** *[URI](uri.md) | undefined*

▸ **revive**(`data`: [UriComponents](../interfaces/uricomponents.md) | [URI](uri.md) | null): *[URI](uri.md) | null*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) &#124; null |

**Returns:** *[URI](uri.md) | null*

▸ **revive**(`data`: [UriComponents](../interfaces/uricomponents.md) | [URI](uri.md) | undefined | null): *[URI](uri.md) | undefined | null*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UriComponents](../interfaces/uricomponents.md) &#124; [URI](uri.md) &#124; undefined &#124; null |

**Returns:** *[URI](uri.md) | undefined | null*
