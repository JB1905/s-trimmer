import sTrimmer from '../src';

describe('sTrimmer', () => {
  it.each(['lorem  ipsum dolor  ', '\n\rlorem  ipsum\t dolor  \n'])(
    'should remove unneeded spaces from: %s',
    (input) => {
      const value = sTrimmer(input);

      expect(value).toBe('lorem ipsum dolor');
    }
  );
});
