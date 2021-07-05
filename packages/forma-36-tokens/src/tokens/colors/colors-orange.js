const scaleOrange = {
  'orange-100': '#FFF2E4',
  'orange-200': '#FDE5C0',
  'orange-300': '#FDB882',
  'orange-400': '#F07F23',
  'orange-500': '#CC4500',
  'orange-600': '#B12D00',
  'orange-700': '#892300',
  'orange-800': '#731A00',
  'orange-900': '#631C00',
};

const colorsOrange = {
  'color-orange-dark': scaleOrange['orange-600'],
  'color-orange-base': scaleOrange['orange-500'],
  'color-orange-mid': scaleOrange['orange-400'],
  'color-orange-light': scaleOrange['orange-200'],
  'color-orange-lightest': scaleOrange['orange-100'],
};

module.exports = {
  ...colorsOrange,
  ...scaleOrange,
};
