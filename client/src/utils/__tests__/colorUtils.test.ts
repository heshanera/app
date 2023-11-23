import { hexToRgb, getInvertedColor } from '../colorUtils';

describe('hexToRgb functionality', () => {
  it('converts a hexadecimal color code to an RGB array', () => {
    const result = hexToRgb('#3498db');
    expect(result).toEqual([52, 152, 219]);
  });
});

describe('getInvertedColor functionality', () => {
  it('returns black text for a light background color', () => {
    const result = getInvertedColor('#ffffff');
    expect(result).toEqual('#000000');
  });

  it('returns white text for a dark background color', () => {
    const result = getInvertedColor('#000000');
    expect(result).toEqual('#ffffff');
  });
});
