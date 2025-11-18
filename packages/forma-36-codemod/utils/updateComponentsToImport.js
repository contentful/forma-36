/**
 * Update the list of components to import in the source code
 * @param {*} componentsToImport - array of components to import
 * @param {*} newImports - array or string of new imports added to source
 * @returns Updated list of compoentns to import
 */
module.exports.updateComponentsToImport = (componentsToImport, newImports) => {
  let _imports = newImports;
  let allComponents = componentsToImport;
  if (!Array.isArray(newImports)) {
    _imports = [newImports];
  }

  _imports.forEach((component) => {
    if (!allComponents.includes(component)) {
      allComponents = [...allComponents, component];
    }
  });
  return allComponents;
};
