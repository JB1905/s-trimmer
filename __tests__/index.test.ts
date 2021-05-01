import sTrimmer, {
  trimStart,
  trimLeft,
  trimEnd,
  trimRight,
  trimBetween,
  trimCenter,
} from '../src';

describe('sTrimmer', () => {
  it.each(['lorem  ipsum dolor  ', '\n\rlorem  ipsum\t dolor  \n'])(
    'should remove unneeded spaces from: %s',
    (input) => {
      const value = sTrimmer(input);

      expect(value).toBe('lorem ipsum dolor');
    }
  );
});

describe('trimStart/trimLeft', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem  ipsum dolor  '],
    ['\n\rlorem  ipsum\t dolor  \n', 'lorem  ipsum\t dolor  \n'],
  ])('should remove unneeded spaces from: %s', (input, expected) => {
    const value = trimStart(input);
    const aliasValue = trimLeft(input);

    expect(value).toBe(expected);
    expect(aliasValue).toBe(expected);
  });
});

describe('trimEnd/trimRight', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem  ipsum dolor'],
    ['\n\rlorem  ipsum\t dolor  \n', '\n\rlorem  ipsum\t dolor'],
  ])('should remove unneeded spaces from: %s', (input, expected) => {
    const value = trimEnd(input);
    const aliasValue = trimRight(input);

    expect(value).toBe(expected);
    expect(aliasValue).toBe(expected);
  });
});

describe('trimBetween/trimCenter', () => {
  it.each([
    ['lorem  ipsum dolor  ', 'lorem ipsum dolor  '],
    ['\n\rlorem  ipsum\t dolor  \n', '\n\rlorem ipsum dolor  \n'],
  ])('should remove unneeded spaces from: %s', (input, expected) => {
    const value = trimBetween(input);
    const aliasValue = trimCenter(value);

    expect(value).toBe(expected);
    expect(aliasValue).toBe(expected);
  });
});
