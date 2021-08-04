const colorsOrange = require('./colors-orange');
const colorsRed = require('./colors-red');
const colorsGreen = require('./colors-green');
const colorsBlue = require('./colors-blue');

const colorsSemantic = {
  'color-primary': colorsBlue['blue-500'],
  'color-positive': colorsGreen['green-500'],
  'color-negative': colorsRed['red-500'],
  'color-warning': colorsOrange['orange-400'],
};

module.exports = colorsSemantic;
