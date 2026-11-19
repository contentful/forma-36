/**
 * Gets the children of a JSX element without whitespace-only text nodes
 * @param {*} element - JSXElement or JSXFragment node
 * @returns list of children without whitespace-only JSXText
 */
module.exports.getNonBlankChildren = function getNonBlankChildren(element) {
  return element.children.filter(
    (child) => !(child.type === 'JSXText' && !child.value.trim()),
  );
};
