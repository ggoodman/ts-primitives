[ts-primitives](../README.md) › [LeakageMonitor](leakagemonitor.md)

# Class: LeakageMonitor

## Hierarchy

* **LeakageMonitor**

## Index

### Constructors

* [constructor](leakagemonitor.md#constructor)

### Properties

* [customThreshold](leakagemonitor.md#optional-customthreshold)
* [name](leakagemonitor.md#name)

### Methods

* [check](leakagemonitor.md#check)
* [dispose](leakagemonitor.md#dispose)

## Constructors

###  constructor

\+ **new LeakageMonitor**(`customThreshold?`: number, `name`: string): *[LeakageMonitor](leakagemonitor.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`customThreshold?` | number | - |
`name` | string | Math.random().toString(18).slice(2, 5) |

**Returns:** *[LeakageMonitor](leakagemonitor.md)*

## Properties

### `Optional` customThreshold

• **customThreshold**? : *number*

___

###  name

• **name**: *string*

## Methods

###  check

▸ **check**(`listenerCount`: number): *undefined | function*

**Parameters:**

Name | Type |
------ | ------ |
`listenerCount` | number |

**Returns:** *undefined | function*

___

###  dispose

▸ **dispose**(): *void*

**Returns:** *void*
