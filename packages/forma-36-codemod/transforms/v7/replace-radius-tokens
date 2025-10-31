const { changeIdentifier } = require('../../utils');

/**
 * Codemod: replace-shape-radius-tokens
 * 
 * Replaces deprecated Forma 36 border radius token names
 * (borderRadiusSmall/Medium/Large) with the new numeric ramp
 * (radius100/200/300).
 */

const radiusMap = {
  borderRadiusSmall: 'radius100',
  borderRadiusMedium: 'radius200',
};

module.exports = function replaceShapeRadiusTokens(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  Object.entries(radiusMap).forEach(([oldName, newName]) => {
    source = changeIdentifier(j, source, {
      from: oldName,
      to: newName,
    });
  });

  return source;
};
