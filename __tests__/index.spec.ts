import sTrimmer from '../src';

describe('sTrimmer', () => {
  it('should remove unneeded spaces', () => {
    const input = 'lorem  ipsum dolor  ';

    const value = sTrimmer(input);

    expect(value).toBe('lorem ipsum dolor');
  });
});
