/**
 * Converts a hexadecimal color code to an RGB array.
 * @param {string} hex - The hexadecimal color code
 * @returns An array representing the RGB values of the color in the order [red, green, blue].
 */
export const hexToRgb = (hex: string): number[] => {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

/**
 * Calculates the relative luminance of an RGB color.
 * @param {number[]} rgb - An array representing the RGB values of the color in the order [red, green, blue].
 * @returns The relative luminance of the color.
 */
export const calculateLuminance = (rgb: number[]): number => {
  const sRGB = rgb.map((val) => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};

/**
 * Calculates the inverted color based on the provided color.
 * @param {string} color - The color in hexadecimal format.
 * @returns The inverted color for improved contrast.
 *
 * This function calculates the relative luminance of the background color and
 * suggests either black or white as the inverted color based on the luminance value.
 * The inverted color is chosen for improved readability and contrast.
 */
export const getInvertedColor = (color: string): string => {
  const [r, g, b] = hexToRgb(color);
  const luminance = calculateLuminance([r, g, b]);

  return luminance > 0.5 ? '#000000' : '#ffffff';
};
