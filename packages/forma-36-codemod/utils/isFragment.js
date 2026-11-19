/**
 * Checks if a node is a fragment: `<>…</>`, or `<Fragment>` / `<React.Fragment>` without props
 * @param {*} j - jscodeshift API
 * @param {*} node - node to check
 * @returns true if node is a fragment, false otherwise
 */
module.exports.isFragment = function isFragment(j, node) {
  return (
    node?.type === 'JSXFragment' ||
    (node?.type === 'JSXElement' &&
      node.openingElement.attributes.length === 0 &&
      ['Fragment', 'React.Fragment'].includes(
        j(node.openingElement.name).toSource(),
      ))
  );
};
