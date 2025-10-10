const {
  pipe,
  changeIdentifier,
  removeComponentImport,
} = require('../../utils');
const { getImport } = require('../../utils/config');

// v6 Menu codemod:
// 1. <Menu.Submenu> -> <Menu>
// 2. <Submenu> -> <Menu>
// 3. Remove Submenu / SubmenuProps named imports from the Menu package import.
//    Keep other imports intact. Replace type usages SubmenuProps -> MenuProps via identifier rename.

const updateToV6Menu = function (file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  // Identify import source name for menu. We support either '@contentful/f36-menu' or '@contentful/f36-components'
  const menuImportNames = [
    getImport('f36-menu'),
    getImport('f36-components'),
  ].filter(Boolean);

  menuImportNames.forEach((importName) => {
    if (!importName) return;

    // 1. Replace Menu.Submenu (member expression style) usages.
    // We look for JSX opening & closing elements whose name is JSXMemberExpression with object.name === Menu and property.name === Submenu.
    // Batch mutate opening + closing before re-serializing to avoid transient invalid JSX
    {
      const root = j(source);
      root
        .find(j.JSXOpeningElement, {
          name: {
            type: 'JSXMemberExpression',
            object: { type: 'JSXIdentifier', name: 'Menu' },
            property: { type: 'JSXIdentifier', name: 'Submenu' },
          },
        })
        .forEach((p) => (p.node.name = j.jsxIdentifier('Menu')));
      root
        .find(j.JSXClosingElement, {
          name: {
            type: 'JSXMemberExpression',
            object: { type: 'JSXIdentifier', name: 'Menu' },
            property: { type: 'JSXIdentifier', name: 'Submenu' },
          },
        })
        .forEach((p) => (p.node.name = j.jsxIdentifier('Menu')));
      source = root.toSource();
    }

    // 2. Replace standalone <Submenu>...</Submenu> with <Menu>...</Menu>
    {
      const root = j(source);
      root
        .find(j.JSXOpeningElement, {
          name: { type: 'JSXIdentifier', name: 'Submenu' },
        })
        .forEach((p) => (p.node.name = j.jsxIdentifier('Menu')));
      root
        .find(j.JSXClosingElement, {
          name: { type: 'JSXIdentifier', name: 'Submenu' },
        })
        .forEach((p) => (p.node.name = j.jsxIdentifier('Menu')));
      source = root.toSource();
    }

    // 3. Adjust import specifiers BEFORE renaming identifiers:
    //    - Remove Submenu
    //    - Rename SubmenuProps -> MenuProps if MenuProps not already imported; otherwise remove.
    source = removeComponentImport(j, source, {
      importName,
      componentName: 'Submenu',
    });

    // For SubmenuProps we need to inspect existing import declaration first
    const rootForImports = j(source);
    rootForImports
      .find(j.ImportDeclaration, { source: { value: importName } })
      .forEach((declPath) => {
        const specifiers = declPath.node.specifiers || [];
        const hasMenuProps = specifiers.some(
          (s) =>
            s.type === 'ImportSpecifier' && s.imported.name === 'MenuProps',
        );
        specifiers.forEach((s) => {
          if (
            s.type === 'ImportSpecifier' &&
            s.imported.name === 'SubmenuProps'
          ) {
            if (!hasMenuProps) {
              // Rename in-place
              s.imported.name = 'MenuProps';
              if (s.local && s.local.name === 'SubmenuProps') {
                s.local.name = 'MenuProps';
              }
            } else {
              // Remove specifier if MenuProps already present
              specifiers.splice(specifiers.indexOf(s), 1);
            }
          }
        });
        // If after removal there are no specifiers left, remove the whole import
        if (declPath.node.specifiers.length === 0) {
          j(declPath).remove();
        }
      });
    source = rootForImports.toSource();

    // 4. Now safely rename remaining identifier usages (non-import) to Menu / MenuProps.
    source = changeIdentifier(j, source, { from: 'Submenu', to: 'Menu' });
    source = changeIdentifier(j, source, {
      from: 'SubmenuProps',
      to: 'MenuProps',
    });
  });

  return source;
};

module.exports = pipe([updateToV6Menu]);
