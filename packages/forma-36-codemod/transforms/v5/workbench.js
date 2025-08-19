const {
  addImport,
  changeImport,
  getComponentLocalName,
  getProperty,
  removeComponentImport,
  pipe,
} = require('../../utils');

function updateToV5Workbench(file, api) {
  const j = api.jscodeshift;
  const root = file.source;

  // Resolve local names (in case of aliasing)

  /**
   *     const componentName = getComponentLocalName(j, source, {
      componentName: 'Modal',
      importName: getFormaImport(),
    });
   */
  const WB_NAME = getComponentLocalName(j, root, {
    componentName: 'Workbench',
    importName: '@contentful/f36-workbench',
  });
  const WB_HEADER_NAME = getComponentLocalName(j, root, {
    componentName: 'WorkbenchHeader',
    importName: '@contentful/f36-workbench',
  });
  const WB_SIDEBAR_NAME = getComponentLocalName(j, root, {
    componentName: 'WorkbenchSidebar',
    importName: '@contentful/f36-workbench',
  });
  const WB_CONTENT_NAME = getComponentLocalName(j, root, {
    componentName: 'WorkbenchContent',
    importName: '@contentful/f36-workbench',
  });

  // Helper: is <Workbench.*> member expression with given property name
  const isWBMember = (el, prop) =>
    el &&
    el.openingElement &&
    el.openingElement.name &&
    el.openingElement.name.type === 'JSXMemberExpression' &&
    el.openingElement.name.object.name === WB_NAME &&
    el.openingElement.name.property.name === prop;

  // Helper: is <Identifier> equal to a local Workbench* component
  const isWBIdentifier = (el, idName) =>
    el &&
    el.openingElement &&
    el.openingElement.name &&
    el.openingElement.name.type === 'JSXIdentifier' &&
    el.openingElement.name.name === idName;

  // Transform each <Workbench> usage
  root
    .find(j.JSXElement, {
      openingElement: { name: { type: 'JSXIdentifier', name: WB_NAME } },
    })
    .forEach((path) => {
      const node = path.node;
      const originalAttrs = node.openingElement.attributes || [];

      let headerAttrExpr = null;
      let leftSidebarAttrExpr = null;
      let rightSidebarAttrExpr = null;
      const newChildren = [];

      // Iterate over direct children of <Workbench>
      (node.children || [])
        .filter((c) => c && c.type === 'JSXElement')
        .forEach((child) => {
          // Handle Header (both Workbench.Header and WorkbenchHeader)
          if (
            isWBMember(child, 'Header') ||
            isWBIdentifier(child, WB_HEADER_NAME)
          ) {
            // Build <Header ...mappedProps... />
            const headerOpeningEl = j.jsxOpeningElement(
              j.jsxIdentifier('Header'),
            );
            const headerClosingEl = j.jsxClosingElement(
              j.jsxIdentifier('Header'),
            );
            headerOpeningEl.attributes = [];

            // Map props from Workbench.Header -> Header
            const titleProp = getProperty(child, 'title');
            const descProp = getProperty(child, 'description');
            const onBackProp = getProperty(child, 'onBack');
            const actionsProp = getProperty(child, 'actions');

            // title -> title
            if (titleProp && titleProp.value) {
              headerOpeningEl.attributes.push(
                j.jsxAttribute(j.jsxIdentifier('title'), titleProp.value),
              );
            }

            // description -> metadata
            if (descProp && descProp.value) {
              headerOpeningEl.attributes.push(
                j.jsxAttribute(j.jsxIdentifier('metadata'), descProp.value),
              );
            }

            // onBack -> backButtonProps={{ onClick: <expr> }}
            if (onBackProp && onBackProp.value) {
              headerOpeningEl.attributes.push(
                j.jsxAttribute(
                  j.jsxIdentifier('backButtonProps'),
                  j.jsxExpressionContainer(
                    j.objectExpression([
                      j.objectProperty(
                        j.identifier('onClick'),
                        onBackProp.value.expression || onBackProp.value,
                      ),
                    ]),
                  ),
                ),
              );
            }

            // actions -> actions
            if (actionsProp && actionsProp.value) {
              headerOpeningEl.attributes.push(
                j.jsxAttribute(j.jsxIdentifier('actions'), actionsProp.value),
              );
            }

            // Construct <Header ... />
            const headerEl = j.jsxElement(headerOpeningEl, headerClosingEl, []);

            // Wrap into <Layout.Header>...</Layout.Header>
            const layoutHeaderEl = j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Layout.Header')),
              j.jsxClosingElement(j.jsxIdentifier('Layout.Header')),
              [headerEl],
            );

            headerAttrExpr = j.jsxExpressionContainer(layoutHeaderEl);
          }
          // Handle Sidebar (both Workbench.Sidebar and WorkbenchSidebar)
          else if (
            isWBMember(child, 'Sidebar') ||
            isWBIdentifier(child, WB_SIDEBAR_NAME)
          ) {
            // Determine position (default: left)
            const positionProp = getProperty(child, 'position');
            let isRight = false;
            if (
              positionProp &&
              positionProp.value &&
              positionProp.value.type === 'Literal'
            ) {
              isRight = positionProp.value.value === 'right';
            } else if (
              positionProp &&
              positionProp.value &&
              positionProp.value.type === 'JSXExpressionContainer' &&
              positionProp.value.expression &&
              positionProp.value.expression.type === 'Literal'
            ) {
              isRight = positionProp.value.expression.value === 'right';
            }

            const layoutSidebarEl = j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Layout.Sidebar')),
              j.jsxClosingElement(j.jsxIdentifier('Layout.Sidebar')),
              child.children || [],
            );

            const expr = j.jsxExpressionContainer(layoutSidebarEl);
            if (isRight) {
              rightSidebarAttrExpr = expr;
            } else {
              leftSidebarAttrExpr = expr;
            }
          }
          // Handle Content (both Workbench.Content and WorkbenchContent)
          else if (
            isWBMember(child, 'Content') ||
            isWBIdentifier(child, WB_CONTENT_NAME)
          ) {
            const layoutBodyEl = j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Layout.Body')),
              j.jsxClosingElement(j.jsxIdentifier('Layout.Body')),
              child.children || [],
            );
            newChildren.push(layoutBodyEl);
          } else {
            // Any other children are passed through as-is
            newChildren.push(child);
          }
        });

      // Build new <Layout ...> element
      const layoutOpening = j.jsxOpeningElement(j.jsxIdentifier('Layout'), [
        ...originalAttrs,
        ...(headerAttrExpr
          ? [j.jsxAttribute(j.jsxIdentifier('header'), headerAttrExpr)]
          : []),
        ...(leftSidebarAttrExpr
          ? [
              j.jsxAttribute(
                j.jsxIdentifier('leftSidebar'),
                leftSidebarAttrExpr,
              ),
            ]
          : []),
        ...(rightSidebarAttrExpr
          ? [
              j.jsxAttribute(
                j.jsxIdentifier('rightSidebar'),
                rightSidebarAttrExpr,
              ),
            ]
          : []),
      ]);
      const layoutClosing = j.jsxClosingElement(j.jsxIdentifier('Layout'));

      const layoutEl = j.jsxElement(
        layoutOpening,
        layoutClosing,
        newChildren.length ? newChildren : null,
      );

      // Replace original <Workbench> with <Layout>
      j(path).replaceWith(layoutEl);
    });

  // Update imports: Workbench -> Layout; remove other specifiers
  changeImport(root, {
    from: '@contentful/f36-workbench',
    to: '@contentful/f36-layout',
    specifierMap: {
      Workbench: 'Layout',
    },
  });

  removeComponentImport(root, {
    source: '@contentful/f36-workbench',
    components: ['WorkbenchHeader', 'WorkbenchSidebar', 'WorkbenchContent'],
  });

  // Add Header import only if <Header> is used (from @contentful/f36-header)
  if (root.find(j.JSXIdentifier, { name: 'Header' }).size() > 0) {
    addImport(root, {
      source: '@contentful/f36-header',
      specifiers: ['Header'],
    });
  }

  return root.toSource({ quote: 'single' });
}

module.exports = pipe([updateToV5Workbench]);
