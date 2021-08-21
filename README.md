# 🍱 An ESLint plugin to detect when a class has too many methods

Limit the number of methods in a class to enforce splitting up large classes into smaller ones.

## Install

```shell
npm install eslint-plugin-max-methods-per-class --save-dev
```

or with yarn:

```shell
yarn add eslint-plugin-max-methods-per-class --dev
```

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
/* eslint max-methods-per-class: ["error", 3] */

class Listing {
  constructor() {}
  componentDidMount() {}
  render() {}
}
```

## Options

The rule takes one option, a number, which is the maximum number of methods for each class. The default is **7 - 2 = 5**.

You can set the option in configuration like this:

```js
"max-methods-per-class": ["warn", 9]
```
