# [s-trimmer](https://github.com/JB1905/s-trimmer)

[![NPM version](https://flat.badgen.net/npm/v/s-trimmer)](https://www.npmjs.com/package/s-trimmer)
[![NPM downloads](https://flat.badgen.net/npm/dm/s-trimmer)](https://www.npmjs.com/package/s-trimmer)
[![NPM license](https://flat.badgen.net/npm/license/s-trimmer)](https://www.npmjs.com/package/s-trimmer)
[![Codecov](https://flat.badgen.net/codecov/c/github/JB1905/s-trimmer)](https://codecov.io/gh/JB1905/s-trimmer)
[![Travis](https://flat.badgen.net/travis/JB1905/s-trimmer)](https://app.travis-ci.com/github/JB1905/s-trimmer)
<!-- [![Travis](https://img.shields.io/travis/com/JB1905/s-trimmer/main?style=flat-square)](https://app.travis-ci.com/github/JB1905/s-trimmer) -->
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

**Connect the library to the project with ES6 import:**

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
| string | Value to be formatted |

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
