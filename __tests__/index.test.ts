import sTrimmer, {
  trim,
  trimStart,
  trimLeft,
  trimEnd,
  trimRight,
  trimBetween,
  trimCenter,
} from '../src';

// describe.each([
//   {
//     input: 'lorem  ipsum dolor  ',
//     trim: 'lorem ipsum dolor',
//     start: 'lorem  ipsum dolor  ',
//     end: '',
//     center: '',
//   }
//   ['lorem  ipsum dolor  ', 'lorem ipsum dolor'],
//   ['\n\rSed  tristique\t in libero  \n', 'Sed tristique in libero'],
//   [
//     ' Vivamus in     cursus enim,  nec  accumsan lectus.         ',
//     'Vivamus in cursus enim, nec accumsan lectus.',
//   ],
// ])

// const testCases = [
//   ['lorem  ipsum dolor  ', 'lorem ipsum dolor'],
//   ['\n\rSed  tristique\t in libero  \n', 'Sed tristique in libero'],
//   [
//     ' Vivamus in     cursus enim,  nec  accumsan lectus.         ',
//     'Vivamus in cursus enim, nec accumsan lectus.',
//   ],
// ];

describe('sTrimmer/trim', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem ipsum dolor'],
    ['\n\rSed  tristique\t in libero  \n', 'Sed tristique in libero'],
    [
      ' Vivamus in     cursus enim,  nec  accumsan lectus.         ',
      'Vivamus in cursus enim, nec accumsan lectus.',
    ],
  ])('should remove unneeded spaces from: %s', (input, expected) => {
    const value = sTrimmer(input);
    const aliasValue = trim(input);

    expect(value).toBe(expected);
    expect(aliasValue).toBe(expected);
  });
});

describe('trimStart/trimLeft', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem  ipsum dolor  '],
    ['\n\rSed  tristique\t in libero  \n', 'Sed  tristique\t in libero  \n'],
    [
      ' Vivamus in     cursus enim,  nec  accumsan lectus.         ',
      'Vivamus in     cursus enim,  nec  accumsan lectus.         ',
    ],
  ])('should remove unneeded spaces from start of: %s', (input, expected) => {
    const value = trimStart(input);
    const aliasValue = trimLeft(input);

    expect(value).toBe(expected);
    expect(aliasValue).toBe(expected);
  });
});

describe('trimEnd/trimRight', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem  ipsum dolor'],
    ['\n\rSed  tristique\t in libero  \n', '\n\rSed  tristique\t in libero'],
    [
      ' Vivamus in     cursus enim,  nec  accumsan lectus.         ',
      ' Vivamus in     cursus enim,  nec  accumsan lectus.',
    ],
  ])('should remove unneeded spaces from end of: %s', (input, expected) => {
    const value = trimEnd(input);
    const aliasValue = trimRight(input);

    expect(value).toBe(expected);
    expect(aliasValue).toBe(expected);
  });
});

describe('trimBetween/trimCenter', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem ipsum dolor  '],
    ['\n\rSed  tristique\t in libero  \n', '\n\rSed tristique in libero  \n'],
    [
      ' Vivamus in     cursus enim,  nec  accumsan lectus.         ',
      ' Vivamus in cursus enim, nec accumsan lectus.         ',
    ],
  ])('should remove unneeded spaces from center of: %s', (input, expected) => {
    const value = trimBetween(input);
    const aliasValue = trimCenter(value);

    expect(value).toBe(expected);
    expect(aliasValue).toBe(expected);
  });
});
