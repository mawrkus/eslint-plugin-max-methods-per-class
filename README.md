# Limit the number of methods per class

Limit the number of methods in a class to enforce splitting up large classes into smaller ones.

## Fail

```js
/* eslint max-methods-per-class: ["error", 3] */
class Listing {
  constructor() {}
  componentDidMount() {}
  renderRow() {}
  render() {}
}
```

## Pass

```js
class Listing {
  constructor() {}
  componentDidMount() {}
  render() {}
}
```

## Options

The rule takes one option, a number, which is the maximum number of methods for each class. The default is 5.

You can set the option in configuration like this:

```js
"max-methods-per-class": ["error", 5]
```
