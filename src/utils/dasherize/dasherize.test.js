import dasherize from './';

describe('dasherize', () => {
  test('converts from PascalCase to dasherized', () => {
    expect(dasherize('PascalCase')).toBe('pascal-case');
  });

  test('converts from camelCase to dasherized', () => {
    expect(dasherize('camelCase')).toBe('camel-case');
  });

  test('converts spaced words to dasherized', () => {
    expect(dasherize('Spaced words converted')).toBe('spaced-words-converted');
  });

  test('converts values including numbers to dasherized', () => {
    expect(dasherize('i\'m a 69er')).toBe('i\'m-a-69er');
  });
});
