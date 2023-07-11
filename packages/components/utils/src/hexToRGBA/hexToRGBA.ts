/**
 * Converts a hex color to rgba
 * @param hex - Hex color
 * @param alpha - Alpha value @default 1
 * @returns rgba color
 * @example
 * hexToRGBA('#000000', 0.5)
 */
export function hexToRGBA(hex: string, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
