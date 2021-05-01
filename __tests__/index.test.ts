import sTrimmer, { trim, trimStart, trimEnd, trimCenter } from '../src';

describe('sTrimmer', () => {
  it.each(['lorem  ipsum dolor  ', '\n\rlorem  ipsum\t dolor  \n'])(
    'should remove unneeded spaces from: %s',
    (input) => {
      const value = sTrimmer(input);
      const aliasValue = trim(input)

      const expected = 'lorem ipsum dolor'

      expect(value).toBe(expected);
      expect(aliasValue).toBe(expected);
    }
  );
});

describe('trimStart/trimLeft', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem  ipsum dolor  '],
    ['\n\rlorem  ipsum\t dolor  \n', 'lorem  ipsum\t dolor  \n'],
  ])('should remove unneeded spaces from: %s', (input, x) => {
    const value = trimStart(input);

    expect(value).toBe(x);
  });
});

describe('trimEnd/trimRight', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem  ipsum dolor'],
    ['\n\rlorem  ipsum\t dolor  \n', '\n\rlorem  ipsum\t dolor'],
  ])('should remove unneeded spaces from: %s', (input, x) => {
    const value = trimEnd(input);

    expect(value).toBe(x);
  });
});

describe('trimBetween/trimCenter', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem ipsum dolor  '],
    ['\n\rlorem  ipsum\t dolor  \n', '\n\rlorem ipsum dolor  \n'],
  ])('should remove unneeded spaces from: %s', (input, x) => {
    const value = trimCenter(input);

    expect(value).toBe(x);
  });
});
