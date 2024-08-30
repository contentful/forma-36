/**
 * Update identifier from old to new one
 * @param {*} j - jscodeshift API
 * @param {*} source - original source code
 * @param {{from: string, to: string}} params - Object with old and new Identifier names
 * @param {string} params.from - old identifier name
 * @param {string} params.to - new identifier name
 * @returns source with updated identifiers statement
 */
module.exports.changeIdentifier = function changeIdentifier(
  j,
  source,
  { from, to },
) {
  return j(source)
    .find(j.Identifier, { name: from })
    .forEach((path) => {
      j(path).replaceWith(j.identifier(to));
    })
    .toSource();
};
