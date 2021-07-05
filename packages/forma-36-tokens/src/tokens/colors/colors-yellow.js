const scaleYellow = {
  'yellow-100': '#FEF9DF',
  'yellow-200': '#FFF6CC',
  'yellow-300': '#FFE993',
  'yellow-400': '#FFD960',
  'yellow-500': '#FFC835',
  'yellow-600': '#EAAF09',
  'yellow-700': '#B78300',
  'yellow-800': '#956300',
  'yellow-900': '#7F5200',
};

const colorsYellow = {
  'color-yellow-dark': scaleYellow['yellow-800'],
  'color-yellow-base': scaleYellow['yellow-600'],
  'color-yellow-mid': scaleYellow['yellow-500'],
  'color-yellow-light': scaleYellow['yellow-400'],
  'color-yellow-lightest': scaleYellow['yellow-200'],
};

module.exports = { ...scaleYellow, ...colorsYellow };
