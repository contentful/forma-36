module.exports.changeComponentName = function changeProperties(
  j,
  source,
  { componentName, outputComponentName },
) {
  return j(source)
    .findJSXElements(componentName)
    .find(j.JSXIdentifier, {
      name: componentName,
    })
    .forEach((nodePath) => {
      nodePath.node.name = outputComponentName;
    })
    .toSource();
};
