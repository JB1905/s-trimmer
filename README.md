# [s-trimmer](https://github.com/jb1905/s-trimmer)

[![NPM version](http://img.shields.io/npm/v/s-trimmer?style=flat-square)](https://www.npmjs.com/package/s-trimmer)
[![NPM downloads](http://img.shields.io/npm/dm/s-trimmer?style=flat-square)](https://www.npmjs.com/package/s-trimmer)
[![NPM license](https://img.shields.io/npm/l/s-trimmer?style=flat-square)](https://www.npmjs.com/package/s-trimmer)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/s-trimmer?style=flat-square)](https://codecov.io/gh/JB1905/s-trimmer)
[![Travis](https://img.shields.io/travis/JB1905/s-trimmer?style=flat-square)](https://travis-ci.org/JB1905/s-trimmer)
[![Bundle size](https://img.shields.io/bundlephobia/min/s-trimmer?style=flat-square)](https://bundlephobia.com/result?p=s-trimmer)

## About

Format spaces from the left and right end of a string and between strings

## How to Install

First, install the library in your project by npm:

```sh
$ npm install s-trimmer
```

Or Yarn:

```sh
$ yarn add s-trimmer
```

## Getting Started

**Connect libary to project using ES6 import:**

```js
import sTrimmer from 's-trimmer';
```

**Or CommonJS:**

```js
const sTrimmer = require('s-trimmer');
```

Next use library:

```js
const value = 'lorem  ipsum dolor  ';

const formattedValue = sTrimmer(value); // 'lorem ipsum dolor'
```

### Params

| Type   | Description           |
| ------ | --------------------- |
| string | value to be formatted |

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
