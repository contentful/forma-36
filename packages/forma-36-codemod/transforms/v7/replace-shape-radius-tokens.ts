/**
 * Codemod: replace-shape-radius-tokens
 * 
 * Replaces deprecated Forma 36 border radius token names
 * (tokens.borderRadiusSmall/Medium/Large) with the new numeric ramp
 * (tokens.radius100/200/300).
 */

module.exports = function replaceShapeRadiusTokens(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const radiusMap = {
    borderRadiusSmall: 'radius100',
    borderRadiusMedium: 'radius200',
  };

  // Find all tokens.<oldName> and replace with tokens.<newName>
  root
    .find(j.MemberExpression, {
      object: { name: 'tokens' },
    })
    .forEach(path => {
      const prop = path.node.property;

      if (prop.type === 'Identifier' && radiusMap[prop.name]) {
        prop.name = radiusMap[prop.name];
      }

      if (prop.type === 'Literal' && radiusMap[prop.value]) {
        prop.value = radiusMap[prop.value];
      }
    });

  return root.toSource();
};
