export const hexToRgb = (hex: string): number[] => {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

export const calculateLuminance = (rgb: number[]): number => {
  const sRGB = rgb.map((val) => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};

export const getInvertedColor = (color: string): string => {
  const [r, g, b] = hexToRgb(color);
  const luminance = calculateLuminance([r, g, b]);

  return luminance > 0.5 ? '#000000' : '#ffffff';
};
