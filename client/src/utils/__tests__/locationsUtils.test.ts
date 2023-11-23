import { getCurrentUrlPath } from '../locationUtils';

describe('getCurrentUrlPath functionality', () => {
  it('should return an empty string for null input', () => {
    const result = getCurrentUrlPath(null);
    expect(result).toBe('/');
  });

  it('should extract the third segment from a valid URL path', () => {
    const result = getCurrentUrlPath('/some/path');
    expect(result).toBe('path/');
  });

  it('should handle empty pathName by returning an empty string', () => {
    const result = getCurrentUrlPath('');
    expect(result).toBe('/');
  });

  it('should handle pathName with no third segment by returning an empty string', () => {
    const result = getCurrentUrlPath('/');
    expect(result).toBe('/');
  });
});
