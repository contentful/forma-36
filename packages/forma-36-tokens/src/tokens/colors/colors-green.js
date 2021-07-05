const scaleGreen = {
  'green-100': '#EAF9E8',
  'green-200': '#CDF3C6',
  'green-300': '#9ED696',
  'green-400': '#5DB057',
  'green-500': '#008539',
  'green-600': '#006D23',
  'green-700': '#00550C',
  'green-800': '#004700',
  'green-900': '#003F00',
};

const colorsGreen = {
  'color-green-dark': scaleGreen['green-700'],
  'color-green-base': scaleGreen['green-600'],
  'color-green-mid': scaleGreen['green-500'],
  'color-green-light': scaleGreen['green-300'],
  'color-green-lightest': scaleGreen['green-100'],
};

module.exports = {
  ...colorsGreen,
  ...scaleGreen,
};
