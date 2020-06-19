# x-trim

[![NPM version](http://img.shields.io/npm/v/x-trim.svg?style=flat-square)](https://www.npmjs.com/package/x-trim)
[![NPM downloads](http://img.shields.io/npm/dm/x-trim.svg?style=flat-square)](https://www.npmjs.com/package/x-trim)

## About

Format spaces from the left and right end of a string and between strings

## How to Install

First, install the library in your project by npm:

```sh
$ npm install x-trim
```

Or Yarn:

```sh
$ yarn add x-trim
```

## Getting Started

**Connect libary to project using ES6 import:**

```js
import xTrim from 'x-trim';
```

**Or CommonJS:**

```js
const xTrim = require('x-trim');
```

Next use library:

```js
const value = 'lorem  ipsum dolor  ';

const formattedValue = xTrim(value); // 'lorem ipsum dolor'
```

### Params

| Type   | Description           |
| ------ | --------------------- |
| string | value to be formatted |

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
