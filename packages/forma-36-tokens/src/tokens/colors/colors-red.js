const scaleRed = {
  'red-100': '#FFF2F2',
  'red-200': '#FFE0E0',
  'red-300': '#FFB1B2',
  'red-400': '#FF707D',
  'red-500': '#DA294A',
  'red-600': '#BD002A',
  'red-700': '#990017',
  'red-800': '#7F0010',
  'red-900': '#72000E',
};

const colorsRed = {
  'color-red-dark': scaleRed['red-700'],
  'color-red-base': scaleRed['red-600'],
  'color-red-mid': scaleRed['red-500'],
  'color-red-light': scaleRed['red-300'],
  'color-red-lightest': scaleRed['red-100'],
};

module.exports = {
  ...colorsRed,
  ...scaleRed,
};
