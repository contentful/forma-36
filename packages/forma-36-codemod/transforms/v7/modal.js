const { warningMessage } = require('../../utils');
const { getImport } = require('../../utils/config');

// v7 Modal codemod, migrates to the `header` / `controls` slots:
// 1. title / subtitle / modalHeaderProps        -> header={<Modal.Header … />}
// 2. {() => <><Modal.Header/><Modal.Content/><Modal.Controls/></>}
//                                               -> header / controls slots, Content children as Modal children
// 3. Modal.Header onClose identical to Modal onClose -> removed (Header reads it from the Modal)
// Everything that is not provably safe is left untouched and reported as a warning.

const PARTS = ['Header', 'Content', 'Controls'];

module.exports = function updateToV7Modal(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const importNames = new Set([
    getImport('f36-components'),
    getImport('f36-modal'),
  ]);

  const imports = root
    .find(j.ImportDeclaration)
    .filter((p) => importNames.has(p.node.source.value));
  const localName = (name) => {
    let local = '';
    imports
      .find(j.ImportSpecifier, { imported: { name } })
      .forEach((p) => (local = p.node.local.name));
    return local;
  };

  const warn = (message, node) =>
    warningMessage(`[Modal] ${message}`, { file, value: node });

  // named compound imports are not migrated, only reported
  PARTS.forEach((part) => {
    const name = localName(`Modal${part}`);
    if (!name) return;
    root
      .find(j.JSXOpeningElement, { name: { type: 'JSXIdentifier', name } })
      .forEach((p) =>
        warn(`Use <Modal.${part}> instead of <${name}> to migrate.`, p.node),
      );
  });

  const modalName = localName('Modal');
  if (!modalName) return root.toSource();

  const isPart = (node, part) =>
    node?.type === 'JSXElement' &&
    node.openingElement.name.type === 'JSXMemberExpression' &&
    node.openingElement.name.object.name === modalName &&
    node.openingElement.name.property.name === part;

  const isFragment = (node) =>
    node?.type === 'JSXFragment' ||
    (node?.type === 'JSXElement' &&
      node.openingElement.attributes.length === 0 &&
      ['Fragment', 'React.Fragment'].includes(
        j(node.openingElement.name).toSource(),
      ));

  const isBlank = (node) => node.type === 'JSXText' && !node.value.trim();
  const getAttr = (opening, name) =>
    opening.attributes.find(
      (a) => a.type === 'JSXAttribute' && a.name.name === name,
    );
  const removeAttrs = (opening, names) => {
    opening.attributes = opening.attributes.filter(
      (a) => !(a.type === 'JSXAttribute' && names.includes(a.name.name)),
    );
  };
  const exprSource = (attr) =>
    attr?.value?.type === 'JSXExpressionContainer'
      ? j(attr.value.expression).toSource().replace(/\s/g, '')
      : undefined;
  const slot = (name, element) =>
    j.jsxAttribute(j.jsxIdentifier(name), j.jsxExpressionContainer(element));

  // { a: 'x', b } -> a="x" b={b}; anything else -> {...expr}
  const objectToAttrs = (expression) => {
    if (expression.type !== 'ObjectExpression') {
      return [j.jsxSpreadAttribute(expression)];
    }
    return expression.properties.map((prop) => {
      if (prop.type === 'SpreadElement' || prop.type === 'SpreadProperty') {
        return j.jsxSpreadAttribute(prop.argument);
      }
      const value = prop.value;
      return j.jsxAttribute(
        j.jsxIdentifier(prop.key.name ?? prop.key.value),
        value.type === 'StringLiteral' || value.type === 'Literal'
          ? j.stringLiteral(value.value)
          : j.jsxExpressionContainer(value),
      );
    });
  };

  // a="x" b={b} -> { a: 'x', b: b }
  const attrsToObject = (attributes) =>
    j.objectExpression(
      attributes.map((a) => {
        if (a.type === 'JSXSpreadAttribute') return j.spreadElement(a.argument);
        const key = /^[A-Za-z_$][\w$]*$/.test(a.name.name)
          ? j.identifier(a.name.name)
          : j.stringLiteral(a.name.name);
        let value = j.booleanLiteral(true);
        if (a.value?.type === 'JSXExpressionContainer')
          value = a.value.expression;
        else if (a.value) value = j.stringLiteral(a.value.value);
        return j.objectProperty(key, value);
      }),
    );

  const getRenderFunction = (element) => {
    const children = element.children.filter((c) => !isBlank(c));
    const fn = children[0]?.expression;
    return children.length === 1 &&
      ['ArrowFunctionExpression', 'FunctionExpression'].includes(fn?.type)
      ? fn
      : undefined;
  };

  // 1. title / subtitle / modalHeaderProps -> header slot
  const migrateTitleProps = (element) => {
    const opening = element.openingElement;
    const names = ['title', 'subtitle', 'modalHeaderProps'];
    if (!names.some((name) => getAttr(opening, name))) return;
    // with a render function the default header is not rendered, `title` is only read via the params
    if (getRenderFunction(element)) return;

    const title = getAttr(opening, 'title');
    if (getAttr(opening, 'header')) {
      return warn('Has `header` and `title`; remove `title`.', opening);
    }
    if (!title) {
      return warn(
        '`subtitle`/`modalHeaderProps` without `title`; migrate manually.',
        opening,
      );
    }
    if (opening.attributes.some((a) => a.type === 'JSXSpreadAttribute')) {
      return warn(
        'Spread props may contain header props; migrate manually.',
        opening,
      );
    }

    const subtitle = getAttr(opening, 'subtitle');
    const headerProps = getAttr(opening, 'modalHeaderProps');
    const headerAttrs = [title, subtitle].filter(Boolean);
    if (headerProps?.value?.type === 'JSXExpressionContainer') {
      headerAttrs.push(...objectToAttrs(headerProps.value.expression));
    }

    removeAttrs(opening, names);
    opening.attributes.push(
      slot(
        'header',
        j.jsxElement(
          j.jsxOpeningElement(
            j.jsxMemberExpression(
              j.jsxIdentifier(modalName),
              j.jsxIdentifier('Header'),
            ),
            headerAttrs,
            true,
          ),
        ),
      ),
    );
  };

  // 2. pure render function -> header / controls slots
  const migrateRenderFunction = (element) => {
    const opening = element.openingElement;
    const fn = getRenderFunction(element);
    if (!fn) return;

    if (getAttr(opening, 'header') || getAttr(opening, 'controls')) {
      return warn('Render function next to slots; migrate manually.', opening);
    }
    if (fn.params.length > 0) {
      return warn(
        'Render function uses its params; replace them with the Modal props, then migrate.',
        fn,
      );
    }

    let body = fn.body;
    if (body.type === 'BlockStatement') {
      if (body.body.length !== 1 || body.body[0].type !== 'ReturnStatement') {
        return warn(
          'Render function has statements before `return`; migrate manually.',
          fn,
        );
      }
      body = body.body[0].argument;
    }
    if (!isFragment(body)) {
      return warn(
        'Render function does not return a fragment (e.g. a <form> wrapper); migrate manually.',
        fn,
      );
    }

    const parts = body.children.filter((c) => !isBlank(c));
    const kinds = parts.map((c) => PARTS.find((part) => isPart(c, part)));
    const isPure =
      kinds.every(Boolean) &&
      new Set(kinds).size === kinds.length &&
      // keep the visual order: Header, Content, Controls
      kinds.every(
        (k, i) => i === 0 || PARTS.indexOf(kinds[i - 1]) < PARTS.indexOf(k),
      );
    if (!isPure || !kinds.includes('Content')) {
      return warn(
        'Render function contains more than Modal.Header/Content/Controls; migrate manually.',
        fn,
      );
    }

    const byKind = Object.fromEntries(kinds.map((k, i) => [k, parts[i]]));
    const content = byKind.Content;
    const contentAttrs = content.openingElement.attributes;
    if (contentAttrs.length && getAttr(opening, 'modalContentProps')) {
      return warn(
        'Modal.Content props and `modalContentProps` both set; migrate manually.',
        fn,
      );
    }

    if (byKind.Header) opening.attributes.push(slot('header', byKind.Header));
    if (byKind.Controls)
      opening.attributes.push(slot('controls', byKind.Controls));
    if (contentAttrs.length) {
      opening.attributes.push(
        slot('modalContentProps', attrsToObject(contentAttrs)),
      );
    }
    element.children = content.children;
  };

  // 3. drop Modal.Header onClose when it equals the Modal onClose
  const migrateHeaderOnClose = (path) => {
    const modalOnClose = exprSource(
      getAttr(path.node.openingElement, 'onClose'),
    );
    j(path)
      .find(j.JSXElement)
      .filter((p) => isPart(p.node, 'Header'))
      .filter((p) => {
        // only headers of this modal, not of a nested one
        let parent = p.parent;
        while (parent && !isModal(parent.node)) parent = parent.parent;
        return parent === path;
      })
      .forEach((p) => {
        const header = p.node.openingElement;
        const onClose = getAttr(header, 'onClose');
        if (!onClose) return;
        if (modalOnClose && exprSource(onClose) === modalOnClose) {
          removeAttrs(header, ['onClose']);
        } else {
          warn(
            '`onClose` on Modal.Header differs from the Modal `onClose`; move the logic to the Modal.',
            header,
          );
        }
      });
  };

  const isModal = (node) =>
    node?.type === 'JSXElement' &&
    node.openingElement.name.type === 'JSXIdentifier' &&
    node.openingElement.name.name === modalName;

  root
    .find(j.JSXElement)
    .filter((p) => isModal(p.node))
    .forEach((path) => {
      migrateTitleProps(path.node);
      migrateRenderFunction(path.node);
      migrateHeaderOnClose(path);
    });

  return root.toSource();
};
