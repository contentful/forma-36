module.exports.getComponentLocalName = function getComponentLocalName(
  j,
  source,
  { importName, componentName },
) {
  let finalName = '';

  j(source)
    .find(j.ImportDeclaration)
    .forEach((path) => {
      if (path.value.source.value === importName) {
        j(path)
          .find(j.ImportSpecifier)
          .forEach((path) => {
            if (path.value.imported.name === componentName) {
              finalName = path.value.local.name;
            }
          });
      }
    });

  return finalName;
};
