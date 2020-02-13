[ts-primitives](../README.md) › [IdleValue](idlevalue.md)

# Class: IdleValue <**T**>

An implementation of the "idle-until-urgent"-strategy as introduced
here: https://philipwalton.com/articles/idle-until-urgent/

## Type parameters

▪ **T**

## Hierarchy

* **IdleValue**

## Index

### Constructors

* [constructor](idlevalue.md#constructor)

### Methods

* [dispose](idlevalue.md#dispose)
* [getValue](idlevalue.md#getvalue)

## Constructors

###  constructor

\+ **new IdleValue**(`executor`: function): *[IdleValue](idlevalue.md)*

**Parameters:**

▪ **executor**: *function*

▸ (): *T*

**Returns:** *[IdleValue](idlevalue.md)*

## Methods

###  dispose

▸ **dispose**(): *void*

**Returns:** *void*

___

###  getValue

▸ **getValue**(): *T*

**Returns:** *T*
