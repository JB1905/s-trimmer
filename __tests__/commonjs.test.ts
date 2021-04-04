const sTrimmer = require('../lib/s-trimmer.cjs');

describe('sTrimmer', () => {
  it.each(['lorem  ipsum dolor  ', '\n\rlorem  ipsum\t dolor  \n'])(
    'should remove unneeded spaces from: %s',
    (input) => {
      const value = sTrimmer(input);

      expect(value).toBe('lorem ipsum dolor');
    }
  );
});
