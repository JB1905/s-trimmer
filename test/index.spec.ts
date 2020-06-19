import xTrim from '../src';

describe('xTrim', () => {
  it('should format spaces', () => {
    const input = 'lorem  ipsum dolor  ';

    const value = xTrim(input);

    expect(value).toBe('lorem ipsum dolor');
  });
});
