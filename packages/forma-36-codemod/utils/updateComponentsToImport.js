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
