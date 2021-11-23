// This removes the forma 36 v3 css imports
function removeCSSImport(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  return j(source)
    .find(j.ImportDeclaration)
    .forEach((path) => {
      if (path.value.source.value.match(/^@contentful\/forma-36.+?\.css$/)) {
        j(path).remove();
      }
    })
    .toSource();
}

module.exports = removeCSSImport;
