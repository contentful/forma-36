export const getComponentLocalName = function getComponentLocalName(
  j,
  source,
  { importName, componentName },
) {
  let finalName = '';

  j(source)
    .find(j.ImportDeclaration, { source: { value: importName } })
    .forEach((path) => {
      j(path)
        .find(j.ImportSpecifier, { imported: { name: componentName } })
        .forEach((path) => {
          finalName = path.value.local.name;
        });
    });

  return finalName;
};
