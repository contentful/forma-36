const colorsBlue = require('./../colors/colors-blue.js');
const colorsRed = require('./../colors/colors-red.js');
const colorsGreen = require('./../colors/colors-green.js');
const colorsOrange = require('./../colors/colors-orange.js');
const colorsMuted = require('./../colors/colors-elements.js');

const glows = {
  'glow-primary': `0px 0px 0px 3px ${colorsBlue['color-blue-light']}`,
  'glow-negative': `0px 0px 0px 3px ${colorsRed['color-red-light']}`,
  'glow-positive': `0px 0px 0px 3px ${colorsGreen['color-green-light']}`,
  'glow-warning': `0px 0px 0px 3px ${colorsOrange['color-orange-light']}`,
  'glow-muted': `0px 0px 0px 3px ${colorsMuted['color-element-light']}`,
};

module.exports = glows;
