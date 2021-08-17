module.exports.removeComponentImport = function removeComponentImport(
  j,
  source,
  { importName, componentName },
) {
  return j(source)
    .find(j.ImportDeclaration)
    .forEach((dpath) => {
      if (dpath.value.source.value === importName) {
        const specifiers = j(dpath).find(j.ImportSpecifier);

        specifiers.forEach((spath) => {
          if (spath.value.imported.name === componentName) {
            if (specifiers.length === 1) {
              j(dpath).remove();
            } else {
              j(spath).remove();
            }
          }
        });
      }
    })
    .toSource();
};
