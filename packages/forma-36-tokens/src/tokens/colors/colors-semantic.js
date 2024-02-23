const colorsOrange = require('./colors-orange');
const colorsRed = require('./colors-red');
const colorsGreen = require('./colors-green');
const colorsBlue = require('./colors-blue');

const colorsSemantic = {
  'color-primary': colorsBlue['blue-600'],
  'color-positive': colorsGreen['green-600'],
  'color-negative': colorsRed['red-600'],
  'color-warning': colorsOrange['orange-600'],
};

module.exports = colorsSemantic;
