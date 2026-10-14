const ROOT_FONT_SIZE = 16;

export function remToPx(value: string) {
  return value.replace(/(-?\d*\.?\d+)rem\b/g, (_, remValue) => {
    return `${Number.parseFloat(remValue) * ROOT_FONT_SIZE}px`;
  });
}
