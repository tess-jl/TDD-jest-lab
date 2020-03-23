# TDD Jest Lab 

### JavaScript, Jest

___

#### Assignment: use Jest testing suite to code casting functionality of MongoDB (essentially deriving how MongoDB handles casting data types) 

**USE TDD Practices**

### is* functions

* `isNumber`
* `isString`
* `isBoolean`
* `isArray`
* `isObject`
* `isFunction`

### castTo*

* `castToNumber`
* `castToString`
* `castToBoolean`

### getCaster

```js
getCaster(String) // return castToString
```

* add your casters to `getCaster`

### Testing

* `is*`
    * Test that each function returns true for valid input
    * Test that each function returns false for invalid input
* `castTo*`
    * Test that each function returns a correctly formated value from valid input
    * Test that each function throws an error from invalid input

### Developer Implementation

Write a validation module that exports an object with functions. There are
two kinds of functions you'll need to implement:

1. Check if a value is of a specified type `is*` function:
    `isNumber`, `isString`, etc.
2. Cast a value to a specified type `castTo*` function:
    `castToNumber`, `castToString`, etc.
