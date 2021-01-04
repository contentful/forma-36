const colorsBlue = require('./../colors/colors-blue.js');
const colorsRed = require('./../colors/colors-red.js');
const colorsGreen = require('./../colors/colors-green.js');
const colorsOrange = require('./../colors/colors-orange.js');

const glows = {
  'glow-primary': `0px 0px 0px 3px ${colorsBlue['color-blue-light']}`,
  'glow-negative': `0px 0px 0px 3px ${colorsRed['color-red-lightest']}`,
  'glow-positive': `0px 0px 0px 3px ${colorsGreen['color-green-lightest']}`,
  'glow-warning': `0px 0px 0px 3px ${colorsOrange['color-orange-lightest']}`,
};

module.exports = glows;
