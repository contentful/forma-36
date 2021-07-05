const colorsBlack = require('./colors-black');
const colorsGray = require('./colors-gray');

const colorsContrast = {
  'color-contrast-dark': colorsBlack['color-black'],
  'color-contrast-mid': colorsGray['gray-900'],
  'color-contrast-light': colorsGray['gray-800'],
};

module.exports = colorsContrast;
