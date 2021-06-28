# [s-trimmer](https://github.com/JB1905/s-trimmer)

[![NPM version](https://img.shields.io/npm/v/s-trimmer?style=flat-square)](https://www.npmjs.com/package/s-trimmer)
[![NPM downloads](https://img.shields.io/npm/dm/s-trimmer?style=flat-square)](https://www.npmjs.com/package/s-trimmer)
[![NPM license](https://img.shields.io/npm/l/s-trimmer?style=flat-square)](https://www.npmjs.com/package/s-trimmer)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/s-trimmer?style=flat-square)](https://codecov.io/gh/JB1905/s-trimmer)
[![Travis](https://img.shields.io/travis/com/JB1905/s-trimmer/main?style=flat-square)](https://travis-ci.com/JB1905/s-trimmer)
[![Bundle size](https://flat.badgen.net/packagephobia/install/s-trimmer)](https://packagephobia.com/result?p=s-trimmer)

## About

Format spaces from the left and right end of a string and between strings

### Similar Projects

Remove spaces from text:

- [trimStart/trimLeft from String object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
- [trimEnd/trimRight from String object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
- [trim from String object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
- [trim](https://www.npmjs.com/package/trim/) by [tjholowaychuk](https://www.npmjs.com/~tjholowaychuk/)

Remove spaces from class names (one of the many features):

- [classnames](https://github.com/JedWatson/classnames/) by [Jed Watson](https://github.com/JedWatson/)
- [clsx](https://github.com/lukeed/clsx/) by [Luke Edwards](https://github.com/lukeed/)

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
import sTrimmer, {
  trim,
  trimStart,
  trimLeft,
  trimEnd,
  trimRight,
  trimBetween,
  trimCenter,
} from 's-trimmer';
```

**Or CommonJS:**

```js
const sTrimmer = require('s-trimmer').default;
const {
  trim,
  trimStart,
  trimLeft,
  trimEnd,
  trimRight,
  trimBetween,
  trimCenter,
} = require('s-trimmer');
```

Next use library:

**sTrimmer - default export, (alias trim) - named export**

```js
const value = '    lorem  ipsum dolor  ';

sTrimmer(value); // 'lorem ipsum dolor'
trim(value); // 'lorem ipsum dolor'
```

**trimStart (alias trimLeft)**

```js
const value = '    lorem  ipsum dolor  ';

trimStart(value); // 'lorem  ipsum dolor  '
trimLeft(value); // 'lorem  ipsum dolor  '
```

**trimEnd (alias trimRight)**

```js
const value = '    lorem  ipsum dolor  ';

trimEnd(value); // '    lorem  ipsum dolor'
trimRight(value); // '    lorem  ipsum dolor'
```

**trimBetween (alias trimCenter)**

```js
const value = '    lorem  ipsum dolor  ';

trimBetween(value); // '    lorem ipsum dolor  '
trimCenter(value); // '    lorem ipsum dolor  '
```

### Params

| Type   | Description           |
| ------ | --------------------- |
| string | value to be formatted |

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
