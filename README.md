# 🍱 An ESLint plugin to enforce a maximum number of methods per class (max-methods-per-class)

Classes containing a lot of methods:

- might be harder to understand,
- might be harder to maintain,
- might indicate that the [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) has been violated.

This plugin aims to spot large classes and to enforce splitting them up into smaller ones.

## Install

```shell
npm install eslint-plugin-max-methods-per-class --save-dev
```

## Usage

The rule takes one option, a number, which is the maximum number of methods for each class. The default is **6**.

You can set the option in configuration like this:

```json
{
  "plugins": ["max-methods-per-class"],
  "rules": {
    "max-methods-per-class": ["warn", 4]
  }
}
```

## Examples

### Fail

```js
/* eslint max-methods-per-class: ["error", 3] */

class Listing {
  constructor() {}
  componentDidMount() {}
  renderRow() {}
  render() {}
}
```

### Pass

```js
/* eslint max-methods-per-class: ["error", 3] */

class Listing {
  constructor() {}
  componentDidMount() {}
  render() {}
}
```
