const scalePurple = {
  'purple-100': '#F7F2FF',
  'purple-200': '#EDE3FF',
  'purple-300': '#D1BBFF',
  'purple-400': '#AE89FF',
  'purple-500': '#8553E7',
  'purple-600': '#6C3ECF',
  'purple-700': '#5127B5',
  'purple-800': '#3E16A4',
  'purple-900': '#340E9C',
};

const colorsPurple = {
  'color-purple-dark': scalePurple['purple-700'],
  'color-purple-base': scalePurple['purple-600'],
  'color-purple-mid': scalePurple['purple-500'],
  'color-purple-light': scalePurple['purple-300'],
  'color-purple-lightest': scalePurple['purple-100'],
};

module.exports = {
  ...colorsPurple,
  ...scalePurple,
};
