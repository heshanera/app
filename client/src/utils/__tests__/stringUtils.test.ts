import { isSubstring } from '../stringUtils';

describe('isSubstring functionality', () => {
  it('returns true when string2 is a substring of string1 (case-insensitive)', () => {
    const result = isSubstring('product name', 'PRODUCT');
    expect(result).toBe(true);
  });

  it('returns false when string2 is not a substring of string1 (case-insensitive)', () => {
    const result = isSubstring('product name', 'NOT');
    expect(result).toBe(false);
  });

  it('returns true when string2 is a substring of string1 (case-sensitive)', () => {
    const result = isSubstring('Product Name', 'Product');
    expect(result).toBe(true);
  });
});
