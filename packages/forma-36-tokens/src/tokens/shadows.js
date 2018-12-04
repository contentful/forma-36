const colors = require('./colors-semantic.js');

const shadows = {
  'box-shadow-default': '0 1px 3px rgba(0, 0, 0, 0.08)',
  'box-shadow-heavy': '0 2px 3px rgba(0, 0, 0, 0.35)',
  'glow-primary': `0px 0px 7px ${colors['color-primary']}`,
  'glow-negative': `0px 0px 7px ${colors['color-negative']}`,
  'glow-positive': `0px 0px 7px ${colors['color-positive']}`,
};

module.exports = shadows;
