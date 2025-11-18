/**
 * Changes component name from componentName to outputComponentName
 * @param {*} j - jscodeshift API
 * @param {*} source - original source code
 * @param {{componentName: string, outputComponentName: string}} params - Object with old component name and new componetn name
 * @returns source with updated component names
 */
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
